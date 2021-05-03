let hero = {

    // Variables
    name: "no Name",

    level: 0,
    exp: 0,
    exp_needed: 5,

    health: 10,
    healthPerSecond: 1,
    mana: 10,
    manaPerSecond: 1,
    stamina: 10,
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

    setHeroName: function(name) {
        let heroname = document.getElementById("character_name");
        heroname.innerHTML = name;

        heroname = document.getElementById("attributes_name");
        heroname.innerHTML = "Name: " + name;
    },

    // Get the attributes from hero and sets the progressbars on the character-sheet
    firstInitialization: function() {
        progressbar.getProgressbarMax();
        progressbar.setAllProgessbarMaxes();
        progressbar.refreshProgressbar("health");
        progressbar.refreshProgressbar("mana");
        progressbar.refreshProgressbar("stamina");
        hero.refreshGoldDisplay();
        area_func.getAllSwitchAreas();
    },

    getCurrentGold: function() {
        return currentGold;
    },

    levelUp: function() {
        hero.level++;
        hero.setLevel(); 
        hero.increaseAttributePoints(hero.attributePointsPerLevel);
        hero.health += 10;
        hero.mana += 10;
        hero.stamina += 10;
        progressbar.setAllProgessbarMaxes();
        progressbar.refreshProgressbar("health");
        progressbar.refreshProgressbar("mana");
        progressbar.refreshProgressbar("stamina"); 
        story_progress.checkLevelProgress(hero.level);
        logging("INFO", "You have reached Level: " + hero.level);
    },

    setLevel: function() {
        let element = document.getElementById("character_level");
        element.innerHTML = "Lv. " + hero.level;

        element = document.getElementById("attributes_level");
        element.innerHTML = "Level: " + hero.level;
    },

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
                hero.attack += 10;
                hero.decreaseAttributePoints(1);
                attributes.refreshAttributeDisplay("Attack", hero.attack);
                attributes.refreshAttributeDisplay("Strength", hero.strength);
                break;
            case "Constitution":
                hero.constitution++;
                hero.defense += 5;
                hero.health += 10;
                hero.decreaseAttributePoints(1);
                attributes.refreshAttributeDisplay("Defense", hero.defense);
                attributes.refreshAttributeDisplay("Constitution", hero.constitution);
                break;
            case "Dexterity":
                hero.dexterity++;
                hero.stamina += 10;
                hero.evasion += 1;
                hero.decreaseAttributePoints(1);
                attributes.refreshAttributeDisplay("Dexterity", hero.dexterity);
                attributes.refreshAttributeDisplay("Evasion", hero.evasion);
                break;
            case "Essence":
                hero.essence++;
                hero.mana += 10;
                hero.magic_attack +=10;
                hero.decreaseAttributePoints(1);
                attributes.refreshAttributeDisplay("Essence", hero.essence);
                attributes.refreshAttributeDisplay("Magic Attack", hero.magic_attack);
                break;
            case "Luck":
                hero.luck++;
                hero.critical_chance +=1;
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
        progressbar.refreshProgressbar("health");
        progressbar.refreshProgressbar("mana");
        progressbar.refreshProgressbar("stamina"); 
    }, 

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

    checkIfLevelUp: function(exp){
        if (exp >= hero.exp_needed) {
            hero.exp_needed = ~~((hero.exp_needed * 1.5) + hero.exp);
            return true;
        } else {
            return false;
        }     
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