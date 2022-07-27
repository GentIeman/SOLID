// Open-closed principle - Принцип открытости/закрытости
// Программные сущности (классы, функции, методы) должны быть открыты для расширение и закрыты для изменения

// Базовый класс
class Weapon {
    damage = 0
    range = 0
    constructor(damage, range) {
        this.damage = damage
        this.range = range
    }
}

// Нож
class Knife extends Weapon {

    constructor(damage, range) {
        super(damage, range);
    }

    attack() {
        console.log(`Урон ножа = ${this.damage}`)
    }
}

// Меч
class Sword extends Weapon {

    constructor(damage, range) {
        super(damage, range);
    }

    attack() {
        console.log(`Урон меча = ${this.damage}`)
    }
}

// Персонажа
class Character {
    weapon = null
    name = null
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon
    }

    changeWeapon(newWeapon) {
        this.weapon = newWeapon
    }

    attack() {
        this.weapon.attack()
    }
}

let knife = new Knife(30, 10)
let sword = new Sword(50, 20)

let hero = new Character('Hero', knife)
hero.attack()

hero.changeWeapon(sword)
hero.attack()