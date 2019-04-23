"use strict";

let now = new Date();

function setAlarm(time, callback) {

	let arrow = function checkTime(time) {
		
		if (time == now) {
			callback();
		}

	}

	return arrow;
}

function setDailyRhythm(wakeUpTime, bedTime) {

	function wakeUp() {
		console.log("Vasya, wake up!");
	}

	function sleep() {
		console.log("Vasya, go to the bed!");
	}

	setInterval(setAlarm(wakeUpTime, wakeUp), 1000);
	setInterval(setAlarm(bedTime, sleep), 1000);

}

setDailyRhythm("07:00", "21:00");
