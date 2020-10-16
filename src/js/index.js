/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

// JS empieza desdde aquí

const cardImput = document.querySelector("#cardNumber");
const inputCVC = document.querySelector("#CVC");
const amountImput = document.querySelector("#imputAmount");
const nameImput = document.querySelector("#first-name");
const lastnameImput = document.querySelector("#last-name");
const cityImput = document.querySelector("#city-name");
const stateImput = document.querySelector("#state");
const postalImput = document.querySelector("#postal-code");
const messageImput = document.querySelector("#message");

window.onload = () => {
  let formValidation = document.querySelector("form");

  function validacionNumerica(i) {
    if (isNaN(i)) {
      return true;
    } else {
      return false;
    }
  }

  function validacionNumerica(i) {
    if (isNaN(i)) {
      return true;
    } else {
      return false;
    }
  }

  formValidation.addEventListener("submit", notsubmit => {
    notsubmit.preventDefault();

    let checkErrorList = 0; // Generamos una lista a contador 0 para ir sumandole los imput disntitos al value predefinido.

    if (cardImput.value == "" || validacion(cardImput.value) == true) {
      checkErrorList++; // al ser distinto sumamos +1 a la lista checkErrorList
      cardImput.classList.add("is-invalid"); // al ser distinto el valor añadimos un atributo de no validación
    } else {
      cardImput.classList.add("is-valid"); // al ser igual el valor añadimos un atributo de validación
    }

    if (inputCVC.value == "") {
      checkErrorList++;
      inputCVC.classList.add("is-invalid");
    } else {
      inputCVC.classList.add("is-valid");
    }
    if (amountImput.value == "") {
      checkErrorList++;
      amountImput.classList.add("is-invalid");
    } else {
      amountImput.classList.add("is-valid");
    }
    if (nameImput.value == "") {
      checkErrorList++;
      nameImput.classList.add("is-invalid");
    } else {
      nameImput.classList.add("is-valid");
    }
    if (lastnameImput.value == "") {
      checkErrorList++;
      lastnameImput.classList.add("is-invalid");
    } else {
      lastnameImput.classList.add("is-valid");
    }
    if (cityImput.value == "") {
      checkErrorList++;
      cityImput.classList.add("is-invalid");
    } else {
      cityImput.classList.add("is-valid");
    }
    if (stateImput.value == "Choose...") {
      checkErrorList++;
      stateImput.classList.add("is-invalid");
    } else {
      stateImput.classList.add("is-valid");
    }
    if (postalImput.value == "") {
      checkErrorList++;
      postalImput.classList.add("is-invalid");
    } else {
      postalImput.classList.add("is-valid");
    }
    if (messageImput.value == "") {
      checkErrorList++;
      messageImput.classList.add("is-invalid");
    } else {
      messageImput.classList.add("is-valid");
    }

    // Por último hacemos recuento de la lista checkErrorList y comprobamos si:
    // 1- La suma es igual a cero, hemos rellenado todos los campos y damos por validado el form con un alert
    // 2- Si es disntinto a cero, generamos una alert que avisa que hay campos vacios y que estaran marcados por
    //         los atributos is-invalid añadidos en los imput
    if (checkErrorList == 0) {
      success.style.display = "inline"; //mostramos el alert de sucess con el atributo inline
    } else {
      error.style.display = "inline"; ////mostramos el alert de error con el atributo inline
    }
  });
};
