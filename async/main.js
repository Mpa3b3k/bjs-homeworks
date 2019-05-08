"use strict";


function setAlarm(time, callback) {
	
	return function (nowtime) {
		
		let now, hours, minutes;

		if (new Date().getHours() <10) {
			hours = "0" + new Date().getHours();
		} else {
			hours = new Date().getHours();
		}

		if (new Date().getMinutes() <10) {
			minutes = "0" + new Date().getMinutes();
		} else {
			minutes = new Date().getMinutes();
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

	let arrow1 = setAlarm(wakeUpTime, wakeUp);
	let arrow2 = setAlarm(bedTime, sleep);

	setInterval(arrow1, 1000, new Date());
	setInterval(arrow2, 1000, new Date());

}

setDailyRhythm("07:00", "21:00");