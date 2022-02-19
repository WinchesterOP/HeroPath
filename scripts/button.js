let button = {
   openLine: function (classname, name) {
      let i, tabcontent;

      // Get all elements with used classname and hide them
      tabcontent = document.getElementsByClassName(classname);
      for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
      }

      // Show the new tab
      document.getElementById(name).style.display = "block";
   },
};

class Button {
   constructor() {
      this.saveVisible = true;
      this.clearVisible = true;

      this.attributesVisible = false;
      this.inventoryVisible = false;
      this.diaryVisible = false;
      this.entriesVisible = false;
      this.healthProgressbar = false;
      this.manaProgressbar = false;
      this.staminaProgressbar = false;
      this.expDisplay = false;
      this.goldVisible = false;
      this.questVisible = false;

      this.littleTownVisible = false;

      this.dungeonFlowerBedVisible = false;
      this.farmworkingVisible = false;
      this.talkToFatherVisible = false;
      this.talkToLittleTownFarmerVisible = false;
      this.talkToLittleTownLadyVisible = false;
   }

   loadButton(save) {
      this.attributesVisible = save.attributesVisible;
      this.inventoryVisible = save.inventoryVisible;
      this.diaryVisible = save.diaryVisible;
      this.entriesVisible = save.entriesVisible;
      this.healthProgressbar = save.healthProgressbar;
      this.manaProgressbar = save.manaProgressbar;
      this.staminaProgressbar = save.staminaProgressbar;
      this.expDisplay = save.expDisplay;
      this.goldVisible = save.goldVisible;
      this.questVisible = save.questVisible;

      this.littleTownVisible = save.littleTownVisible;

      this.dungeonFlowerBedVisible = save.dungeonFlowerBedVisible;
      this.farmworkingVisible = save.farmworkingVisible;
      this.talkToFatherVisible = save.talkToFatherVisible;
      this.talkToLittleTownFarmerVisible = save.talkToLittleTownFarmerVisible;
      this.talkToLittleTownLadyVisible = save.talkToLittleTownLadyVisible;

      this.setButtonVisibility();
   }

   setButtonVisibility() {
      if (this.saveVisible) this.appearMenuButton("saveButton");
      if (this.clearVisible) this.appearMenuButton("clearSaveButton");

      if (this.attributesVisible) this.appearMenuButton("attributesButton");
      if (this.inventoryVisible) this.appearMenuButton("inventoryButton");
      if (this.diaryVisible) this.appearMenuButton("diaryButton");
      if (this.entriesVisible) this.appearButton("entriesButton");
      if (this.healthProgressbar) area_func.appearHealthProgressbar();
      if (this.manaProgressbar) area_func.appearManaProgressbar();
      if (this.staminaProgressbar) area_func.appearStaminaProgressbar();
      if (this.expDisplay) area_func.appearExpDisplay();
      if (this.goldVisible) area_func.appearGold();
      if (this.questVisible) this.appearButton("questButton");

      if (this.littleTownVisible) this.appearButton("littleTownButton");

      if (this.dungeonFlowerBedVisible) this.appearButton("dungeonFlowerBedButton");
      if (this.farmworkingVisible) this.appearButton("farmworkingButton");
      if (this.talkToFatherVisible) this.appearButton("talkToFatherButton");
      if (this.talkToLittleTownFarmerVisible) this.appearMenuButton("attributesButton");
      if (this.talkToLittleTownLadyVisible) this.appearMenuButton("attributesButton");
   }

   vanishButton(buttonid) {
      logging("INFO", buttonid + "-Button is now invisible");
      let buttonElement = document.getElementById(buttonid);
      buttonElement.style.display = "none";
   }

   appearButton(buttonid) {
      logging("INFO", buttonid + "-Button is now visible");
      let buttonElement = document.getElementById(buttonid);
      buttonElement.style.display = "inline-block";
   }

   appearMenuButton(buttonid) {
      logging("INFO", buttonid + "-Button is now visible");
      let buttonElement = document.getElementById(buttonid);
      buttonElement.style.display = "block";
   }

   clickedOnSaveButton() {
      logging("INFO", "Save-Button has been pressed");
      Savegame.saveAll();
   }

   clickedOnClearSaveButton() {
      logging("INFO", "ClearSave-Button has been pressed");
      Savegame.clearAll();
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
      battle.createBattleArea("Dungeon: Flower Bed");
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
