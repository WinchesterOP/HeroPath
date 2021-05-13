tippy(
    '#reinforceBodyButton', {
        allowHTML: true,
        content: 'Cost:' +
            '<UL>' +
            '<LI>' + jobs.reinforceBody_mana_cost + ' Mana' +
            '</UL>' +
            'Effect:' +
            '<UL>' +
            '<LI>HealthMax +' + jobs.reinforceBody_health_gain +
            '<LI>StaminaMax +' + jobs.reinforceBody_stamina_gain +
            '</UL>',
    },
);

tippy(
    "#farmworkingButton", {
        allowHTML: true,
        content: 'Cost:' +
            '<UL>' +
            '<LI>' + jobs.farmworking_stamina_cost + ' Stamina' +
            '</UL>' +
            'Effect:' +
            '<UL>' +
            '<LI>Gold +' + jobs.farmworking_gold_gain +
            '<LI>Exp +' + jobs.farmworking_exp_gain +
            '</UL>',
    },
);

tippy(
    "#attributes_strength", {
        allowHTML: true,
        content: 'Strength:' +
            '<UL>' +
            '<LI>' + ' Increases Attack Power' +
            '</UL>',
    },
);

tippy(
    "#attributes_constitution", {
        allowHTML: true,
        content: 'Constitution:' +
            '<UL>' +
            '<LI>' + ' Increases Defense' +
            '</UL>',
    },
);

tippy(
    "#attributes_dexterity", {
        allowHTML: true,
        content: 'Dexterity:' +
            '<UL>' +
            '<LI>' + ' Increases Evasion' +
            '</UL>',
    },
);

tippy(
    "#attributes_essence", {
        allowHTML: true,
        content: 'Essence:' +
            '<UL>' +
            '<LI>' + ' Increases Magic Attack' +
            '</UL>',
    },
);

tippy(
    "#attributes_luck", {
        allowHTML: true,
        content: 'Luck:' +
            '<UL>' +
            '<LI>' + ' Increases Critical Chance' +
            '</UL>',
    },
);

tippy(
    "#restButton", {
        allowHTML: true,
        content: 'Restore some Health'
    },
);

tippy(
    "#meditateButton", {
        allowHTML: true,
        content: 'Restore some Mana'
    },
);

tippy(
    "#recoverButton", {
        allowHTML: true,
        content: 'Restore some Stamina'
    },
);

tippy(
    "#talkToFatherButton", {
        allowHTML: true,
        content: 'It is time to have some talk with your Father'
    },
);

tippy(
    "#progressbar_stamina", {
        allowHTML: true,
        content: 'Regeneration: ' + hero.staminaPerSecond + ' per second',
    },
);