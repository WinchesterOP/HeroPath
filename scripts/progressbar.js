let progressbar = {

    health_max: 100,
    mana_max: 100,
    stamina_max: 100,

    health_state: 0,
    mana_state: 0,
    stamina_state: 0,

    // Get the attributes from hero and sets the progressbars on the character-sheet
    firstInitialization : function() {
        progressbar.getProgressbarMax(); 
        progressbar.setStatesToZero();
        progressbar.setAllProgessbarMaxes(); 
    },

    getProgressbarMax : function() {
        health_max = hero.health;
        mana_max = hero.mana;
        stamina_max = hero.stamina;
    },

    setStatesToZero : function() {
        health_state = 0;
        mana_state = 0;
        stamina_state = 0;
    },

    setProgessbarMax : function(progressbar_type, max_value) {
        let element = document.getElementById("progressbar_state_" + progressbar_type + "_number_max");
        element.innerHTML = "/ " + max_value;  
        logging("INFO", "The " + progressbar_type + "-progressbar has been set to: " + max_value );           
    },

    setAllProgessbarMaxes : function() {
        progressbar.setProgessbarMax("health",health_max);
        progressbar.setProgessbarMax("mana",mana_max);
        progressbar.setProgessbarMax("stamina",stamina_max);
    },    

    refreshProgressbar : function(progressbar_type) {
        let progressbar_number = document.getElementById("progressbar_state_" + progressbar_type + "_number");
        let element = document.getElementById("progressbar_state_" + progressbar_type); 
        
        switch (progressbar_type) {
            case "health":
                element.style.width = getPercentage(health_state, health_max) + '%'; 
                progressbar_number.innerHTML = health_state;
                break;
            case "mana":
                element.style.width = getPercentage(mana_state, mana_max) + '%'; 
                progressbar_number.innerHTML = mana_state;
                break;
            case "stamina":
                element.style.width = getPercentage(stamina_state, stamina_max) + '%'; 
                progressbar_number.innerHTML = stamina_state;
                break;
        }
        
    },

    // TODO: Find better way or better readable way for the recovery functions
    recover_health : function() {
        let progressbar_number = document.getElementById("progressbar_state_health_number");
        let element = document.getElementById("progressbar_state_health");   
        let identity = setInterval(scene, 10);

        function scene() {
            if (health_state >= health_max) {
                clearInterval(identity);
            } else {
                health_state++; 
                element.style.width = getPercentage(health_state, health_max) + '%'; 
                progressbar_number.innerHTML = health_state;
            }
        }  
    },
    
    // TODO: Find better way or better readable way for the recovery functions
    recover_mana : function() {
        let progressbar_number = document.getElementById("progressbar_state_mana_number");
        let element = document.getElementById("progressbar_state_mana");   
        let identity = setInterval(scene, 10);

        function scene() {
            if (mana_state >= mana_max) {
                clearInterval(identity);
            } else {
                mana_state++; 
                element.style.width = getPercentage(mana_state, mana_max) + '%'; 
                progressbar_number.innerHTML = mana_state;
            }
        }  
    },

    // TODO: Find better way or better readable way for the recovery functions
    recover_stamina : function() {
        let progressbar_number = document.getElementById("progressbar_state_stamina_number");
        let element = document.getElementById("progressbar_state_stamina");   
        let identity = setInterval(scene, 10);

        function scene() {
            if (stamina_state >= stamina_max) {
                clearInterval(identity);
            } else {
                stamina_state++; 
                element.style.width = getPercentage(stamina_state, stamina_max) + '%'; 
                progressbar_number.innerHTML = stamina_state;
            }
        }  
    },
};