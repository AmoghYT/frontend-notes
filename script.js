const $ = (s) => document.querySelector(s);

/* Theme: follows the system until the viewer picks one */
const root = document.documentElement;
const themeBtn = $("#themeBtn");
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function isDark() {
  const t = root.getAttribute("data-theme");
  return t ? t === "dark" : darkQuery.matches;
}
function syncThemeLabel() { themeBtn.textContent = isDark() ? "Light" : "Dark"; }

try {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);
} catch (e) {}
syncThemeLabel();

themeBtn.addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
  syncThemeLabel();
});

/* Topic list on small screens */
const index = $("#index");
$("#menuBtn").addEventListener("click", () => index.classList.toggle("open"));
index.addEventListener("click", (e) => { if (e.target.tagName === "A") index.classList.remove("open"); });

/* Highlight the topic being read */
const links = [...document.querySelectorAll(".index a")];
const sections = [...document.querySelectorAll(".topic")];
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px" });
  sections.forEach((s) => io.observe(s));
}

/* Filter topics */
const search = $("#search");
const noResults = $("#noResults");
search.addEventListener("input", () => {
  const term = search.value.trim().toLowerCase();
  let shown = 0;
  sections.forEach((s) => {
    const match = s.textContent.toLowerCase().includes(term);
    s.hidden = !match;
    if (match) shown++;
  });
  links.forEach((l) => { l.parentElement.hidden = document.querySelector(l.getAttribute("href")).hidden; });
  noResults.hidden = shown !== 0;
});

/* Demo: operators */
function calculate() {
  const a = Number($("#numA").value);
  const b = Number($("#numB").value);
  const op = $("#op").value;
  let r;
  switch (op) {
    case "+":  r = a + b; break;
    case "-":  r = a - b; break;
    case "*":  r = a * b; break;
    case "/":  r = b === 0 ? "cannot divide by zero" : a / b; break;
    case "%":  r = b === 0 ? "cannot divide by zero" : a % b; break;
    case "**": r = a ** b; break;
  }
  $("#opResult").textContent = `${a} ${op} ${b} = ${r}`;
}
$("#calcBtn").addEventListener("click", calculate);

/* Demo: if / else */
$("#gradeBtn").addEventListener("click", () => {
  const raw = $("#marks").value;
  const out = $("#gradeResult");
  if (raw === "") { out.textContent = "Enter your marks first"; return; }
  const marks = Number(raw);
  let grade;
  if (marks < 0 || marks > 100) grade = "Marks must be between 0 and 100";
  else if (marks >= 75) grade = "Distinction";
  else if (marks >= 60) grade = "First class";
  else if (marks >= 40) grade = "Pass";
  else grade = "Fail";
  out.textContent = `${marks} marks: ${grade}`;
});

/* Demo: functions */
function greet(name = "friend") { return `Hello, ${name}! This text came from a function.`; }
$("#greetBtn").addEventListener("click", () => {
  const name = $("#nameInput").value.trim();
  $("#greetResult").textContent = name ? greet(name) : greet();
});

/* Demo: objects */
$("#objBtn").addEventListener("click", () => {
  const person = {
    name: $("#objName").value.trim() || "Student",
    skill: $("#objSkill").value.trim() || "JavaScript",
    isLearning: true
  };
  $("#objResult").textContent = JSON.stringify(person, null, 2);
});
