/*
 * assert.equal(value1, value2) – checks the equality value1 == value2.
 * assert.strictEqual(value1, value2) – checks the strict equality value1 === value2.
 * assert.notEqual, assert.notStrictEqual – inverse checks to the ones above.
 * assert.isTrue(value) – checks that value === true
 * assert.isFalse(value) – checks that value === false
 */

describe("Testing of the basic functions", function() {

    it("simple multiplications", function() {
        assert.equal(multiplicate(2, 3), 6);
        assert.equal(multiplicate(2, 7), 14);
        assert.equal(multiplicate(5, 5), 25);
    });

    it("simple multiplications - negativ test", function() {
        assert.notEqual(multiplicate(2, 3), 67);
        assert.notEqual(multiplicate(2, 7), 145);
        assert.notEqual(multiplicate(5, 5), 253);
    });

    it("check word trimmer", function() {
        assert.equal(cutToFirstThreeLetters("Dome"), "Dom");
        assert.equal(cutToFirstThreeLetters("Mother"), "Mot");
    });
});


describe("Testing other Stuff", function() {



    it("simple multiplications", function() {
        assert.equal(multiplicate(2, 3), 6);
        assert.equal(multiplicate(2, 7), 14);
        assert.equal(multiplicate(5, 5), 25);
    });

    it("check word trimmer", function() {
        assert.equal(cutToFirstThreeLetters("Dome"), "Dom");
        assert.equal(cutToFirstThreeLetters("Mother"), "Mot");
    });

    describe("Some test under Stuff", function() {

        it("mulits", function() {
            assert.equal(multiplicate(2, 3), 6);
            assert.equal(multiplicate(2, 7), 14);
            assert.equal(multiplicate(5, 5), 25);
        });

        it("worder", function() {
            assert.equal(cutToFirstThreeLetters("Dome"), "Dom");
            assert.equal(cutToFirstThreeLetters("Mother"), "Mot");
        });

    });


});