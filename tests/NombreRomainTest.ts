const assert = require('assert');
import { NombreRomain } from '../app/NombreRomain';

describe("Test Chiffres Romain", function () {
    it("ETANT donne le chiffre 1 QUAND on convertit le chiffre en nombre romain ALORS le nombre est I", function () {
        // Etant donne le chiffre 1
        let chiffreArabe : number = 1;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est I
        assert.equal(chiffreRomain, "I");
    });

    it("ETANT donne le chiffre 2 QUAND on convertit le chiffre en nombre romain ALORS le nombre est II", function () {
        // Etant donne le chiffre 2
        let chiffreArabe : number = 2;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est II
        assert.equal(chiffreRomain, "II");
    });

    it("ETANT donne le chiffre 3 QUAND on convertit le chiffre en nombre romain ALORS le nombre est III", function () {
        // Etant donne le chiffre 3
        let chiffreArabe : number = 3;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est III
        assert.equal(chiffreRomain, "III");
    });
});