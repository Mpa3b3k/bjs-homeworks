

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    "use strict";

    let discr = b ** 2 - 4 * a * c, x;

    if (discr < 0) {
        console.log("No radicals");
    } else if (discr == 0) {
        x = (-b) / (2*a);
        console.log("Only one radical, x = " + x);
    } else {
        x = (-b + (discr ** (1/2) ) ) / 2 * a;
        console.log("The first radical x1 = " + x);
        x = (-b - (discr ** (1/2) ) ) / 2 * a;
        console.log("The second radical x2 = " + x);
    }
    return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    "use strict";

    function getFullYear(dateOfBirthday) {
        let result = dateOfBirthday - new Date();
        return result;
    }

    let age = getFullYear(dateOfBirthday);

    if (age >= 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный молочный коктейль!`;
    }

    console.log(result);
    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    
    let amountOfMarks =0;
    let i = 0;
    let middleMark;

    for (i = 0; i < marks.length; i++) {
        amountOfMarks += 1;
    }

    if (amountOfMarks > 5) {
        console.log("Amount of marks more than 5");
        for (i = 0; i < marks.length; i++) {
        console.log(marks[i]);
        }
    } 

    let summOfMarks = 0;

    for (i = 0; i < marks.length; i++) {
        summOfMarks += marks[i];
    }
    middleMark = summOfMarks / marks.length;
    console.log(`Average mark ${middleMark}, program complete`);

    return averageMark;
}