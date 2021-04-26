let hero = {

    // Variables
    name: "no Name",
    health: 100,
    mana: 130,
    stamina: 150,
    age: 5,
    currentGold: 100,

    setHeroName : function(name) {
        this.name = name;  
        let heroname = document.getElementById("character_name");
        heroname.innerHTML = name;
    },

    reduceStamina : function(decreasingNumber) {
        if ((hero.stamina - decreasingNumber) < 0) {
            return false;
        } else {
            hero.stamina -= decreasingNumber
            progressbar.refreshProgressbar("stamina");
            return true;
        }
    },

    getCurrentGold : function() {
        return currentGold;
    },

    addtoCurrentGold : function(gold) {
        hero.currentGold += gold;
        hero.refreshGoldDisplay();
    },

    refreshGoldDisplay : function() {
        let goldDisplay = document.getElementById("money_number");
        goldDisplay.innerHTML = hero.currentGold;
    }
};