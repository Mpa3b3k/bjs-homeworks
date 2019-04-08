"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    let percent = Number(percent*100);
    let contribution = Number(contribution);
    let amount = Number(amount);
    let date = Number(date);
    let middleSumm = amount - contribution;
    let monthSumm = amount * ( (1 / 12) * percent +  (1 / 12) * percent / ( ( (1 +  (1 / 12) * percent) ^ date) - 1) );
    let totalAmount = monthSumm * date;


    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {

    if (name != " ") || (name != undefined) || (name != null) {
        console.log(`Привет, мир! Меня зовут ${name}`);
        let greeting = name;
    } 
    else {
        console.log(`Привет, мир! Меня зовут Аноним`);
        let greeting = "Аноним";
    }

    return greeting;
}