"use strict";

let now = new Date();

function setAlarm(time, callback) {
	
	let timeTo = new Date();

	if (time == timeTo) {
		callback;
	}

	return callback;
}

function setDailyRhythm(wakeUpTime, bedTime) {
	
}

setInterval(setAlarm, 1000, now, setDailyRhythm);