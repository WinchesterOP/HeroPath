let progressbar = {

    health_max: 100,
    mana_max: 100,
    stamina_max: 100,

    health_state: 0,
    mana_state: 0,
    stamina_state: 0,

    getProgressbarMax: function() {
        progressbar.health_max = hero.health;
        progressbar.mana_max = hero.mana;
        progressbar.stamina_max = hero.stamina;
    },

    setStatesToZero: function() {
        progressbar.health_state = 0;
        progressbar.mana_state = 0;
        progressbar.stamina_state = 0;
    },

    setProgessbarMax: function(progressbar_type, max_value) {
        let element = document.getElementById("progressbar_state_" + progressbar_type + "_number_max");
        element.innerHTML = "/ " + max_value;
        logging("INFO", "The " + progressbar_type + "-progressbar has been set to: " + max_value);
    },

    reduceStamina: function(decreasingNumber) {
        if ((progressbar.stamina_state - decreasingNumber) < 0) {
            return false;
        } else {
            progressbar.stamina_state -= decreasingNumber
            progressbar.refreshProgressbar("stamina");
            return true;
        }
    },

    increaseStamina: function(increasingNumber) {
        progressbar.stamina_state += increasingNumber;
    },

    reduceMana: function(decreasingNumber) {
        if ((progressbar.mana_state - decreasingNumber) < 0) {
            return false;
        } else {
            progressbar.mana_state -= decreasingNumber
            progressbar.refreshProgressbar("mana");
            return true;
        }
    },

    increaseMana: function(increasingNumber) {
        progressbar.mana_state += increasingNumber;
    },

    setAllProgessbarMaxes: function() {
        progressbar.setProgessbarMax("health", progressbar.health_max);
        progressbar.setProgessbarMax("mana", progressbar.mana_max);
        progressbar.setProgessbarMax("stamina", progressbar.stamina_max);
    },

    refreshProgressbar: function(progressbar_type) {
        let progressbar_number = document.getElementById("progressbar_state_" + progressbar_type + "_number");
        let element = document.getElementById("progressbar_state_" + progressbar_type);

        switch (progressbar_type) {
            case "health":
                element.style.width = getPercentage(progressbar.health_state, progressbar.health_max) + '%';
                progressbar_number.innerHTML = progressbar.health_state;
                break;
            case "mana":
                element.style.width = getPercentage(progressbar.mana_state, progressbar.mana_max) + '%';
                progressbar_number.innerHTML = progressbar.mana_state;
                break;
            case "stamina":
                element.style.width = getPercentage(progressbar.stamina_state, progressbar.stamina_max) + '%';
                progressbar_number.innerHTML = progressbar.stamina_state;
                break;
        }

    },

    // TODO: Find better way or better readable way for the recovery functions
    recover_health: function() {
        let progressbar_number = document.getElementById("progressbar_state_health_number");
        let element = document.getElementById("progressbar_state_health");
        let identity = setInterval(scene, 10);

        function scene() {
            if (progressbar.health_state >= progressbar.health_max) {
                clearInterval(identity);
            } else {
                progressbar.health_state = progressbar.health_state++;
                element.style.width = getPercentage(progressbar.health_state, progressbar.health_max) + '%';
                progressbar_number.innerHTML = progressbar.health_state;
            }
        }
    },

    // TODO: Find better way or better readable way for the recovery functions
    recover_mana: function() {
        let progressbar_number = document.getElementById("progressbar_state_mana_number");
        let element = document.getElementById("progressbar_state_mana");
        let identity = setInterval(scene, 10);

        function scene() {
            if (progressbar.mana_state >= progressbar.mana_max) {
                clearInterval(identity);
            } else {
                progressbar.increaseMana(1);
                element.style.width = getPercentage(progressbar.mana_state, progressbar.mana_max) + '%';
                progressbar_number.innerHTML = progressbar.mana_state;
            }
        }
    },

    // TODO: Find better way or better readable way for the recovery functions
    recover_stamina: function() {
        let progressbar_number = document.getElementById("progressbar_state_stamina_number");
        let element = document.getElementById("progressbar_state_stamina");
        let identity = setInterval(scene, 10);

        function scene() {
            if (progressbar.stamina_state >= progressbar.stamina_max) {
                clearInterval(identity);
            } else {
                progressbar.increaseStamina(1);
                element.style.width = getPercentage(progressbar.stamina_state, progressbar.stamina_max) + '%';
                progressbar_number.innerHTML = progressbar.stamina_state;
            }
        }
    },
};