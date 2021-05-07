let progressbar = {

    healthMax: 10,
    manaMax: 10,
    staminaMax: 10,

    health: 10,
    mana: 10,
    stamina: 10,

    getProgressbarMax: function() {
        progressbar.healthMax = hero.health;
        progressbar.manaMax = hero.mana;
        progressbar.staminaMax = hero.stamina;
    },

    setStatesToZero: function() {
        progressbar.health = 0;
        progressbar.mana = 0;
        progressbar.stamina = 0;
    },

    setProgessbarMax: function(progressbar_type, max_value) {
        let element = document.getElementById("progressbar_state_" + progressbar_type + "_number_max");
        element.innerHTML = "/ " + max_value;
        logging("INFO", "The " + progressbar_type + "-progressbar has been set to: " + max_value);
    },

    //TODO: increase and reduce can be added to one function
    reduceStamina: function(decreasingNumber) {
        if ((progressbar.stamina - decreasingNumber) < 0) {
            return false;
        } else {
            progressbar.stamina -= decreasingNumber
            progressbar.refreshProgressbar("stamina");
            return true;
        }
    },

    //TODO: increase and reduce can be added to one function
    increaseStamina: function(increasingNumber) {
        progressbar.stamina += increasingNumber;
    },

    //TODO: increase and reduce can be added to one function
    reduceMana: function(decreasingNumber) {
        if ((progressbar.mana - decreasingNumber) < 0) {
            return false;
        } else {
            progressbar.mana -= decreasingNumber
            progressbar.refreshProgressbar("mana");
            return true;
        }
    },

    //TODO: increase and reduce can be added to one function
    increaseMana: function(increasingNumber) {
        progressbar.mana += increasingNumber;
    },

    //TODO: increase and reduce can be added to one function
    reduceHealth: function(decreasingNumber) {
        if ((progressbar.health - decreasingNumber) < 0) {
            return false;
        } else {
            progressbar.health -= decreasingNumber
            progressbar.refreshProgressbar("health");
            return true;
        }
    },

    //TODO: increase and reduce can be added to one function
    increaseHealth: function(increasingNumber) {
        progressbar.health += increasingNumber;
    },

    setAllProgessbarMaxes: function() {
        progressbar.getProgressbarMax();
        progressbar.setProgessbarMax("health", progressbar.healthMax);
        progressbar.setProgessbarMax("mana", progressbar.manaMax);
        progressbar.setProgessbarMax("stamina", progressbar.staminaMax);
    },

    refreshProgressbar: function(progressbar_type) {
        let progressbar_number = document.getElementById("progressbar_state_" + progressbar_type + "_number");
        let element = document.getElementById("progressbar_state_" + progressbar_type);

        switch (progressbar_type) {
            case "health":
                element.style.width = getPercentage(progressbar.health, progressbar.healthMax) + '%';
                progressbar_number.innerHTML = progressbar.health;
                break;
            case "mana":
                element.style.width = getPercentage(progressbar.mana, progressbar.manaMax) + '%';
                progressbar_number.innerHTML = progressbar.mana;
                break;
            case "stamina":
                element.style.width = getPercentage(progressbar.stamina, progressbar.staminaMax) + '%';
                progressbar_number.innerHTML = progressbar.stamina;
                break;
        }

    },

    //TODO: make this one to the main refreshProgressbar function
    refreshProgressbarDY: function(progressbarID, progressbarNumber, value, valueMax) {
        let elementProgressbar = document.getElementById(progressbarID);
        let elementProgressbarNumber = document.getElementById(progressbarNumber);

        elementProgressbar.style.width = getPercentage(value, valueMax) + '%';
        elementProgressbarNumber.innerHTML = value;
    },

    // TODO: Find better way or better readable way for the recovery functions
    recover_health: function() {
        let progressbar_number = document.getElementById("progressbar_state_health_number");
        let element = document.getElementById("progressbar_state_health");
        let identity = setInterval(scene, 10);

        function scene() {
            if (progressbar.health >= progressbar.healthMax) {
                clearInterval(identity);
            } else {
                progressbar.increaseHealth(1);
                element.style.width = getPercentage(progressbar.health, progressbar.healthMax) + '%';
                progressbar_number.innerHTML = progressbar.health;
            }
        }
    },

    // TODO: Find better way or better readable way for the recovery functions
    recover_mana: function() {
        let progressbar_number = document.getElementById("progressbar_state_mana_number");
        let element = document.getElementById("progressbar_state_mana");
        let identity = setInterval(scene, 10);

        function scene() {
            if (progressbar.mana >= progressbar.manaMax) {
                clearInterval(identity);
            } else {
                progressbar.increaseMana(1);
                element.style.width = getPercentage(progressbar.mana, progressbar.manaMax) + '%';
                progressbar_number.innerHTML = progressbar.mana;
            }
        }
    },

    // TODO: Find better way or better readable way for the recovery functions
    recover_stamina: function() {
        let progressbar_number = document.getElementById("progressbar_state_stamina_number");
        let element = document.getElementById("progressbar_state_stamina");
        let identity = setInterval(scene, 10);

        function scene() {
            if (progressbar.stamina >= progressbar.staminaMax) {
                clearInterval(identity);
            } else {
                progressbar.increaseStamina(1);
                element.style.width = getPercentage(progressbar.stamina, progressbar.staminaMax) + '%';
                progressbar_number.innerHTML = progressbar.stamina;
            }
        }
    },

    recover_stamina_fixed_amount: function(number) {
        let progressbar_number = document.getElementById("progressbar_state_stamina_number");
        let element = document.getElementById("progressbar_state_stamina");
        
        if (progressbar.stamina >= progressbar.staminaMax) {
            return;
        } else {
            progressbar.increaseStamina(number);
            element.style.width = getPercentage(progressbar.stamina, progressbar.staminaMax) + '%';
            progressbar_number.innerHTML = progressbar.stamina;
        }
    },

    recover_health_fixed_amount: function(number) {
        let progressbar_number = document.getElementById("progressbar_state_health_number");
        let element = document.getElementById("progressbar_state_health");
        
        if (progressbar.health >= progressbar.healthMax) {
            return;
        } else {
            progressbar.increaseHealth(number);
            element.style.width = getPercentage(progressbar.health, progressbar.healthMax) + '%';
            progressbar_number.innerHTML = progressbar.health;
        }
    },

    recover_mana_fixed_amount: function(number) {
        let progressbar_number = document.getElementById("progressbar_state_mana_number");
        let element = document.getElementById("progressbar_state_mana");
        
        if (progressbar.mana >= progressbar.manaMax) {
            return;
        } else {
            progressbar.increaseMana(number);
            element.style.width = getPercentage(progressbar.mana, progressbar.manaMax) + '%';
            progressbar_number.innerHTML = progressbar.mana;
        }
    },
};