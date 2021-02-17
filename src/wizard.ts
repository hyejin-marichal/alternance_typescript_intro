import Character from "./character";

export default class Wizard extends Character {
    constructor(name: string, gender: string) {
        super(name,gender);
        this.force += 5;
    }
}