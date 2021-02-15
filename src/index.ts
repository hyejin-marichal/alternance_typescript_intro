import Character from "./character";
import prompts, {PromptObject} from "prompts";

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
    },
    {
        type: 'number',
        name: 'life',
        message: 'Saisie le point de vie de votre chpersonnage',
    }
];
(async () => {
    const response = await prompts(questions);

    // => response => { characterName, sex, life };
    let person = new Character(response.characterName, response.sex, response.life)
    person.summary();

})();

