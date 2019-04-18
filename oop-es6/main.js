"use strict";
class Weapon {
	constructor(name, attack, durability, range) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.range = range;
	}
	takeDamage(damage) {
		if (this.durability -= damage < 1) { // тут пишет что durability не опр. не знаю в чём дело
			this.durability = 1;
		} 
		else {
			this.durability -= damage;
		}
	}
	getDamage() {
		if (this.durability > this.durability * 30 / 100) {
			return this.attack;
		} else if (this.durability = 0) {
			return 0;
		} else {
			return attack / 2;
		}
	}
	isBroken() {
		if (this.durability > 0) {
			return false;
		} else {
			console.log("Weapon in not broken");
			return true;
		}
	}
} // по непонятной причине не срабатывает  в связи с чем не могу сделать второе задание

class StudentLog {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
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