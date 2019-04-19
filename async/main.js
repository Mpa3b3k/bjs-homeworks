"use strict";

let now = new Date();

function setAlarm(time, callback) {
	
	let timeTo = new Date();

	setInterval(checkTime(time), 1000);

	function checkTime(time) {
		
		if (time == timeTo) {
			return true;
		} else {
			return false;
		}

	}

	return callback();
}

function setDailyRhythm(wakeUpTime, bedTime) {
	
	

}

setInterval(setAlarm, 1000, now, setDailyRhythm);