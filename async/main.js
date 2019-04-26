"use strict";

let date = new Date();




function setAlarm(time, callback) {

	setInterval(checkTime, 1000);

	return function checkTime(nowtime) {
		
		let now, hours, minutes;

		if (date.getHours() <10) {
			hours = "0" + date.getHours();
		} else {
			hours = date.getHours();
		}

		if (date.getMinutes() <10) {
			minutes = "0" + date.getMinutes();
		} else {
			minutes = date.getMinutes();
		}

		now = hours + ":" + minutes;

		if (nowtime == now) {
			callback();
		}

	};
}

function setDailyRhythm(wakeUpTime, bedTime) {

	function wakeUp() {
		console.log("Vasya, wake up!");
	}

	function sleep() {
		console.log("Vasya, go to the bed!");
	}

	setAlarm(wakeUpTime, wakeUp);
	setAlarm(bedTime, sleep);

}

setDailyRhythm("07:00", "21:00");

console.log(now);
