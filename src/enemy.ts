import Character from "./character";
import {Fighter} from "./interface/fighter";
import Weapon from "./weapon";


export default class Enemy implements Fighter {
    life: number;

    constructor() {
        this.life = Math.floor(Math.random() * 101);
    }

    attack(other: Fighter, weapon: Weapon | null = null): void {
        let force: number = Math.floor(Math.random() * (101) * 0.5);

        other.takeDamage(force);
    }

    takeDamage(damage: number): void {
        this.life -= damage;
    }
}