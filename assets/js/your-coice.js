console.log("JavaScript file loaded");

// Import necessary Firebase SDK functions
import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// Firebase configuration and initialization
const firebaseConfig = {
    apiKey: "AIza...",
    authDomain: "leave-your-voice.firebaseapp.com",
    projectId: "leave-your-voice",
    storageBucket: "leave-your-voice.appspot.com",
    messagingSenderId: "500860553315",
    appId: "1:500860553315:web:119ceccf41c0fc7b4d5056",
    measurementId: "G-CBEPQFQHVJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Function to handle comment display
function displayComments() {
    const commentsRef = ref(db, 'comments');
    onValue(commentsRef, (snapshot) => {
        const commentsDisplay = document.getElementById('commentsDisplay');
        commentsDisplay.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const comment = childSnapshot.val();
            const commentDiv = document.createElement('div');
            const date = new Date(comment.timestamp);
            commentDiv.textContent = `${comment.text} - posted on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
            commentsDisplay.appendChild(commentDiv);
        });
    });
}

// Function to handle comment submission
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
    }).then(() => {
        console.log("Comment added to database");
        commentInput.value = '';
        nicknameInput.value = '';
    }).catch((error) => {
        console.error("Error writing comment to database:", error);
    });
}

// Event listeners for document load
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page loaded, displaying comments...");
    displayComments();

    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', submitComment);
    }
});

