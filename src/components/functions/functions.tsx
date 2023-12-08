import { Rang } from "../customTypes/Etiquettes";
import { CATEGORIES, Groupe, MainCarte } from "../customTypes/MainCarte";

export function determinerCategorieMainCarte(uneMain: MainCarte): void  {
    
        const groupes: Groupe[] = determinerGroupe(uneMain.cartes);
        TrierGroupeParNombreElements(groupes);
        // console.log('groupes', groupes);
        
    
        if (groupes.length === 1) {
            uneMain.categorie = CATEGORIES.cinq;
            return;
        }
    
        if (groupes.length === 2) {
            groupes.forEach(groupe => {
                if (groupe.nombreElements === 4) {
                    uneMain.categorie = CATEGORIES.quatre;
                    return;
                }
                if (groupe.nombreElements === 3) {
                    uneMain.categorie = CATEGORIES.full;
                    return;
                }
            });
            return;
        }
    
        if (groupes.length === 3) {
            groupes.forEach(groupe => {
                if (groupe.nombreElements === 3) {
                    uneMain.categorie = CATEGORIES.trois;
                    return;
                }
                if (groupe.nombreElements === 2) {
                    uneMain.categorie = CATEGORIES.deux;
                    return;
                }
            })
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
    let i: number, j: number;
    for(i = 0; i < mainCartes.length; i++) {
        for(j = mainCartes.length - 1; j > i; j--) {
            if(determinerSiDeuxCarteOntMemeCategorie(mainCartes, j, j-1)) {
                derterminerRangDeuxCartes(mainCartes, j, j-1);
            }
            if(determinerSiDeuxCarteOntMemeCategorie(mainCartes, j, j-1)) {
                derterminerRangDeuxCartes(mainCartes, j, j-1);
            }
            if(determinerSiDeuxCarteOntMemeCategorie(mainCartes, j, j-1)) {
                derterminerRangDeuxCartes(mainCartes, j, j-1);
            }
            if(determinerSiDeuxCarteOntMemeCategorie(mainCartes, j, j-1)) {
                derterminerRangDeuxCartes(mainCartes, j, j-1);
            }
            if(determinerSiDeuxCarteOntMemeCategorie(mainCartes, j, j-1)) {
                derterminerRangDeuxCartes(mainCartes, j, j-1);
            }
            if(determinerSiDeuxCarteOntMemeCategorie(mainCartes, j, j-1)) {
                derterminerRangDeuxCartes(mainCartes, j, j-1);
            }
            if(determinerSiDeuxCarteOntMemeCategorie(mainCartes, j, j-1)) {
                derterminerRangDeuxCartes(mainCartes, j, j-1);
            }

        }
    
    }
}

function determinerSiDeuxCarteOntMemeCategorie(mainCartes: MainCarte[], i: number, j: number): boolean {
    return mainCartes[i].categorie === mainCartes[j].categorie;
}

function derterminerRangDeuxCartes(mainCartes: MainCarte[], i: number, j: number): void {
    if (mainCartes[i].cartes.length === 0 || mainCartes[j].cartes.length === 0) {
        return;
    }

    for (let k: number = 0; k < mainCartes[i].cartes.length; k++) {
        const carte1 = mainCartes[i].cartes[k].toUpperCase() as keyof typeof Rang;
        const carte2 = mainCartes[j].cartes[k].toUpperCase() as keyof typeof Rang;
    
        if (Rang[carte1] < Rang[carte2]) {
            permute(mainCartes, i, j);
            return;
        }
    }
}

function permute(mainCartes: MainCarte[], i: number, j: number): void  {
    const temp = mainCartes[i];
    mainCartes[i] = mainCartes[j];
    mainCartes[j] = temp;
    mainCartes[i].rang = i + 1;
    mainCartes[j].rang = j + 1;
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