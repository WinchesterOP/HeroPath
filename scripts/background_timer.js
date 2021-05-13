let background_timer = {

    startCounting: function() {
        let identity = setInterval(scene, 1000);

        function scene() {

            if (!game.checkBattleMode()) {
                hero.increaseHealth(hero.healthPerSecond);
                hero.increaseMana(hero.manaPerSecond);
                hero.increaseStamina(hero.staminaPerSecond);

            }
        }
    },
};