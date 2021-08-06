let hero = {

    // Variables
    name: "No Name",

    level: 0,
    exp: 0,
    exp_needed: 5,

    health: 10,
    healthMax: 10,
    healthPerSecond: 1,
    mana: 10,
    manaMax: 10,
    manaPerSecond: 1,
    stamina: 10,
    staminaMax: 10,
    staminaPerSecond: 1,

    attributePoints: 0,
    attributePointsPerLevel: 5,

    strength: 1,
    constitution: 1,
    dexterity: 1,
    essence: 1,
    luck: 1,

    attack: 10,
    defense: 10,
    evasion: 10,
    magic_attack: 10,
    critical_chance: 10,

    currentGold: 0,

    //TODO: better way to get the stats?
    getStats: function() {
        return {
            name: hero.name,
            health: hero.health,
            healthMax: hero.healthMax,
            mana: hero.mana,
            manaMax: hero.manaMax,
            stamina: hero.stamina,
            staminaMax: hero.staminaMax,
            attack: hero.attack,
            magic_attack: hero.magic_attack,
            defense: hero.defense,
            evasion: hero.evasion,
            critical_chance: hero.critical_chance,
        };
    },

    setHeroName: function(name) {
        let heroname = document.getElementById("character_name");
        heroname.innerHTML = name;

        heroname = document.getElementById("attributes_name");
        heroname.innerHTML = "Name: " + name;
    },

    /**
     * <!-- Gold -->
     */

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

    /**
     * <!-- Level Up  -->
     */

    gainEXP: function(number) {
        hero.exp += number;
        if (hero.checkIfLevelUp(hero.exp)) {
            hero.levelUp();
        }
        hero.refreshExpDisplay();
    },

    refreshExpDisplay: function() {
        let element = document.getElementById("exp_number");
        element.innerHTML = hero.exp_needed - hero.exp;
    },

    checkIfLevelUp: function(exp) {
        if (exp >= hero.exp_needed) {
            hero.exp_needed = ~~((hero.exp_needed * 1.5) + hero.exp);
            return true;
        } else {
            return false;
        }
    },

    levelUp: function() {
        hero.level++;
        hero.setLevel();
        hero.increaseAttributePoints(hero.attributePointsPerLevel);
        hero.healthMax += 10;
        hero.manaMax += 10;
        hero.staminaMax += 10;
        progressbar.setAllProgessbarMaxes();
        progressbar.refreshProgressbar(prog.healthBar, prog.healthNum, hero.health, hero.healthMax);
        progressbar.refreshProgressbar(prog.manaBar, prog.manaNum, hero.mana, hero.manaMax);
        progressbar.refreshProgressbar(prog.staminaBar, prog.staminaNum, hero.stamina, hero.staminaMax);
        story_progress.checkLevelProgress(hero.level);
        logging("INFO", "You have reached Level: " + hero.level);
    },

    setLevel: function() {
        let element = document.getElementById("character_level");
        element.innerHTML = "Lv. " + hero.level;

        element = document.getElementById("attributes_level");
        element.innerHTML = "Level: " + hero.level;
    },

    /**
     * <!-- Attributes -->
     */

    decreaseAttributePoints: function(number) {
        hero.attributePoints -= number;

        let element = document.getElementById("attributes_remaining_points");
        element.innerHTML = "Remaining Points: " + hero.attributePoints;
    },

    increaseAttributePoints: function(number) {
        hero.attributePoints += number;

        let element = document.getElementById("attributes_remaining_points");
        element.innerHTML = "Remaining Points: " + hero.attributePoints;
    },

    increaseAttribute: function(attribute) {

        if (hero.attributePoints <= 0) {
            return;
        }

        switch (attribute) {
            case "Strength":
                hero.strength++;
                hero.attack += 1;
                hero.decreaseAttributePoints(1);
                attributes.refreshAttributeDisplay("Attack", hero.attack);
                attributes.refreshAttributeDisplay("Strength", hero.strength);
                break;
            case "Constitution":
                hero.constitution++;
                hero.defense += 1;
                hero.healthPerSecond += 1;
                hero.healthMax += 10;
                hero.decreaseAttributePoints(1);
                attributes.refreshAttributeDisplay("Defense", hero.defense);
                attributes.refreshAttributeDisplay("Constitution", hero.constitution);
                break;
            case "Dexterity":
                hero.dexterity++;
                hero.staminaPerSecond += 1;
                hero.staminaMax += 10;
                hero.evasion += 1;
                hero.decreaseAttributePoints(1);
                attributes.refreshAttributeDisplay("Dexterity", hero.dexterity);
                attributes.refreshAttributeDisplay("Evasion", hero.evasion);
                break;
            case "Essence":
                hero.essence++;
                hero.manaPerSecond += 1;
                hero.manaMax += 10;
                hero.magic_attack += 1;
                hero.decreaseAttributePoints(1);
                attributes.refreshAttributeDisplay("Essence", hero.essence);
                attributes.refreshAttributeDisplay("Magic Attack", hero.magic_attack);
                break;
            case "Luck":
                hero.luck++;
                hero.critical_chance += 1;
                hero.decreaseAttributePoints(1);
                attributes.refreshAttributeDisplay("Luck", hero.luck);
                attributes.refreshAttributeDisplay("Critical Chance", hero.critical_chance);
                break;
            default:
                logging("ERROR", "clicked on invalid Attribute button");
                break;
        }
        //TODO: put the progressbar function together
        progressbar.setAllProgessbarMaxes();
        progressbar.refreshProgressbar(prog.healthBar, prog.healthNum, hero.health, hero.healthMax);
        progressbar.refreshProgressbar(prog.manaBar, prog.staminaNum, hero.mana, hero.manaMax);
        progressbar.refreshProgressbar(prog.staminaBar, prog.staminaNum, hero.stamina, hero.staminaMax);
    },

    /**
     * <!-- Health, Mana, Stamina --> 
     */

    increaseHealthMax: function(increasingNumber) {
        hero.healthMax += increasingNumber;
        progressbar.setProgessbarMax(prog.health, hero.healthMax);
        progressbar.refreshProgressbar(prog.health, prog.healthNum, hero.health, hero.healthMax);
    },

    increaseHealth: function(increasingNumber) {
        if ((hero.health + increasingNumber) >= hero.healthMax) {
            hero.health = hero.healthMax;
        } else {
            hero.health += increasingNumber;
        }

        progressbar.refreshProgressbar(prog.healthBar, prog.healthNum, hero.health, hero.healthMax);
    },

    reduceHealth: function(decreasingNumber) {
        if ((hero.health - decreasingNumber) < 0) {
            progressbar.refreshProgressbar(prog.healthBar, prog.healthNum, hero.health, hero.healthMax);
            return false;
        } else {
            hero.health -= decreasingNumber;
            progressbar.refreshProgressbar(prog.healthBar, prog.healthNum, hero.health, hero.healthMax);
            return true;
        }
    },

    increaseManaMax: function(increasingNumber) {
        hero.manaMax += increasingNumber;
        progressbar.setProgessbarMax(prog.mana, hero.manaMax);
        progressbar.refreshProgressbar(prog.manaBar, prog.staminaNum, hero.mana, hero.manaMax);
    },

    increaseMana: function(increasingNumber) {
        if ((hero.mana + increasingNumber) >= hero.manaMax) {
            hero.mana = hero.manaMax;
        } else {
            hero.mana += increasingNumber;
        }

        progressbar.refreshProgressbar(prog.manaBar, prog.manaNum, hero.mana, hero.manaMax);
    },

    reduceMana: function(decreasingNumber) {
        if ((hero.mana - decreasingNumber) < 0) {
            progressbar.refreshProgressbar(prog.manaBar, prog.manaNum, hero.mana, hero.manaMax);
            return false;
        } else {
            hero.mana -= decreasingNumber;
            progressbar.refreshProgressbar(prog.manaBar, prog.manaNum, hero.mana, hero.manaMax);
            return true;
        }
    },

    increaseStaminaMax: function(increasingNumber) {
        hero.StaminaMax += increasingNumber;
        progressbar.setProgessbarMax(prog.stamina, hero.staminaMax);
        progressbar.refreshProgressbar(prog.staminaBar, prog.staminaNum, hero.stamina, hero.staminaMax);
    },

    increaseStamina: function(increasingNumber) {
        if ((hero.stamina + increasingNumber) >= hero.staminaMax) {
            hero.stamina = hero.staminaMax;
        } else {
            hero.stamina += increasingNumber;
        }

        progressbar.refreshProgressbar(prog.staminaBar, prog.staminaNum, hero.stamina, hero.staminaMax);
    },

    //TODO: better way to show true an false
    reduceStamina: function(decreasingNumber) {
        if ((hero.stamina - decreasingNumber) < 0) {
            progressbar.refreshProgressbar(prog.staminaBar, prog.staminaNum, hero.stamina, hero.staminaMax);
            return false;
        } else {
            hero.stamina -= decreasingNumber;
            progressbar.refreshProgressbar(prog.staminaBar, prog.staminaNum, hero.stamina, hero.staminaMax);
            return true;
        }
    },

};