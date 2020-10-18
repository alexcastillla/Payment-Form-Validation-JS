/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

// JS empieza desde aquí

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
  function numberValidationImput(number) {
    if (isNaN(number)) {
      return true;
    } else {
      return false;
    }
  } //con la funcion validamos si el imput es un numero y no una letra

  const letterPattern = /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/; //Pattern para nombres y Apellidos y Ciudades (general)
  function letterValidationImput(letter) {
    if (!isNaN(letter) || letterPattern.test(letter)) {
      return true;
    } else {
      return false;
    }
  } //con la funcion validamos si el imput no es un numero y si es igual al pattern establecido

  const payForm = document.querySelector("form");

  payForm.addEventListener("submit", ValidationCheck);

  function ValidationCheck() {
    let imputsCheckArray = 0; // Generamos una lista a contador 0 para ir sumandole los imput disntitos al value predefinido.
    if (
      cardImput.value == "" ||
      numberValidationImput(cardImput.value) == true ||
      cardImput.value.length != 16
    ) {
      imputsCheckArray++; // al ser distinto sumamos +1 a la lista imputsCheckArray
      cardImput.classList.add("is-invalid"); // al ser distinto el valor añadimos un atributo de no validación
      event.preventDefault();
    } else {
      cardImput.classList.add("is-valid"); // al ser igual el valor añadimos un atributo de validación
    }

    if (
      inputCVC.value == "" ||
      numberValidationImput(inputCVC.value) == true ||
      imputCVC.value.length != 3
    ) {
      imputsCheckArray++;
      inputCVC.classList.add("is-invalid");
      event.preventDefault();
    } else {
      inputCVC.classList.add("is-valid");
    }
    if (
      amountImput.value == "" ||
      numberValidationImput(amountImput.value) == true
    ) {
      imputsCheckArray++;
      amountImput.classList.add("is-invalid");
      event.preventDefault();
    } else {
      amountImput.classList.add("is-valid");
    }
    if (
      nameImput.value == "" ||
      letterValidationImput(nameImput.value) == true
    ) {
      imputsCheckArray++;
      nameImput.classList.add("is-invalid");
      event.preventDefault();
    } else {
      nameImput.classList.add("is-valid");
    }
    if (
      lastnameImput.value == "" ||
      letterValidationImput(lastnameImput.value) == true
    ) {
      imputsCheckArray++;
      lastnameImput.classList.add("is-invalid");
      event.preventDefault();
    } else {
      lastnameImput.classList.add("is-valid");
    }
    if (
      cityImput.value == "" ||
      letterValidationImput(cityImput.value) == true
    ) {
      imputsCheckArray++;
      cityImput.classList.add("is-invalid");
      event.preventDefault();
    } else {
      cityImput.classList.add("is-valid");
    }
    if (
      stateImput.value == "Choose..." ||
      letterValidationImput(stateImput.value) == true
    ) {
      imputsCheckArray++;
      stateImput.classList.add("is-invalid");
      event.preventDefault();
    } else {
      stateImput.classList.add("is-valid");
    }
    if (
      postalImput.value == "" ||
      numberValidationImput(postalImput.value) == true
    ) {
      imputsCheckArray++;
      postalImput.classList.add("is-invalid");
      event.preventDefault();
    } else {
      postalImput.classList.add("is-valid");
    }
    if (messageImput.value == "") {
      imputsCheckArray++;
      messageImput.classList.add("is-invalid");
      event.preventDefault();
    } else {
      messageImput.classList.add("is-valid");
    }

    // Por último hacemos recuento de la lista imputsCheckArray y comprobamos si:
    // 1- La suma es igual a cero, hemos rellenado todos los campos y damos por validado el form con un alert
    // 2- Si es disntinto a cero, generamos una alert que avisa que hay campos vacios y que estaran marcados por
    //         los atributos is-invalid añadidos en los imput
    if (imputsCheckArray == 0) {
      success.style.display = "inline"; //mostramos el alert de sucess con el atributo inline
    } else {
      error.style.display = "inline"; //mostramos el alert de error con el atributo inline
      success.style.display = "none"; // en caso de haber mostrado el alert de error, lo quitamos al estar topo ok!
    }
  }
};
