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

    it("ETANT donne le chiffre 4 QUAND on convertit le chiffre en nombre romain ALORS le nombre est IV", function () {
        // Etant donne le chiffre 4
        let chiffreArabe : number = 4;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est IV
        assert.equal(chiffreRomain, "IV");
    });

    it("ETANT donne le chiffre 5 QUAND on convertit le chiffre en nombre romain ALORS le nombre est V", function () {
        // Etant donne le chiffre 5
        let chiffreArabe : number = 5;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est V
        assert.equal(chiffreRomain, "V");
    });

    it("ETANT donne le chiffre 6 QUAND on convertit le chiffre en nombre romain ALORS le nombre est VI", function () {
        // Etant donne le chiffre 6
        let chiffreArabe : number = 6;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est VI
        assert.equal(chiffreRomain, "VI");
    });

    it("ETANT donne le chiffre 7 QUAND on convertit le chiffre en nombre romain ALORS le nombre est VII", function () {
        // Etant donne le chiffre 7
        let chiffreArabe : number = 7;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est VII
        assert.equal(chiffreRomain, "VII");
    });

    it("ETANT donne le chiffre 8 QUAND on convertit le chiffre en nombre romain ALORS le nombre est VIII", function () {
        // Etant donne le chiffre 8
        let chiffreArabe : number = 8;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est VIII
        assert.equal(chiffreRomain, "VIII");
    });

    it("ETANT donne le chiffre 9 QUAND on convertit le chiffre en nombre romain ALORS le nombre est IX", function () {
        // Etant donne le chiffre 9
        let chiffreArabe : number = 9;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est IX
        assert.equal(chiffreRomain, "IX");
    });

    it("ETANT donne le chiffre 10 QUAND on convertit le chiffre en nombre romain ALORS le nombre est X", function () {
        // Etant donne le chiffre 10
        let chiffreArabe : number = 10;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est X
        assert.equal(chiffreRomain, "X");
    });

    it("ETANT donne le chiffre 11 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XI", function () {
        // Etant donne le chiffre 11
        let chiffreArabe : number = 11;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XI
        assert.equal(chiffreRomain, "XI");
    });

    it("ETANT donne le chiffre 12 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XII", function () {
        // Etant donne le chiffre 12
        let chiffreArabe : number = 12;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XII
        assert.equal(chiffreRomain, "XII");
    });

    it("ETANT donne le chiffre 13 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XIII", function () {
        // Etant donne le chiffre 13
        let chiffreArabe : number = 13;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XIII
        assert.equal(chiffreRomain, "XIII");
    });

    it("ETANT donne le chiffre 14 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XIV", function () {
        // Etant donne le chiffre 14
        let chiffreArabe : number = 14;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XIV
        assert.equal(chiffreRomain, "XIV");
    });

    it("ETANT donne le chiffre 15 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XV", function () {
        // Etant donne le chiffre 15
        let chiffreArabe : number = 15;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XV
        assert.equal(chiffreRomain, "XV");
    });

    it("ETANT donne le chiffre 16 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XVI", function () {
        // Etant donne le chiffre 16
        let chiffreArabe : number = 16;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XVI
        assert.equal(chiffreRomain, "XVI");
    });

    it("ETANT donne le chiffre 17 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XVII", function () {
        // Etant donne le chiffre 17
        let chiffreArabe : number = 17;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XVII
        assert.equal(chiffreRomain, "XVII");
    });

    it("ETANT donne le chiffre 18 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XVIII", function () {
        // Etant donne le chiffre 18
        let chiffreArabe : number = 18;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XVIII
        assert.equal(chiffreRomain, "XVIII");
    });

    it("ETANT donne le chiffre 19 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XIX", function () {
        // Etant donne le chiffre 19
        let chiffreArabe : number = 19;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XIX
        assert.equal(chiffreRomain, "XIX");
    });

    it("ETANT donne le chiffre 20 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XX", function () {
        // Etant donne le chiffre 20
        let chiffreArabe : number = 20;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XX
        assert.equal(chiffreRomain, "XX");
    });

    it("ETANT donne le chiffre 21 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XXI", function () {
        // Etant donne le chiffre 21
        let chiffreArabe : number = 21;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XXI
        assert.equal(chiffreRomain, "XXI");
    });

    it("ETANT donne le chiffre 22 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XXII", function () {
        // Etant donne le chiffre 22
        let chiffreArabe : number = 22;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XXII
        assert.equal(chiffreRomain, "XXII");
    });

    it("ETANT donne le chiffre 23 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XXIII", function () {
        // Etant donne le chiffre 23
        let chiffreArabe : number = 23;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XXIII
        assert.equal(chiffreRomain, "XXIII");
    });

    it("ETANT donne le chiffre 24 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XXIV", function () {
        // Etant donne le chiffre 24
        let chiffreArabe : number = 24;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XXIV
        assert.equal(chiffreRomain, "XXIV");
    });


    it("ETANT donne le chiffre 25 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XXV", function () {
        // Etant donne le chiffre 25
        let chiffreArabe : number = 25;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XXV
        assert.equal(chiffreRomain, "XXV");
    });

    it("ETANT donne le chiffre 26 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XXVI", function () {
        // Etant donne le chiffre 26
        let chiffreArabe : number = 26;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XXVI
        assert.equal(chiffreRomain, "XXVI");
    });


    it("ETANT donne le chiffre 27 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XXVII", function () {
        // Etant donne le chiffre 27
        let chiffreArabe : number = 27;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XXVII
        assert.equal(chiffreRomain, "XXVII");
    });

    it("ETANT donne le chiffre 28 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XXVIII", function () {
        // Etant donne le chiffre 28
        let chiffreArabe : number = 28;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XXVIII
        assert.equal(chiffreRomain, "XXVIII");
    });

    it("ETANT donne le chiffre 29 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XXIX", function () {
        // Etant donne le chiffre 29
        let chiffreArabe : number = 29;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XXIX
        assert.equal(chiffreRomain, "XXIX");
    });

    it("ETANT donne le chiffre 30 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XXX", function () {
        // Etant donne le chiffre 30
        let chiffreArabe : number = 30;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XXX
        assert.equal(chiffreRomain, "XXX");
    });

    it("ETANT donne le chiffre 31 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XXXI", function () {
        // Etant donne le chiffre 31
        let chiffreArabe : number = 31;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XXXI
        assert.equal(chiffreRomain, "XXXI");
    });

    it("ETANT donne le chiffre 32 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XXXII", function () {
        // Etant donne le chiffre 32
        let chiffreArabe : number = 32;

        // Quand on covertit le chiffre en nombre romain
        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XXXII
        assert.equal(chiffreRomain, "XXXII");
    });
});