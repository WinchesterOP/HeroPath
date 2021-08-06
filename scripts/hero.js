class Hero {

    constructor(){
        this.name = "No Name";

        this.level = 0;
        this.exp = 0;
        this.exp_needed = 5;

        this.health = 10;
        this.healthMax = 10;
        this.healthPerSecond = 1;
        this.mana = 10;
        this.manaMax = 10;
        this.manaPerSecond = 1;
        this.stamina = 10;
        this.staminaMax = 10;
        this.staminaPerSecond = 1;

        this.attributePoints = 0;
        this.attributePointsPerLevel = 5;

        this.strength = 1;
        this.constitution = 1;
        this.dexterity = 1;
        this.essence = 1;
        this.luck = 1;

        this.attack = 10;
        this.defense = 10;
        this.evasion = 10;
        this.magic_attack = 10;
        this.critical_chance = 10;

        this.currentGold = 0;
    }
    

    //TODO: better way to get the stats?
    getStats() {
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
    }

    setHeroName(name) {
        let heroname = document.getElementById("character_name");
        heroname.innerHTML = name;

        heroname = document.getElementById("attributes_name");
        heroname.innerHTML = "Name: " + name;
    }
    
    /**
     * <!-- Gold -->
     */

    getCurrentGold() {
        return currentGold;
    }

    addtoCurrentGold(gold) {
        hero.currentGold += gold;
        hero.refreshGoldDisplay();
    }

    refreshGoldDisplay() {
        let goldDisplay = document.getElementById("money_number");
        goldDisplay.innerHTML = hero.currentGold;
    }

    /**
     * <!-- Level Up  -->
     */

    gainEXP(number) {
        hero.exp += number;
        if (hero.checkIfLevelUp(hero.exp)) {
            hero.levelUp();
        }
        hero.refreshExpDisplay();
    }

    refreshExpDisplay() {
        let element = document.getElementById("exp_number");
        element.innerHTML = hero.exp_needed - hero.exp;
    }

    checkIfLevelUp(exp) {
        if (exp >= hero.exp_needed) {
            hero.exp_needed = ~~((hero.exp_needed * 1.5) + hero.exp);
            return true;
        } else {
            return false;
        }
    }

    levelUp() {
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
    }

    setLevel() {
        let element = document.getElementById("character_level");
        element.innerHTML = "Lv. " + hero.level;

        element = document.getElementById("attributes_level");
        element.innerHTML = "Level: " + hero.level;
    }

    /**
     * <!-- Attributes -->
     */

    decreaseAttributePoints(number) {
        hero.attributePoints -= number;

        let element = document.getElementById("attributes_remaining_points");
        element.innerHTML = "Remaining Points: " + hero.attributePoints;
    }

    increaseAttributePoints(number) {
        hero.attributePoints += number;

        let element = document.getElementById("attributes_remaining_points");
        element.innerHTML = "Remaining Points: " + hero.attributePoints;
    }

    increaseAttribute(attribute) {

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
    }

    /**
     * <!-- Health, Mana, Stamina --> 
     */

    increaseHealthMax(increasingNumber) {
        hero.healthMax += increasingNumber;
        progressbar.setProgessbarMax(prog.health, hero.healthMax);
        progressbar.refreshProgressbar(prog.health, prog.healthNum, hero.health, hero.healthMax);
    }

    increaseHealth(increasingNumber) {
        if ((hero.health + increasingNumber) >= hero.healthMax) {
            hero.health = hero.healthMax;
        } else {
            hero.health += increasingNumber;
        }

        progressbar.refreshProgressbar(prog.healthBar, prog.healthNum, hero.health, hero.healthMax);
    }

    reduceHealth(decreasingNumber) {
        if ((hero.health - decreasingNumber) < 0) {
            progressbar.refreshProgressbar(prog.healthBar, prog.healthNum, hero.health, hero.healthMax);
            return false;
        } else {
            hero.health -= decreasingNumber;
            progressbar.refreshProgressbar(prog.healthBar, prog.healthNum, hero.health, hero.healthMax);
            return true;
        }
    }

    increaseManaMax(increasingNumber) {
        hero.manaMax += increasingNumber;
        progressbar.setProgessbarMax(prog.mana, hero.manaMax);
        progressbar.refreshProgressbar(prog.manaBar, prog.staminaNum, hero.mana, hero.manaMax);
    }

    increaseMana(increasingNumber) {
        if ((hero.mana + increasingNumber) >= hero.manaMax) {
            hero.mana = hero.manaMax;
        } else {
            hero.mana += increasingNumber;
        }

        progressbar.refreshProgressbar(prog.manaBar, prog.manaNum, hero.mana, hero.manaMax);
    }

    reduceMana(decreasingNumber) {
        if ((hero.mana - decreasingNumber) < 0) {
            progressbar.refreshProgressbar(prog.manaBar, prog.manaNum, hero.mana, hero.manaMax);
            return false;
        } else {
            hero.mana -= decreasingNumber;
            progressbar.refreshProgressbar(prog.manaBar, prog.manaNum, hero.mana, hero.manaMax);
            return true;
        }
    }

    increaseStaminaMax(increasingNumber) {
        hero.StaminaMax += increasingNumber;
        progressbar.setProgessbarMax(prog.stamina, hero.staminaMax);
        progressbar.refreshProgressbar(prog.staminaBar, prog.staminaNum, hero.stamina, hero.staminaMax);
    }

    increaseStamina(increasingNumber) {
        if ((hero.stamina + increasingNumber) >= hero.staminaMax) {
            hero.stamina = hero.staminaMax;
        } else {
            hero.stamina += increasingNumber;
        }

        progressbar.refreshProgressbar(prog.staminaBar, prog.staminaNum, hero.stamina, hero.staminaMax);
    }

    //TODO: better way to show true an false
    reduceStamina(decreasingNumber) {
        if ((hero.stamina - decreasingNumber) < 0) {
            progressbar.refreshProgressbar(prog.staminaBar, prog.staminaNum, hero.stamina, hero.staminaMax);
            return false;
        } else {
            hero.stamina -= decreasingNumber;
            progressbar.refreshProgressbar(prog.staminaBar, prog.staminaNum, hero.stamina, hero.staminaMax);
            return true;
        }
    }

}