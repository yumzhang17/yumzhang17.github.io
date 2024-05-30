console.log("JavaScript file loaded");

// Import necessary Firebase SDK functions
// Importing the necessary functions from Firebase SDK
import { getDatabase, ref, push, set, onValue, orderByChild, query } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// Firebase configuration and initialization
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Function to handle comment display
function displayComments() {
    const commentsRef = ref(db, 'comments');
    const orderedQuery = query(commentsRef, orderByChild('timestamp'));

    onValue(orderedQuery, (snapshot) => {
        const commentsDisplay = document.getElementById('commentsDisplay');
        commentsDisplay.innerHTML = '';  // Clear previous comments
        snapshot.forEach((childSnapshot) => {
            const comment = childSnapshot.val();
            const commentDiv = document.createElement('div');
            const date = new Date(comment.timestamp);

            // Create elements for text and date
            const textSpan = document.createElement('span');
            textSpan.textContent = `${comment.nickname ? comment.nickname : "Anonymous"}: ${comment.text}`;
            textSpan.className = 'comment-text';  // Add class for styling

            const dateSpan = document.createElement('span');
            dateSpan.textContent = ` - posted on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
            dateSpan.className = 'comment-date';  // Add class for styling

            // Append spans to the comment div
            commentDiv.appendChild(textSpan);
            commentDiv.appendChild(dateSpan);
            commentsDisplay.appendChild(commentDiv);
        });
    });
}


// Function to handle comment submission
function submitComment() {
    const commentInput = document.getElementById('commentInput');
    const nicknameInput = document.getElementById('nickname');
    const comment = commentInput.value.trim();
    const nickname = nicknameInput.value.trim();

    if (comment === "") {
        alert("Please enter a comment.");
        return;
    }

    if (nickname === "") {
        nickname = "Anonymous";
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

function toggleNickname() {
    const nicknameInput = document.getElementById('nickname');
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
