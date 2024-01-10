class Minion{
	//구조체, 변수
	constructor(hp,power){
		this.isAlive = true
		this.hp = hp
		this.power = power
	}
	attack(unit){
		unit.hp = unit.hp - this.power
	}
	damaged(unit){
		this.hp = this.hp - unit.power
		if(this.hp <= 0) this.isAlive = false
	}
}