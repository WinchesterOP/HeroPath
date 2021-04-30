let background_timer = {

    startCounting: function() {
        let identity = setInterval(scene, 1000);

        function scene() {
            progressbar.recover_stamina_fixed_amount(hero.staminaPerSecond);
        }
    },
};