let button_func = {

    clickedOnRecoveryButton : function(){
        logging("INFO", "Recovery-Button has been pressed");
        progressbar.recover_stamina();
    },

    clickedOnRestButton : function(){
        logging("INFO", "Rest-Button has been pressed");
        progressbar.recover_health();
    },

    clickedOnMeditateButton : function(){
        logging("INFO", "Meditate-Button has been pressed");
        progressbar.recover_mana();
    },

    clickedOnFarmworkingButton : function(){
        logging("INFO", "Farmworking-Button has been pressed");
        jobs.workingOnFarm();
    },
    
};