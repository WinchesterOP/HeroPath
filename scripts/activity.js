let activity = {

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
        if (activity.firstSwing) {
            activity.firstSwing = false;
            area_func.appearStaminaProgressbar();
            button.staminaProgressbar = true;
        }

        if (hero.reduceStamina(activity.swingSword_stamina_cost) == true) {
            hero.gainEXP(activity.swingSword_exp_gain);
            logging_area.logSomeText("You swung your Sword. Looks like you become better at swinging");
        } else {
            logging_area.logSomeText("Not Enough Stamina");
        }

    },

    workingOnFarm: function() {
        if (hero.reduceStamina(activity.farmworking_stamina_cost) == true) {
            hero.addtoCurrentGold(activity.farmworking_gold_gain);
            hero.gainEXP(activity.farmworking_exp_gain);
            logging_area.logSomeText("You gained some gold for your hard work");
        } else {
            logging_area.logSomeText("Not Enough Stamina");
        }

    },

    reinforceBody: function() {
        if (hero.reduceMana(activity.reinforceBody_mana_cost) == true) {
            hero.increaseStaminaMax(activity.reinforceBody_stamina_gain);
            hero.increaseHealthMax(activity.reinforceBody_health_gain);
            activity.reinforceBody_mana_cost *= 2;
            logging_area.logSomeText("You reinforced your Body");
        } else {
            logging_area.logSomeText("Not Enough Mana");
        }

    },
};