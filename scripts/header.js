const activeClass = "active";
let navList;
let mobileMenu;

function navControl() {
  navList = document.querySelector(".nav-list");
  mobileMenu = document.querySelector(".mobile-menu");
}

function handleClick() {
  navList.classList.toggle(activeClass);
  mobileMenu.classList.toggle(activeClass);
}

//seletor de idioma
function selectPT() {
  const urlFlag = document.querySelector(".pt-br")?.getAttribute("src");
  const currentFlag = document.querySelector(".current-flag");
  const currentText = document.querySelector("#current-language");
  currentFlag?.setAttribute("src", urlFlag);
  currentText.textContent = "PT-BR";
}
function selectUS() {
  const urlFlag = document.querySelector(".us")?.getAttribute("src");
  const currentFlag = document.querySelector(".current-flag");
  const currentText = document.querySelector("#current-language");
  currentFlag?.setAttribute("src", urlFlag);
  currentText.textContent = "US";
}
/*
function selectJP() {
  const urlFlag = document.querySelector(".jp")?.getAttribute("src");
  const currentFlag = document.querySelector(".current-flag");
  const currentText = document.querySelector("#current-language");
  currentFlag?.setAttribute("src", urlFlag);
  currentText.textContent = "JP";
}
*/
