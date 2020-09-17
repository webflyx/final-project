import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App.jsx";

import "./index.scss";
import "./styles/base.scss";

ReactDOM.render(<App />, document.querySelector("#root"));

//burger
const headerMenu = document.querySelector(".header__menu");
const burgerSpan = document.querySelector(".header__burger > span");
const burgerBtn = document.querySelector(".header__burger");
const main = document.querySelector(".main");

let bool = false;

function burgerToggle() {
  if (bool) {
    close();
  } else {
    open();
  }
}

function open() {
  bool = true;
  headerMenu.classList.add("header__menu_active");
  burgerSpan.classList.add("header__burger_active");
  main.style.display = "none";
  main.style.transition = "1s";
}

function close() {
  bool = false;
  headerMenu.classList.remove("header__menu_active");
  burgerSpan.classList.remove("header__burger_active");
  main.style.display = "block";
  main.style.transition = "1s";
}

burgerBtn.addEventListener("click", burgerToggle);

///log-in
const logInBtn = document.querySelector(".header__menu__log-in");

function logInFun() {
  const logWindowClass = document.querySelector(".log-window");
  const wrapperClass = document.querySelector(".wrapper");
  wrapperClass.style.display = "none";
  wrapperClass.style.visibility = "hidden";
  wrapperClass.style.opacity = "0";
  logWindowClass.classList.add("log-window_active");
}

logInBtn.addEventListener("click", logInFun);

const closeBtnClass = document.querySelector(".log-window__close");
function closeBtnFun() {
  const logWindowClass = document.querySelector(".log-window");
  const wrapperClass = document.querySelector(".wrapper");
  wrapperClass.style.display = "block";
  wrapperClass.style.visibility = "visible";
  wrapperClass.style.opacity = "1";
  logWindowClass.classList.remove("log-window_active");
}

closeBtnClass.addEventListener("click", closeBtnFun);

//validate
function validInput() {
  const inputEmail = document.querySelector(".contact-form__email");
  let inputEmailval = inputEmail.checkValidity();
  if (inputEmailval === false) {
    inputEmail.style.borderBottom = "1px solid red";
  }
}
const formBtn = document.querySelector(".contact-form__btn");
formBtn.addEventListener("click", validInput);

//accardion
const silverId = document.getElementById("silver");
const silverBenif = document.getElementById("silverBenif");
const goldId = document.getElementById("gold");
const goldBenif = document.getElementById("goldBenif");
const platId = document.getElementById("plat");
const platBenif = document.getElementById("platBenif");

function toggle(item, item2) {
  if (item.classList.value !== "pricing__mob-arrow pricing__mob-arrow-close") {
    item.classList.add("pricing__mob-arrow-close");
    item2.classList.add("pricing__col__benefit_active");
  } else if (item.classList.value === "pricing__mob-arrow pricing__mob-arrow-close") {
    item.classList.remove("pricing__mob-arrow-close");
    item2.classList.remove("pricing__col__benefit_active");
  }
}

silverId.addEventListener("click", function () {
  toggle(silverId, silverBenif);
});
goldId.addEventListener("click", function () {
  toggle(goldId, goldBenif);
});
platId.addEventListener("click", function () {
  toggle(platId, platBenif);
});

///////////////////////////////////
