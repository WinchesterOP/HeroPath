let jobs = {

    farmworking_stamina_cost: 10,
    farmworking_gold_gain: 20,

    workingOnFarm : function() {
        if (hero.reduceStamina(jobs.farmworking_stamina_cost) == true) {
            hero.addtoCurrentGold(jobs.farmworking_gold_gain);
        } else {
            logging_area.logSomeText("Not Enough Stamina");
        }

    },
};