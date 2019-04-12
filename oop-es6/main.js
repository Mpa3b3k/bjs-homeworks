"use strict";
class Weapon {
	constructor(name, attack, durability, range) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.range = range;
	}
	takeDamage(damage) {
		if (durability -= damage < 1) { // тут пишет что durability не опр. не знаю в чём дело
			durability = 1;
		} 
		else {
			durability -= damage;
		}
	}
	getDamage() {
		if (durability > durability * 30 / 100) {
			return attack;
		} else if (durability = 0) {
			return 0;
		} else {
			return attack / 2;
		}
	}
	isBroken() {
		if (durability > 0) {
			return false;
		}
	}
} // по непонятной причине не срабатывает  в связи с чем не могу сделать второе задание

class StudentLog {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return name;
	}
	addGrade(grade, subject) {
		constructor(subject, ...grade) {
			if (grade >= 1 && grade <= 5) {
				this.subject = [grade];
				return subject.grade;
			} else {
				console.log ("Alert");
				return subject.grade;
			}
		}
	}
	getAverageBySubject(subject) {
		return subject.grade / subject.grade.length;
	}
	getTotalAverage() {
		// не знаю как реализовать
	}
}