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
/*
function selectPT() {
  const urlFlag = document.querySelector(".pt-br").getAttribute("src");
  let currentFlag = document.querySelector(".current-flag");
  let currentText = document.querySelector("#current-language");
  currentFlag.setAttribute("src", urlFlag);
  currentText.textContent = "PT-BR";
}

function selectUS() {
  const urlFlag = document.querySelector(".us").getAttribute("src");
  let currentFlag = document.querySelector(".current-flag");
  let currentText = document.querySelector("#current-language");
  currentFlag.setAttribute("src", urlFlag);
  currentText.textContent = "US";
}*/

//change languege
function setLanguege(value){
  if(value == "pt-br"){
    languegePTBR();
  }if(value == "us"){
    languegeUS();
  }
}

function teste(){
  //document.querySelector("#check") = "&#10004";
  console.log( document.querySelector(".showSpan") );
}


function languegePTBR() {
  document.querySelector("#aboutLiText").textContent = "Sobre";
  document.querySelector("#skillsLiText").textContent = "Habilidades";
  document.querySelector("#projectLiText").textContent = "Projetos";
  document.querySelector("#contactLiText").textContent = "Contato";

  //section banner
  document.querySelector("#bannerP1Text").textContent = "Ola sou";
  document.querySelector("#bannerP2Text").textContent = "Programador FullStack";
  //section about
  document.querySelector("#aboutH2Text").textContent = "Sobre mim";
  document.querySelector("#aboutP1Text").textContent =
    "Oi eu sou o Lucas comecei a trabalhar na área de TI bem jovem com manutenção de computadores e por bastante tempo sou analista de suporte.";
  document.querySelector("#aboutP2Span1Text").textContent =
    "Hoje sou formado em Analise e desenvolvimento de sistemas e tenho interesse tanto em ";
  document.querySelector("#aboutP2Span2Text").textContent = "quanto ";
  document.querySelector("#aboutP2Span3Text").textContent =
    "no momento meu foco é em ";
  document.querySelector("#aboutP2Span4Text").textContent = "e ";
  document.querySelector("#aboutP3Text").textContent =
    "Quando não estou trabalhando gosto de passar meu tempo com amigos, assistindo um bom seriado ou alguma atividade ao ar livre.";
  //section skills
  document.querySelector("#skillsH2").textContent = "Habilidades";
  //section projects
  document.querySelector("#projectH2").textContent = "Projetos";
  //section contact
  document.querySelector("#contactH2").textContent = "Contato";
  document.querySelector("#contactlabelNameText").textContent = "Nome:";
  document.querySelector("#name").placeholder = "Nome Sobrenome";

  document.querySelector("#contactlabelMensagemText").textContent = "Mensagem:";
  document.querySelector("#message").placeholder = "Como posso te ajudar?";
  document.querySelector(".submitbtn").textContent = "Enviar";
}


function languegeUS() {
  //navigator.language
  //alert("The language is: " + navigator.language);
  //header

  document.querySelector("#aboutLiText").textContent = "About";
  document.querySelector("#skillsLiText").textContent = "Skills";
  document.querySelector("#projectLiText").textContent = "Projects";
  document.querySelector("#contactLiText").textContent = "Contact";

  //section banner
  document.querySelector("#bannerP1Text").textContent = "Hi I am";
  document.querySelector("#bannerP2Text").textContent = "FullStack programmer";
  //section about
  document.querySelector("#aboutH2Text").textContent = "About me";
  document.querySelector("#aboutP1Text").textContent =
    "Hi, I'm Lucas, I started working in the IT area at a very young age with computer maintenance and I've been a support analyst for a long time.";
  document.querySelector("#aboutP2Span1Text").textContent =
    "Today I have a degree in Systems Analysis and Development and I am interested in both ";
  document.querySelector("#aboutP2Span2Text").textContent = "and ";
  document.querySelector("#aboutP2Span3Text").textContent =
    "at the moment my focus is on ";
  document.querySelector("#aboutP2Span4Text").textContent = "and ";
  document.querySelector("#aboutP3Text").textContent =
    "When I'm not working I like to spend time with friends, watching a good show or some outdoor activity.";
  //section skills
  document.querySelector("#skillsH2").textContent = "Skills";
  //section projects
  document.querySelector("#projectH2").textContent = "Projects";
  //section contact
  document.querySelector("#contactH2").textContent = "Contact";
  document.querySelector("#contactlabelNameText").textContent = "Name:";
  document.querySelector("#name").placeholder = "Name Last name";

  document.querySelector("#contactlabelMensagemText").textContent = "Message:";
  document.querySelector("#message").placeholder = "How can I help you?";
  document.querySelector(".submitbtn").textContent = "Submit";
}