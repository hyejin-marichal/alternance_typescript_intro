import Weapon from "../weapon";

export interface Fighter {
    attack(other: Fighter, weapon: Weapon | null): void

    takeDamage(damage: number): void

}