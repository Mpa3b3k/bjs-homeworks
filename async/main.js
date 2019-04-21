"use strict";

let now = new Date();

function setAlarm(time, callback) {

	function checkTime(time) {
		
		if (time == now) {
			callback();
		} else {
			console.log("Not a time");
		}

	}

	return checkTime(now);
}

function setDailyRhythm(wakeUpTime, bedTime) {
	
	

}

setInterval(setAlarm, 1000, now, setDailyRhythm);