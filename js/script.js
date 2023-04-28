// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: April 2023
// This file contains the JS functions for index.html


const randomNumberPos = Math.floor(Math.random() * 6) + 1
const randomNumberNeg = Math.floor(Math.random() * -6) + 1

/**
 * This function displays positive and negative number
 */
function myButtonClicked() {
  buttonOnChecked = document.getElementById("positive-checked").checked

  if (buttonOnChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "Your random number is: " + randomNumberPos + "."
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "Your random number is: " + randomNumberNeg + "."
  }
}
