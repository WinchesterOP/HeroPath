let hero = {

    // Variables
    name: "no Name",
    level: 0,
    exp: 0,
    exp_needed: 5,
    attributePoints: 0,
    health: 10,
    mana: 10,
    stamina: 10,
    staminaPerSecond: 1,
    currentGold: 0,

    setHeroName: function(name) {
        this.name = name;
        let heroname = document.getElementById("character_name");
        heroname.innerHTML = name;
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
        hero.attributePoints += 10;
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