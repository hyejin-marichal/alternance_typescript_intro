import Character from "./character";
import prompts, {PromptObject, PromptType} from "prompts";
import Enemy from "./enemy";
import Weapon from "./weapon";

const questions: PromptObject[] = [
    {
        type: 'text',
        name: 'characterName',
        message: 'Saisies un nom de votre personnage ?'
    },
    {
        type: 'text',
        name: 'sex',
        message: 'Hero ou Heroine?'
    }
];

const fight: PromptObject =
    {
        type: 'select',
        name: 'fight',
        message: 'Vous voulez combattre?',
        choices: [
            {title: 'I do!', value: 'fight'},
            {title: 'No, I\'m leaving.', value: 'retreat'},
        ]
    };

const weapons = [
    new Weapon("The Dwarf Destroyer", 3),
    new Weapon("The Holy Staff of know it all", 2),
    new Weapon("Light Saber", 10),
    new Weapon("Emerald Bow", 3)
];

(async () => {
        const character = await prompts(questions);
        let user = new Character(character.characterName, character.sex)
        user.summary();
        let enemy = new Enemy();
        console.log("Ennemi en approche !");
        while (user.life > 0 && enemy.life > 0) {
            const combat = await prompts(fight);
            if (combat.fight == 'fight') {

                user.attack(enemy);
                if (enemy.life > 0) {
                    console.log(`Ah, le degat n'est pas souffisant, il est tousjours en vie, son point vie est  ${enemy.life} `);
                    console.log("L'ennemi riposte !");
                    enemy.attack(user);
                    if (user.life > 0) {
                        console.log(`vous avez survecu à l'attaque. votre point vie est ${user.life}`);
                    }
                    else{
                        console.log(`vous avez perdu!`);
                        break;
                    }
                } else {
                    console.log(`Vous avez gagné! L'enemy est mort... `);
                    break;
                }
            } else {
                console.log("vous avez quitte la partie");
                break;
            }
        }
    }
)
();

