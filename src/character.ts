import Enemy from "./enemy";
import {Fighter} from "./interface/fighter";
import Weapon from "./weapon";


export default class Character implements Fighter {

    life: number;
    force: number;

    constructor(public name: string, public gender: string) {

        this.life = 50;
        this.force = 10;
    }

    summary(): void {
        console.log(" nom : " + this.name);
        console.log(" sexe : " + this.gender);
        console.log(" point de vie : " + this.life);
    }

    attack(other: Fighter, weapon: Weapon | null = null): void {
        let force: number = Math.round((this.force + (weapon?.damage ?? 0))* 0.8 + Math.random() * this.force * 0.4);

        other.takeDamage(force);
    }

    takeDamage(damage: number): void {
        this.life = this.life - damage * 0.5;
        //damage = Math.floor(Math.random() * (101));
    }
}