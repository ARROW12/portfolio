// Mobile menu toggle
document.getElementById("menuBtn").onclick = () => {
  document.getElementById("menu").classList.toggle("active");
};

// Chatbot
function sendMessage() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let response = "Ask about skills, projects, or education.";

  if (input.includes("skills")) {
    response = "AWS, PySpark, Python, SQL, Airflow, AI/ML";
  }
  else if (input.includes("projects")) {
    response = "ChatSTTM and AI Data Assistant";
  }
  else if (input.includes("education")) {
    response = "M.Tech AI & ML from BITS Pilani (WILP)";
  }

  document.getElementById("chatbox").innerHTML += `<p>${response}</p>`;
}
