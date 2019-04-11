"use strict";

function getSolutions(a,b,c){


    let discr = b ** 2 - 4 * a * c, x1, x2;
    let radical;

    if (discr < 0) {
        radical = { D: discr };
    } else if (discr == 0) {
        x1 = (-b) / (2*a);
        radical = { roots: [x1], D: discr };
        console.log("Only one radical, x = " + x);
    } else {
        x1 = (-b + Math.sqrt(discr) ) / 2 * a;
        x2 = (-b - Math.sqrt(discr) ) / 2 * a;
        radical = { roots: [x1, x2], D: discr };
    }
    return radical;
}

function showSolutionsMessage( a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.radical.D}`);

    if (result.radical.D < 0 ) {
    	console.log("Уравнение не имеет вещественных корней");
    }
    else if (result.radical.D == 0) {
    	console.log(`Уравнение имеет один корень X₁ = ${result.radical.roots[0]}`);
    }
    else {
    	console.log(`Уравнение имеет два корня. X₁ = ${result.radical.roots[0]}, X₂ = ${result.radical.roots[1]}`);
    }
}

showSolutionsMessage(1, 2, 3);



function getPersonData( secretData ) {
    return { firstName: naming(secretData.aaa), lastName: naming(secretData.bbb) }
}

function naming(a) {
    if (a == 0) {
        console.log("Rodrigo");
        return "Rodrigo"
    } else if (a == 1) {
        console.log("Emilio");
        return "Emilio"
    } else {
        console.log("Are you kidding me?!");
        return "Are you kidding me?!"
    }
}



function getAverageScore( data ) {
    

    return {}
}

function findAverage(...mass) {
    let answer, summ = 0;

    for (let i = 0; i < mass.length; i++) {
        summ += mass[i];
    }

    answer = summ / mass.length;
    return answer;
}