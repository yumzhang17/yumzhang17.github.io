<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "leave-your-voice.firebaseapp.com",
  databaseURL: "https://leave-your-voice-default-rtdb.firebaseio.com/",
  projectId: "leave-your-voice",
  storageBucket: "leave-your-voice.appspot.com",
  messagingSenderId: "500860553315",
  appId: "1:500860553315:web:69311c07852c9fcd4d5056",
  measurementId: "G-QNRKG7171V"
};


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);

  // Function to submit a comment
  function submitComment() {
    const commentInput = document.getElementById('commentInput');
    const comment = commentInput.value;
    if (comment.trim() !== "") {
      const commentsRef = ref(db, 'comments');
      const newCommentRef = push(commentsRef);
      set(newCommentRef, {
        text: comment,
        timestamp: Date.now()
      });
      commentInput.value = ''; // Clear the input after sending
    } else {
      alert("Please enter a comment.");
    }
  }
  // display functions
  function displayComments() {
    const commentsRef = ref(db, 'comments');
    onValue(commentsRef, (snapshot) => {
        const commentsDisplay = document.getElementById('commentsDisplay');
        commentsDisplay.innerHTML = ''; // Clear previous comments
        snapshot.forEach((childSnapshot) => {
            const comment = childSnapshot.val();
            const commentDiv = document.createElement('div');
            const date = new Date(comment.timestamp);
            commentDiv.textContent = `${comment.text} - posted on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
            commentsDisplay.appendChild(commentDiv);
        });
    });
}

// fontstyle functions
function insertTag(tag) {
    const textarea = document.getElementById('commentInput');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const beforeText = textarea.value.substring(0, start);
    const afterText = textarea.value.substring(end);
    textarea.value = beforeText + `<${tag}>` + selectedText + `</${tag}>` + afterText;
}

function setFontStyle() {
    const textarea = document.getElementById('commentInput');
    const selectedFont = document.getElementById('fontStyle').value;
    textarea.style.fontFamily = selectedFont;
}

// leave name functions
function submitComment() {
    const commentInput = document.getElementById('commentInput');
    const nicknameInput = document.getElementById('nickname');
    const anonymousCheckbox = document.getElementById('anonymous');
    const comment = commentInput.value.trim();
    const nickname = anonymousCheckbox.checked ? "Anonymous" : nicknameInput.value.trim() || "Anonymous";

    if (comment === "") {
        alert("Please enter a comment.");
        return;
    }

    const commentsRef = ref(db, 'comments');
    const newCommentRef = push(commentsRef);
    set(newCommentRef, {
        text: comment,
        timestamp: Date.now(),
        nickname: nickname
    });

    commentInput.value = '';
    nicknameInput.value = '';
}


function toggleNickname() {
    const nicknameInput = document.getElementById('nickname');
    nicknameInput.disabled = document.getElementById('anonymous').checked;
}

  // Load comments when the window loads
  window.addEventListener('load', () => {
  console.log("Page loaded, displaying comments...");
  displayComments();
});

</script>
