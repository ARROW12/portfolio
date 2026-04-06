// Dark mode
document.getElementById("toggle").onclick = () => {
  document.body.classList.toggle("light");
};

// Smart chatbot
function sendMessage() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let response = "";

  if (input.includes("experience")) {
    response = "Tejas is an AI + Data Engineer working with AWS, PySpark, and AI systems.";
  } 
  else if (input.includes("projects")) {
    response = "He built ChatSTTM and an AI Data Assistant for intelligent data discovery.";
  } 
  else if (input.includes("skills")) {
    response = "Skills include AWS, PySpark, Python, SQL, Airflow, Databricks, and AI.";
  } 
  else if (input.includes("education") || input.includes("mtech")) {
    response = "He is pursuing M.Tech in AI & ML from BITS Pilani starting April 2026.";
  } 
  else {
    response = "Ask me about experience, projects, or skills!";
  }

  document.getElementById("chatbox").innerHTML += `<p><b>You:</b> ${input}</p>`;
  document.getElementById("chatbox").innerHTML += `<p><b>Bot:</b> ${response}</p>`;
}
