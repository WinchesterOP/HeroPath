class Button {

    constructor() {
        this.talkToFatherVisible = false;
        this.talkToLittleTownFarmerVisible = false;
        this.talkToLittleTownLadyVisible = false;
       
    }

    vanishButton(buttonid) {
        logging("INFO", buttonid + "-Button is now invisible")
        let buttonElement = document.getElementById(buttonid);
        buttonElement.style.display = "none";
    }

    appearButton(buttonid) {
        logging("INFO", buttonid + "-Button is now visible")
        let buttonElement = document.getElementById(buttonid);
        buttonElement.style.display = "inline-block";
    }

    appearMenuButton(buttonid) {
        logging("INFO", buttonid + "-Button is now visible")
        let buttonElement = document.getElementById(buttonid);
        buttonElement.style.display = "block";
    }

    clickedOnRecoveryButton() {
        logging("INFO", "Recovery-Button has been pressed");
        progressbar.recover_stamina();
    }

    clickedOnRestButton() {
        logging("INFO", "Rest-Button has been pressed");
        progressbar.recover_health();
    }

    clickedOnMeditateButton() {
        logging("INFO", "Meditate-Button has been pressed");
        progressbar.recover_mana();
    }

    clickedOnSaveButton() {
        logging("INFO", "Save-Button has been pressed");
        saveHandler.saveAll();
    }

    clickedOnClearSaveButton() {
        logging("INFO", "ClearSave-Button has been pressed");
        saveHandler.clearAll();
    }

    clickedOnFarmworkingButton() {
        logging("INFO", "Farmworking-Button has been pressed");
        activity.workingOnFarm();
    }

    clickedOnReinforceBodyButton() {
        logging("INFO", "ReinforceBody-Button has been pressed");
        activity.reinforceBody();
    }

    clickedOnLittleTownButton() {
        logging("INFO", "LittleTown-Button has been pressed");
        area_func.switchToLittleTown();
    }

    clickedOnHomeButton() {
        logging("INFO", "Home-Button has been pressed");
        area_func.switchToHome();
    }

    clickedOnWorldButton() {
        logging("INFO", "World-Button has been pressed");
        area_func.switchMenuToWorld();
    }

    clickedOnAttributesButton() {
        logging("INFO", "Attributes-Button has been pressed");
        area_func.switchMenuToAttributes();
    }

    clickedOnDiaryButton() {
        logging("INFO", "Diary-Button has been pressed");
        area_func.switchMenuToDiary();
    }

    clickedOnEntriesButton() {
        logging("INFO", "Entries-Button has been pressed");
        area_func.switchToEntries();
    }

    clickedOnQuestButton() {
        logging("INFO", "Quest-Button has been pressed");
        area_func.switchToQuest();
    }

    clickedOnSwordSwingButton() {
        logging("INFO", "SwordSwing-Button has been pressed");
        activity.swingSword();
    }

    clickedOnTalkToFatherButton() {
        logging("INFO", "Talk-to-Father-Button has been pressed");
        story.talkToFather();
    }

    clickedOnTalkToLittleTownFarmerButton() {
        logging("INFO", "Talk-to-Farmer-Button has been pressed");
        story.talkToLittleTownFarmer();
    }

    clickedOnTalkToLadyLittleTownButton() {
        logging("INFO", "Talk-to-Lady-Button has been pressed");
        story.talkToLittleTownLady();
    }

    clickedOnDungeonFlowerBedButton() {
        logging("INFO", "DungeonFlowerBed-Button has been pressed");
        battle.createBattleArea('Dungeon: Flower Bed');
    }

    clickedOnRaiseAttributeButton(attribute) {
        logging("INFO", "Raise-Attributes-Button has been pressed for: " + attribute);
        hero.increaseAttribute(attribute);
    }

    clickedOnAttackButton(attribute) {
        logging("INFO", "Attack-Button has been pressed");
        battle.fightAttack();
    }

}