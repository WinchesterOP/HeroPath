let jobs = {

    farmworking_stamina_cost: 10,
    farmworking_gold_gain: 10,
    reinforceBody_mana_cost: 10,
    reinforceBody_health_gain: 5,
    reinforceBody_stamina_gain: 5,

    workingOnFarm: function() {
        if (progressbar.reduceStamina(jobs.farmworking_stamina_cost) == true) {
            hero.addtoCurrentGold(jobs.farmworking_gold_gain);
        } else {
            logging_area.logSomeText("Not Enough Stamina");
        }

    },

    reinforceBody: function() {
        if (progressbar.reduceMana(jobs.reinforceBody_mana_cost) == true) {
            hero.increaseStaminaMax(jobs.reinforceBody_stamina_gain);
            hero.increaseHealthMax(jobs.reinforceBody_health_gain);
        } else {
            logging_area.logSomeText("Not Enough Mana");
        }

    },
};