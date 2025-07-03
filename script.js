const texts = ["Developer", "Educator", "Researcher", "Flutter Expert"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
const typedTextSpan = document.querySelector(".typed-text");

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  typedTextSpan.textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      erase();
    }, 2000);
  } else {
    setTimeout(type, 150);
  }
}

function erase() {
  letter = currentText.slice(0, --index);
  typedTextSpan.textContent = letter;

  if (letter.length === 0) {
    count++;
    index = 0;
    setTimeout(type, 500);
  } else {
    setTimeout(erase, 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});



// Dark/Light mode toggle
const modeToggle = document.getElementById("modeToggle");
const currentMode = localStorage.getItem("theme") || "light";

document.body.classList.add(currentMode + "-mode");
modeToggle.textContent = currentMode === "dark" ? "☀️" : "🌙";

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  modeToggle.textContent = isDark ? "☀️" : "🌙";
});
