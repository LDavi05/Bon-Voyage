const body = document.querySelector(".body");
const modeBTN = document.querySelector(".mode-btn");
const iconTheme = document.querySelector(".icon-theme");
const modeText = document.querySelector(".mode-text");

if (localStorage.getItem("themeMode") === null) {
  localStorage.setItem("themeMode", "light");
}

modeBTN.addEventListener("click", () => {
  if (localStorage.getItem("themeMode") === "dark") {
    localStorage.setItem("themeMode", "light");
  } else {
    localStorage.setItem("themeMode", "dark");
  }
  changeTheme();
});

function changeTheme() {
  if (localStorage.getItem("themeMode") === "dark") {
    body.classList.add("darkmode");
    modeText.innerHTML = "Modo Claro";
    iconTheme.classList.remove("bx-moon");
    iconTheme.classList.add("bx-sun");
  } else {
    body.classList.remove("darkmode");
    modeText.innerHTML = "Modo Escuro";
    iconTheme.classList.remove("bx-sun");
    iconTheme.classList.add("bx-moon");
  }
}

console.log(localStorage.getItem("themeMode"))
changeTheme();
