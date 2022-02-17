class Hero {
    constructor() {
        this.name = "No Name";

        this.level = 0;
        this.exp = 0;
        this.exp_needed = 5;

        this.health = 100;
        this.healthMax = 100;
        this.healthPerSecond = 10;
        this.mana = 100;
        this.manaMax = 100;
        this.manaPerSecond = 10;
        this.stamina = 100;
        this.staminaMax = 100;
        this.staminaPerSecond = 10;

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

    loadHero(save) {
        this.name = save.name;

        this.level = save.level;
        this.exp = save.exp;
        this.exp_needed = save.exp_needed;

        this.health = save.health;
        this.healthMax = save.healthMax;
        this.healthPerSecond = save.healthPerSecond;
        this.mana = save.mana;
        this.manaMax = save.manaMax;
        this.manaPerSecond = save.manaPerSecond;
        this.stamina = save.stamina;
        this.staminaMax = save.staminaMax;
        this.staminaPerSecond = save.staminaPerSecond;

        this.attributePoints = save.attributePoints;
        //this belongs under a config
        this.attributePointsPerLevel = save.attributePointsPerLevel;

        this.strength = save.strength;
        this.constitution = save.constitution;
        this.dexterity = save.dexterity;
        this.essence = save.essence;
        this.luck = save.luck;

        this.attack = save.attack;
        this.defense = save.defense;
        this.evasion = save.evasion;
        this.magic_attack = save.evasion;
        this.critical_chance = save.critical_chance;

        this.currentGold = save.currentGold;

        this.setLevel();
        this.refreshExpDisplay();
        this.refreshGoldDisplay();
        this.refreshAttributePoints();
        this.refreshAttributeDisplay();
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
        this.exp += number;
        if (this.checkIfLevelUp(hero.exp)) {
            this.levelUp();
        }
        this.refreshExpDisplay();
    }

    refreshExpDisplay() {
        let element = document.getElementById("exp_number");
        element.innerHTML = this.exp_needed - this.exp;
    }

    checkIfLevelUp(exp) {
        if (exp >= hero.exp_needed) {
            this.exp_needed = ~~(hero.exp_needed * 1.5 + hero.exp);
            return true;
        } else {
            return false;
        }
    }

    levelUp() {
        this.level++;
        this.setLevel();
        this.increaseAttributePoints(hero.attributePointsPerLevel);
        this.healthMax += 10;
        this.manaMax += 10;
        this.staminaMax += 10;
        progressbar.setAllProgessbarMaxes();
        progressbar.refreshProgressbar(
            prog.healthBar,
            prog.healthNum,
            this.health,
            this.healthMax
        );
        progressbar.refreshProgressbar(
            prog.manaBar,
            prog.manaNum,
            this.mana,
            this.manaMax
        );
        progressbar.refreshProgressbar(
            prog.staminaBar,
            prog.staminaNum,
            this.stamina,
            this.staminaMax
        );
        story.checkLevelProgress(this.level);
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
        this.attributePoints -= number;
        this.refreshAttributePoints();
    }

    increaseAttributePoints(number) {
        this.attributePoints += number;
        this.refreshAttributePoints();
    }

    refreshAttributePoints() {
        let element = document.getElementById("attributes_remaining_points");
        element.innerHTML = "Remaining Points: " + this.attributePoints;
    }

    increaseAttribute(attribute) {
        if (hero.attributePoints <= 0) {
            return;
        }

        switch (attribute) {
            case "Strength":
                this.strength++;
                this.attack += 1;
                break;
            case "Constitution":
                this.constitution++;
                this.defense += 1;
                this.healthPerSecond += 1;
                this.healthMax += 10;
                break;
            case "Dexterity":
                this.dexterity++;
                this.staminaPerSecond += 1;
                this.staminaMax += 10;
                this.evasion += 1;
                break;
            case "Essence":
                this.essence++;
                this.manaPerSecond += 1;
                this.manaMax += 10;
                this.magic_attack += 1;
                break;
            case "Luck":
                this.luck++;
                this.critical_chance += 1;
                break;
            default:
                logging("ERROR", "clicked on invalid Attribute button");
                break;
        }

        this.decreaseAttributePoints(1);
        this.refreshAttributeDisplay();

        //TODO: put the progressbar function together
        progressbar.setAllProgessbarMaxes();
        progressbar.refreshProgressbar(
            prog.healthBar,
            prog.healthNum,
            hero.health,
            hero.healthMax
        );
        progressbar.refreshProgressbar(
            prog.manaBar,
            prog.staminaNum,
            hero.mana,
            hero.manaMax
        );
        progressbar.refreshProgressbar(
            prog.staminaBar,
            prog.staminaNum,
            hero.stamina,
            hero.staminaMax
        );
    }

    refreshAttributeDisplay() {
        let element;

        element = document.getElementById("attributes_strength_points");
        element.innerHTML = this.strength;

        element = document.getElementById("attributes_constitution_points");
        element.innerHTML = this.constitution;

        element = document.getElementById("attributes_dexterity_points");
        element.innerHTML = this.dexterity;

        element = document.getElementById("attributes_essence_points");
        element.innerHTML = this.essence;

        element = document.getElementById("attributes_luck_points");
        element.innerHTML = this.luck;

        element = document.getElementById("attributes_attack_value");
        element.innerHTML = this.attack;

        element = document.getElementById("attributes_magic_attack_value");
        element.innerHTML = this.magic_attack;

        element = document.getElementById("attributes_defense_value");
        element.innerHTML = this.defense;

        element = document.getElementById("attributes_critical_chance_value");
        element.innerHTML = this.critical_chance + "%";

        element = document.getElementById("attributes_evasion_value");
        element.innerHTML = this.evasion + "%";
    }

    /**
     * <!-- Health, Mana, Stamina -->
     */

    increaseHealthMax(increasingNumber) {
        hero.healthMax += increasingNumber;
        progressbar.setProgessbarMax(prog.health, hero.healthMax);
        progressbar.refreshProgressbar(
            prog.health,
            prog.healthNum,
            hero.health,
            hero.healthMax
        );
    }

    increaseHealth(increasingNumber) {
        if (hero.health + increasingNumber >= hero.healthMax) {
            hero.health = hero.healthMax;
        } else {
            hero.health += increasingNumber;
        }

        progressbar.refreshProgressbar(
            prog.healthBar,
            prog.healthNum,
            hero.health,
            hero.healthMax
        );
    }

    reduceHealth(decreasingNumber) {
        if (hero.health - decreasingNumber < 0) {
            progressbar.refreshProgressbar(
                prog.healthBar,
                prog.healthNum,
                hero.health,
                hero.healthMax
            );
            return false;
        } else {
            hero.health -= decreasingNumber;
            progressbar.refreshProgressbar(
                prog.healthBar,
                prog.healthNum,
                hero.health,
                hero.healthMax
            );
            return true;
        }
    }

    increaseManaMax(increasingNumber) {
        hero.manaMax += increasingNumber;
        progressbar.setProgessbarMax(prog.mana, hero.manaMax);
        progressbar.refreshProgressbar(
            prog.manaBar,
            prog.staminaNum,
            hero.mana,
            hero.manaMax
        );
    }

    increaseMana(increasingNumber) {
        if (hero.mana + increasingNumber >= hero.manaMax) {
            hero.mana = hero.manaMax;
        } else {
            hero.mana += increasingNumber;
        }

        progressbar.refreshProgressbar(
            prog.manaBar,
            prog.manaNum,
            hero.mana,
            hero.manaMax
        );
    }

    reduceMana(decreasingNumber) {
        if (hero.mana - decreasingNumber < 0) {
            progressbar.refreshProgressbar(
                prog.manaBar,
                prog.manaNum,
                hero.mana,
                hero.manaMax
            );
            return false;
        } else {
            hero.mana -= decreasingNumber;
            progressbar.refreshProgressbar(
                prog.manaBar,
                prog.manaNum,
                hero.mana,
                hero.manaMax
            );
            return true;
        }
    }

    increaseStaminaMax(increasingNumber) {
        hero.StaminaMax += increasingNumber;
        progressbar.setProgessbarMax(prog.stamina, hero.staminaMax);
        progressbar.refreshProgressbar(
            prog.staminaBar,
            prog.staminaNum,
            hero.stamina,
            hero.staminaMax
        );
    }

    increaseStamina(increasingNumber) {
        if (hero.stamina + increasingNumber >= hero.staminaMax) {
            hero.stamina = hero.staminaMax;
        } else {
            hero.stamina += increasingNumber;
        }

        progressbar.refreshProgressbar(
            prog.staminaBar,
            prog.staminaNum,
            hero.stamina,
            hero.staminaMax
        );
    }

    //TODO: better way to show true an false
    reduceStamina(decreasingNumber) {
        if (hero.stamina - decreasingNumber < 0) {
            progressbar.refreshProgressbar(
                prog.staminaBar,
                prog.staminaNum,
                hero.stamina,
                hero.staminaMax
            );
            return false;
        } else {
            hero.stamina -= decreasingNumber;
            progressbar.refreshProgressbar(
                prog.staminaBar,
                prog.staminaNum,
                hero.stamina,
                hero.staminaMax
            );
            return true;
        }
    }
}
