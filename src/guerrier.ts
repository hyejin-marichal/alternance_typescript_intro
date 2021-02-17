import Character from "./character";

export default class Guerrier extends Character {
    constructor(name: string, gender: string) {
        super(name, gender);
        this.life += 30;
    }
}