// script.js

const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");

function sendMessage() {
  const msg = messageInput.value.trim();

  if (msg !== "") {
    addMessage(msg, "sent");
    messageInput.value = "";

    // Simulated auto-reply after 1 second
    setTimeout(() => {
      addMessage("Auto reply: " + msg, "received");
    }, 1000);
  }
}

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = `message ${type}`;
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to latest
}

// Send message on Enter key press
messageInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
