"use strict";

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = new Date();
	let last = new Date(birthday);
	let checkedResult = +now - (+last);


	if (checkedResult >= 568080000000) {
		console.log("Age >= 18");
		return true;
	}
	else {
		console.log("Fee, teenager");
		return false;
	}
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = animal.sound;
    if (sound != undefined) {
    	return sound;
    }
    else {
    	return null;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {

	let summ = 0;
	let i = 0;

    for (i = 0; i < marks.length; i++) {
    	summ += +marks[i];
    }

    let average = summ / marks.length;
	
	let roundedAverage = Math.round(average);

	return roundedAverage;
}