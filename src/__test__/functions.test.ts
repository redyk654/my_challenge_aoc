import { determinerRang } from "@/components/camelCardGame/functions/functions";
import { jeuDeDonnees } from "@/components/Entrees";

describe('determinerRang', () => {
    it('should correctly determine the rank of cards in a single category', () => {
        const mainCartes = [
            { categorie: 'hearts', cartes: ['2', '3'], rang: 0, groupes: [], enchere: 0 },
            { categorie: 'hearts', cartes: ['K', 'Q'], rang: 0, groupes: [], enchere: 0  },
            { categorie: 'hearts', cartes: ['5', '6'], rang: 0, groupes: [], enchere: 0  },
        ];
        determinerRang(mainCartes);
        expect(mainCartes[0].rang).toBe(1);
        expect(mainCartes[1].rang).toBe(3);
        expect(mainCartes[2].rang).toBe(2);
    });

    it('should correctly determine the rank of cards in multiple categories', () => {
        const mainCartes = [
            { categorie: 'hearts', cartes: ['2', '3'], rang: 0, groupes: [], enchere: 0  },
            { categorie: 'spades', cartes: ['K', 'Q'], rang: 0, groupes: [], enchere: 0  },
            { categorie: 'hearts', cartes: ['5', '6'], rang: 0, groupes: [], enchere: 0  },
            { categorie: 'spades', cartes: ['2', '3'], rang: 0, groupes: [], enchere: 0  },
        ];
        determinerRang(mainCartes);
        expect(mainCartes[0].rang).toBe(1);
        expect(mainCartes[1].rang).toBe(2);
        expect(mainCartes[2].rang).toBe(3);
        expect(mainCartes[3].rang).toBe(4);
    });
});