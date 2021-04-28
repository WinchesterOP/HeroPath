let button_func = {

    first_area_block: document.getElementById("first_area"),
    home_area_block: document.getElementById("home_area"),

    clickedOnRecoveryButton: function() {
        logging("INFO", "Recovery-Button has been pressed");
        progressbar.recover_stamina();
    },

    clickedOnRestButton: function() {
        logging("INFO", "Rest-Button has been pressed");
        progressbar.recover_health();
    },

    clickedOnMeditateButton: function() {
        logging("INFO", "Meditate-Button has been pressed");
        progressbar.recover_mana();
    },

    clickedOnFarmworkingButton: function() {
        logging("INFO", "Farmworking-Button has been pressed");
        jobs.workingOnFarm();
    },

    clickedOnReinforceBodyButton: function() {
        logging("INFO", "ReinforceBody-Button has been pressed");
        jobs.reinforceBody();
    },

    clickedOnLittleTownButton: function() {
        if (button_func.first_area_block.style.display === "none") {
            button_func.first_area_block.style.display = "block";
            button_func.home_area_block.style.display = "none";
        } else {
            button_func.first_area_block.style.display = "none";
            button_func.home_area_block.style.display = "block";
        }
    },

    clickedOnHomeButton: function() {
        if (button_func.home_area_block.style.display === "none") {
            button_func.home_area_block.style.display = "block";
            button_func.first_area_block.style.display = "none";
        } else {
            button_func.home_area_block.style.display = "none";
            button_func.first_area_block.style.display = "block";
        }
    },

};