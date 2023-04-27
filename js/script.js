// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * This function generates a random number between 1 and 6
 */
const randomPositiveNumber = Math.floor(Math.random() * 6) + 1 // returns a random integer from 1 to 6 into variable "randomNumber"

/**
 *  * This function generates a random number between 1 and 6
 */
const randomNegativeNumber = Math.floor(Math.random() * 6) + 1 // returns a random integer from 1 to 6 into variable "randomNumber"

/**
 * This function displays the radio value.
 */
function myButtonClicked() {
  alwaysOnButtonChecked = document.getElementById('on-check').checked

  if (alwaysOnButtonChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
    + randomPositiveNumber +
  } else {

    document.getElementById("radio-button-value").innerHTML =
    + randomNegativeNumber +
  }
}
