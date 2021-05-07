let button_func = {

    vanishButton: function(buttonid) {
        logging("INFO", buttonid + "-Button is now invisible")
        let button = document.getElementById(buttonid);
        button.style.display = "none";
    },

    appearButton: function(buttonid) {
        logging("INFO", buttonid + "-Button is now visible")
        let button = document.getElementById(buttonid);
        button.style.display = "inline-block";
    },

    appearMenuButton: function(buttonid) {
        logging("INFO", buttonid + "-Button is now visible")
        let button = document.getElementById(buttonid);
        button.style.display = "block";
    },

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
        logging("INFO", "LittleTown-Button has been pressed");
        area_func.switchToLittleTown();
    },

    clickedOnHomeButton: function() {
        logging("INFO", "Home-Button has been pressed");
        area_func.switchToHome();
    },

    clickedOnWorldButton: function() {
        logging("INFO", "World-Button has been pressed");
        area_func.switchMenuToWorld();
    },

    clickedOnAttributesButton: function() {
        logging("INFO", "Attributes-Button has been pressed");
        area_func.switchMenuToAttributes();
    },

    clickedOnDiaryButton: function() {
        logging("INFO", "Diary-Button has been pressed");
        area_func.switchMenuToDiary();
    },

    clickedOnEntriesButton: function() {
        logging("INFO", "Entries-Button has been pressed");
        area_func.switchToEntries();
    },

    clickedOnQuestButton: function() {
        logging("INFO", "Quest-Button has been pressed");
        area_func.switchToQuest();
    },

    clickedOnSwordSwingButton: function() {
        logging("INFO", "SwordSwing-Button has been pressed");
        jobs.swingSword();
    },

    clickedOnTalkToFatherButton: function() {
        logging("INFO", "Talk-to-Father-Button has been pressed");
        story_progress.talkToFather();
    },

    clickedOnTalkToLittleTownFarmerButton: function() {
        logging("INFO", "Talk-to-Farmer-Button has been pressed");
        story_progress.talkToLittleTownFarmer();
    },

    clickedOnTalkToLadyLittleTownButton: function() {
        logging("INFO", "Talk-to-Lady-Button has been pressed");
        story_progress.talkToLittleTownLady();
    },

    clickedOnDungeonFlowerBedButton: function() {
        logging("INFO", "DungeonFlowerBed-Button has been pressed");
        battle.createBattleArea('Dungeon: Flower Bed');
    },

    clickedOnRaiseAttributeButton: function(attribute) {
        logging("INFO", "Raise-Attributes-Button has been pressed for: " +  attribute);
        hero.increaseAttribute(attribute);
    },

    clickedOnAttackButton: function(attribute) {
        logging("INFO", "Attack-Button has been pressed");
        battle.fightAttack();
    },

};