// The IDs for the progressbars in the character sheet
const prog = {
    healthBar:      'progressbarHealthParty0',
    manaBar:        'progressbarManaParty0',
    staminaBar:     'progressbarStaminaParty0',

    healthMax:     'progressbarMaxHealthParty0',
    manaMax:       'progressbarMaxManaParty0',
    staminaMax:    'progressbarMaxStaminaParty0',

    healthNum:      'progressbarStateHealthParty0',
    manaNum:        'progressbarStateManaParty0',
    staminaNum:     'progressbarStateStaminaParty0',
};

let progressbar = {

    setProgessbarMax: function(progressbarMax, max_value) {
        let element = document.getElementById(progressbarMax);
        element.innerHTML = '/ ' + max_value;
        logging("INFO", progressbarMax + ' has been set to ' + max_value);
    },

    setAllProgessbarMaxes: function() {
        progressbar.setProgessbarMax(prog.healthMax, hero.getStats().healthMax);
        progressbar.setProgessbarMax(prog.manaMax, hero.getStats().manaMax);
        progressbar.setProgessbarMax(prog.staminaMax, hero.getStats().staminaMax);
    },

    refreshProgressbar: function(progressbarID, progressbarNumber, value, valueMax) {
        let elementProgressbar = document.getElementById(progressbarID);
        let elementProgressbarNumber = document.getElementById(progressbarNumber);

        elementProgressbar.style.width = getPercentage(value, valueMax) + '%';
        elementProgressbarNumber.innerHTML = value;
    },
};