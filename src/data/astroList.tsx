import chat from '../assets/chat.jpg';
import astroCafe from '../assets/astro-cafe.jpg';
import astroClavier from '../assets/astro-clavier.jpg';
import astroManette from '../assets/astro-manette.jpg';
import chatJeu from '../assets/chat-jeu.jpg';
import chienJeu from '../assets/chien-jeu.jpg';


const baseList = [
    {
        nom: "Chat",
        categories: "Animals",
        pluslikes: false,
        visuel: chat,
        description : "c'est un chat"
    },
    {
        nom: "Astro Cafe",
        categories: "Places",
        pluslikes: true,
        visuel: astroCafe,
        description : "c'est un astronaute qui boit du café"
    },
    {
        nom: "Astro Clavier",
        categories: "Tech",
        pluslikes: false,
        visuel: astroClavier,
        description : "c'est un astronaute tape sur un clavier"
    },
    {
        nom: "Astro Manette",
        categories: "Tech",
        pluslikes: true,
        visuel: astroManette,
        description : "c'est un astronaute utilise une manette"
    },
    {
        nom: "Chat Jeu",
        categories: "Games",
        pluslikes: true,
        visuel: chatJeu,
        description : "c'est un chat qui joue"
    },
    {
        nom: "Chien Jeu",
        categories: "Games",
        pluslikes: false,
        visuel: chienJeu,
        description : "c'est un chat qui joue"
    }
];

const generateDynamicList = (numItems: number) => {
    const newList = [];

    for (let i = 1; i <= numItems; i++) {
        const randomIndex = Math.floor(Math.random() * baseList.length);
        const baseItem = baseList[randomIndex];


        const newItem = {
            ...baseItem,
            id: `${i}-${baseItem.nom}-${Math.random().toString(36).substr(2, 5)}`, 
            nom: `${baseItem.nom} ${i}`, 
            pluslikes: Math.random() < 0.5 ,
            description:`${baseItem.description}`
        };

        newList.push(newItem);
    }

    return newList;
};

const astroList = generateDynamicList(50);

export default astroList;
