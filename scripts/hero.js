let hero = {

    // Variables
    name: "no Name",
    health: 100,
    mana: 130,
    stamina: 150,
    age: 5,
    currentGold: 100,

    setHeroName: function(name) {
        this.name = name;
        let heroname = document.getElementById("character_name");
        heroname.innerHTML = name;
    },

    // Get the attributes from hero and sets the progressbars on the character-sheet
    firstInitialization: function() {
        progressbar.getProgressbarMax();
        progressbar.setStatesToZero();
        progressbar.setAllProgessbarMaxes();
        hero.refreshGoldDisplay();
    },

    getCurrentGold: function() {
        return currentGold;
    },

    addtoCurrentGold: function(gold) {
        hero.currentGold += gold;
        hero.refreshGoldDisplay();
    },

    refreshGoldDisplay: function() {
        let goldDisplay = document.getElementById("money_number");
        goldDisplay.innerHTML = hero.currentGold;
    },

    increaseStaminaMax: function(increasingNumber) {
        hero.stamina += increasingNumber;
        progressbar.setProgessbarMax("stamina", hero.stamina);
        progressbar.refreshProgressbar("stamina");
    },

    increaseHealthMax: function(increasingNumber) {
        hero.health += increasingNumber;
        progressbar.setProgessbarMax("health", hero.health);
        progressbar.refreshProgressbar("health");
    },
};