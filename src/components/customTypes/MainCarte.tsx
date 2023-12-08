export interface MainCarte {
    cartes: string,
    enchere: number,
    categorie: number,
    groupes: Groupe[],
    rang: number
};

export interface Groupe {
    titre: string
    nombreElements: number
};

export const CATEGORIES = {
    cinq: 7,
    quatre: 6,
    full: 5,
    trois: 4,
    deux: 3,
    paire: 2,
    haute: 1
};