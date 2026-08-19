import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, onValue, orderByChild, push, query, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBlKtT1R2eu_aHrdaUZR6spUM7bn8KPv5s",
  authDomain: "leave-your-voice.firebaseapp.com",
  projectId: "leave-your-voice",
  storageBucket: "leave-your-voice.appspot.com",
  messagingSenderId: "500860553315",
  appId: "1:500860553315:web:119ceccf41c0fc7b4d5056",
  measurementId: "G-CBEPQFQHVJ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const form = document.getElementById("voiceForm");
const commentInput = document.getElementById("commentInput");
const nicknameInput = document.getElementById("nickname");
const submitButton = document.getElementById("submitBtn");
const commentsDisplay = document.getElementById("commentsDisplay");
const characterCount = document.getElementById("characterCount");
const status = document.getElementById("voiceStatus");

function setStatus(message, type = "") {
  status.textContent = message;
  status.className = `voice-status${type ? ` voice-status--${type}` : ""}`;
}

function formatDate(timestamp) {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return { iso: "", label: "" };
  return {
    iso: date.toISOString(),
    label: new Intl.DateTimeFormat(undefined, { year: "numeric", month: "short", day: "numeric" }).format(date)
  };
}

function createReplyForm(parentId, parentName) {
  const replyForm = document.createElement("form");
  replyForm.className = "voice-reply-form";

  const messageLabel = document.createElement("label");
  messageLabel.textContent = `Reply to ${parentName}`;

  const message = document.createElement("textarea");
  message.required = true;
  message.maxLength = 500;
  message.placeholder = "Write a public reply…";
  message.setAttribute("aria-label", `Reply to ${parentName}`);

  const name = document.createElement("input");
  name.type = "text";
  name.maxLength = 40;
  name.placeholder = "Name or affiliation (optional)";
  name.setAttribute("aria-label", "Name or affiliation (optional)");

  const actions = document.createElement("div");
  actions.className = "voice-reply-form__actions";

  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.textContent = "Cancel";

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "Post reply";

  const replyStatus = document.createElement("p");
  replyStatus.className = "voice-reply-status";
  replyStatus.setAttribute("role", "status");

  actions.append(cancel, submit);
  replyForm.append(messageLabel, message, name, actions, replyStatus);

  cancel.addEventListener("click", () => replyForm.remove());
  replyForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const replyText = message.value.trim();
    if (!replyText) return;

    submit.disabled = true;
    replyStatus.textContent = "Posting reply…";

    try {
      const newReply = push(ref(db, "comments"));
      await set(newReply, {
        text: replyText,
        timestamp: Date.now(),
        nickname: name.value.trim() || "Anonymous",
        parentId
      });
      replyForm.remove();
    } catch (error) {
      submit.disabled = false;
      replyStatus.textContent = "The reply could not be posted. Please try again.";
      replyStatus.classList.add("voice-reply-status--error");
    }
  });

  return replyForm;
}

function createNote(comment, depth) {
  const note = document.createElement("article");
  note.className = `voice-note${depth ? " voice-note--reply" : ""}`;
  note.style.setProperty("--voice-depth", String(Math.min(depth, 4)));

  const message = document.createElement("p");
  message.className = "voice-note__message";
  message.textContent = comment.text || "";

  const meta = document.createElement("footer");
  meta.className = "voice-note__meta";

  const identity = document.createElement("div");
  identity.className = "voice-note__identity";

  const author = document.createElement("span");
  author.className = "voice-note__author";
  author.textContent = comment.nickname || "Anonymous";

  const replyButton = document.createElement("button");
  replyButton.type = "button";
  replyButton.className = "voice-reply-button";
  replyButton.textContent = "Reply";
  replyButton.setAttribute("aria-label", `Reply to ${author.textContent}`);

  const time = document.createElement("time");
  const formattedDate = formatDate(comment.timestamp);
  time.dateTime = formattedDate.iso;
  time.textContent = formattedDate.label;

  replyButton.addEventListener("click", () => {
    const existingForm = note.querySelector(":scope > .voice-reply-form");
    if (existingForm) {
      existingForm.remove();
      return;
    }
    note.appendChild(createReplyForm(comment.id, author.textContent));
    note.querySelector(":scope > .voice-reply-form textarea").focus();
  });

  identity.append(author, replyButton);
  meta.append(identity, time);
  note.append(message, meta);
  return note;
}

function renderComments(snapshot) {
  const comments = [];
  snapshot.forEach((childSnapshot) => comments.push({ id: childSnapshot.key, ...childSnapshot.val() }));
  commentsDisplay.replaceChildren();

  if (!comments.length) {
    const empty = document.createElement("p");
    empty.className = "voice-empty";
    empty.textContent = "No notes yet. You are welcome to begin the conversation.";
    commentsDisplay.appendChild(empty);
    return;
  }

  const byId = new Map(comments.map((comment) => [comment.id, { ...comment, children: [] }]));
  const roots = [];

  byId.forEach((comment) => {
    const parent = comment.parentId ? byId.get(comment.parentId) : null;
    if (parent && parent.id !== comment.id) parent.children.push(comment);
    else roots.push(comment);
  });

  roots.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
  byId.forEach((comment) => comment.children.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0)));

  function appendThread(comment, depth = 0, ancestry = new Set()) {
    commentsDisplay.appendChild(createNote(comment, depth));
    if (ancestry.has(comment.id)) return;
    const nextAncestry = new Set(ancestry).add(comment.id);
    comment.children.forEach((reply) => appendThread(reply, depth + 1, nextAncestry));
  }

  roots.forEach((comment) => appendThread(comment));
}

function displayComments() {
  const orderedComments = query(ref(db, "comments"), orderByChild("timestamp"));
  onValue(orderedComments, renderComments, () => {
    commentsDisplay.replaceChildren();
    const error = document.createElement("p");
    error.className = "voice-empty";
    error.textContent = "The conversation could not be loaded. Please try again later.";
    commentsDisplay.appendChild(error);
  });
}

async function submitComment(event) {
  event.preventDefault();
  const comment = commentInput.value.trim();
  const nickname = nicknameInput.value.trim() || "Anonymous";

  if (!comment) {
    setStatus("Please enter a message before posting.", "error");
    commentInput.focus();
    return;
  }

  submitButton.disabled = true;
  setStatus("Posting your message…");

  try {
    const newComment = push(ref(db, "comments"));
    await set(newComment, { text: comment, timestamp: Date.now(), nickname });
    form.reset();
    characterCount.textContent = "0 / 800";
    setStatus("Thank you—your message is now part of the conversation.", "success");
  } catch (error) {
    setStatus("Your message could not be posted. Please try again.", "error");
  } finally {
    submitButton.disabled = false;
  }
}

commentInput.addEventListener("input", () => {
  characterCount.textContent = `${commentInput.value.length} / 800`;
});

form.addEventListener("submit", submitComment);
displayComments();
