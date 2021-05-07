let jobs = {
    
    //TODO: better way to track these variables
    firstSwing: true,
    swingSword_stamina_cost: 1,
    swingSword_exp_gain: 1,
    farmworking_stamina_cost: 10,
    farmworking_gold_gain: 10,
    farmworking_exp_gain: 5,
    reinforceBody_mana_cost: 10,
    reinforceBody_health_gain: 5,
    reinforceBody_stamina_gain: 5,

    swingSword: function() {     
        if (jobs.firstSwing) {
            jobs.firstSwing = false;
            area_func.appearStaminaProgressbar();
        }

        if (hero.reduceStamina(jobs.swingSword_stamina_cost) == true) {
            hero.gainEXP(jobs.swingSword_exp_gain);
            logging_area.logSomeText("You swung your Sword. Looks like you become better at swinging");
        } else {
            logging_area.logSomeText("Not Enough Stamina");
        }

    },

    workingOnFarm: function() {
        if (hero.reduceStamina(jobs.farmworking_stamina_cost) == true) {
            hero.addtoCurrentGold(jobs.farmworking_gold_gain);
            hero.gainEXP(jobs.farmworking_exp_gain);
            logging_area.logSomeText("You gained some gold for your hard work");
        } else {
            logging_area.logSomeText("Not Enough Stamina");
        }

    },

    reinforceBody: function() {
        if (hero.reduceMana(jobs.reinforceBody_mana_cost) == true) {
            hero.increaseStaminaMax(jobs.reinforceBody_stamina_gain);
            hero.increaseHealthMax(jobs.reinforceBody_health_gain);
            jobs.reinforceBody_mana_cost *= 2;
            logging_area.logSomeText("You reinforced your Body");
        } else {
            logging_area.logSomeText("Not Enough Mana");
        }

    },
};