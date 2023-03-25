// Get references to the button elements
const homeBtn = document.getElementById("home_btn");
const resumeBtn = document.getElementById("resume_btn");
const projectsBtn = document.getElementById("project_btn");

// Get references to the div elements
const homeDiv = document.getElementById("home_contain");
const resumeDiv = document.getElementById("resume_contain");
const projectsDiv = document.getElementById("project_contain");

// Add event listeners to the buttons
homeBtn.addEventListener("click", () => {
  homeDiv.style.display = "flex";
  resumeDiv.style.display = "none";
  projectsDiv.style.display = "none";
});

resumeBtn.addEventListener("click", () => {
  homeDiv.style.display = "none";
  resumeDiv.style.display = "flex";
  projectsDiv.style.display = "none";
});

projectsBtn.addEventListener("click", () => {
  homeDiv.style.display = "none";
  resumeDiv.style.display = "none";
  projectsDiv.style.display = "flex";
});
