let background_timer = {

    startCounting: function() {
        let identity = setInterval(scene, 1000);

        function scene() {
            progressbar.recover_stamina_fixed_amount(hero.staminaPerSecond);
            progressbar.recover_health_fixed_amount(hero.healthPerSecond);
            progressbar.recover_mana_fixed_amount(hero.manaPerSecond);
        }
    },
};