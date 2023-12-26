import { Rang } from "../../customTypes/Etiquettes";
import { CATEGORIES, Groupe, MainCarte } from "../../customTypes/MainCarte";

export function determinerCategorieMainCarte(uneMain: MainCarte): void  {
    
        const groupes: Groupe[] = determinerGroupe(uneMain.cartes);
        TrierGroupeParNombreElements(groupes);
        // console.log('groupes', groupes);
        
    
        if (groupes.length === 1) {
            uneMain.categorie = CATEGORIES.cinq;
            return;
        }
    
        if (groupes.length === 2) {
            if (groupes[0].nombreElements === 4) {
                uneMain.categorie = CATEGORIES.quatre;
            }
            if (groupes[0].nombreElements === 3) {
                uneMain.categorie = CATEGORIES.full;
            }
            return;
        }
    
        if (groupes.length === 3) {
            if (groupes[0].nombreElements === 3) {
                uneMain.categorie = CATEGORIES.trois;
            }
            if (groupes[0].nombreElements === 2) {
                uneMain.categorie = CATEGORIES.deux;
            }
            return;
        }
    
        if (groupes.length === 4) {
            uneMain.categorie = CATEGORIES.paire;
            return;
        }
        
        uneMain.categorie = CATEGORIES.haute;
        return;

}

export function trierParCategorie(mainCartes: MainCarte[]): void  {
    mainCartes.sort((a, b) => a.categorie - b.categorie);
}

export function determinerRang(mainCartes: MainCarte[]): void  {
    // Regrouper les cartes par catégorie
    const categories: { [key: string]: MainCarte[] } = {};
    for (let carte of mainCartes) {
        if (!categories[carte.categorie]) {
            categories[carte.categorie] = [];
        }
        categories[carte.categorie].push(carte);
    }

    // Trier chaque tableau de cartes par rang
    for (let categorie in categories) {
        categories[categorie].sort((a, b) => {
            for (let i = 0; i < a.cartes.length; i++) {
                const carteA = a.cartes[i].toUpperCase() as keyof typeof Rang;
                const carteB = b.cartes[i].toUpperCase() as keyof typeof Rang;
                if (Rang[carteA] < Rang[carteB]) {
                    return -1;
                } else if (Rang[carteA] > Rang[carteB]) {
                    return 1;
                }
            }
            return 0;
        });
    }

    // Rassembler les cartes dans le bon ordre
    let i = 0;
    for (let categorie in categories) {
        for (let carte of categories[categorie]) {
            mainCartes[i] = carte;
            mainCartes[i].rang = i + 1;
            i++;
        }
    }
}

function TrierGroupeParNombreElements(groupe: Groupe[]): void  {
    groupe.sort((a, b) => b.nombreElements - a.nombreElements);
}

function determinerGroupe(cartes: string): Groupe[] {
    const tableau = cartes.split('').toSorted();
    // console.log('tableau', tableau);
    
    if (tableau.length === 0) {
        return [
            {
                titre: '',
                nombreElements: 0
            }
        ]
    }

    const resultats = [];
    let nombreDansGroupe = 1;

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] === tableau[i - 1]) {
            nombreDansGroupe++;
        } else {
            resultats.push({ titre: tableau[i - 1], nombreElements: nombreDansGroupe });
            nombreDansGroupe = 1;
        }
    }

    resultats.push({ titre: tableau[tableau.length - 1], nombreElements: nombreDansGroupe });

    return resultats;

}