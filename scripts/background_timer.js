let background_timer = {

    startCounting: function() {
        let saveTimer = 0;
        let identity = setInterval(scene, 1000);

        function scene() {
            
            // Regeneration
            if (!game.checkBattleMode()) {
                hero.increaseHealth(hero.healthPerSecond);
                hero.increaseMana(hero.manaPerSecond);
                hero.increaseStamina(hero.staminaPerSecond);

            }

            // Auto-Save
            if (saveTimer == 15) {
                saveHandler.saveAll();
                saveTimer = 0;
            } else {
                saveTimer++;
            }



        }
    },
};