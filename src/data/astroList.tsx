import chat from '../assets/chat.jpg';
import astroCafe from '../assets/astro-cafe.jpg';
import astroClavier from '../assets/astro-clavier.jpg';
import astroManette from '../assets/astro-manette.jpg';
import chatJeu from '../assets/chat-jeu.jpg';
import chienJeu from '../assets/chien-jeu.jpg';

const astroList = [
    {
        nom: "Chat",
        categories: "Animals",
        id: '1a',
        pluslikes: false,
        visuel: chat
    },
    {
        nom: "Astro Cafe",
        categories: "Places",
        id: '2b',
        pluslikes: true,
        visuel: astroCafe
    },
    {
        nom: "Astro Clavier",
        categories: "Tech",
        id: '3c',
        pluslikes: false,
        visuel: astroClavier
    },
    {
        nom: "Astro Manette",
        categories: "Tech",
        id: '4d',
        pluslikes: true,
        visuel: astroManette
    },
    {
        nom: "Chat Jeu",
        categories: "Games",
        id: '5e',
        pluslikes: true,
        visuel: chatJeu
    },
    {
        nom: "Chien Jeu",
        categories: "Games",
        id: '6f',
        pluslikes: false,
        visuel: chienJeu
    }
];

export default astroList;
