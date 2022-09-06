"use strict";

/* 
    ------selecting elements----------
*/
const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeople = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");

// the new people count =>
let newNumberOfPeople = 1;

/* 
    Main functionalty to calculate the tip amount
*/

const calculateBill = () => {
  if (billTotalInput.value < 1000000 && tipInput.value <= 100) {
    const billTotal = Number(billTotalInput.value);
    const tipPercent = Number(tipInput.value) / 100;
    const tipAmount = billTotal * tipPercent;
    const total = tipAmount + billTotal;
    const perPerson = total / newNumberOfPeople;
    perPersonTotal.textContent = `$ ${perPerson.toFixed(2)}`;
  }
};
/* 
    the increase btn functionalty
*/
const increasePeople = () => {
  // if the people count is lower than 40 it will increase the count
  if (newNumberOfPeople < 40) {
    newNumberOfPeople++;
    numberOfPeople.textContent = newNumberOfPeople;
    calculateBill();
  }
};

/* the decrease btn functionalty */

const decreasePeople = () => {
  // if the people count is heigher then 1 it will decrease it
  if (newNumberOfPeople > 1) {
    newNumberOfPeople--;
    numberOfPeople.textContent = newNumberOfPeople;
    calculateBill();
  }
};
