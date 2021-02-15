export default class Character {
    name: string;
    sex: string
    life: number

    constructor(name: string, sex: string, life: number) {
        this.name = name;
        this.sex = sex;
        this.life = life;
    }
    summary():void {
        console.log(" nom : " + this.name);
        console.log(" sexe : " + this.sex);
        console.log(" point de vie : " + this.life);
    }
}