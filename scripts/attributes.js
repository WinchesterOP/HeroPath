let attributes = {

    refreshAttributeDisplay: function(attribute, value) {
        let element;

        switch (attribute) {
            case "Strength":
                element = document.getElementById("attributes_strength_points");
                element.innerHTML = value;
                break;
            case "Constitution":
                element = document.getElementById("attributes_constitution_points");
                element.innerHTML = value;
                break;
            case "Dexterity":
                element = document.getElementById("attributes_dexterity_points");
                element.innerHTML = value;
                break;
            case "Essence":
                element = document.getElementById("attributes_essence_points");
                element.innerHTML = value;
                break;
            case "Luck":
                element = document.getElementById("attributes_luck_points");
                element.innerHTML = value;
                break;
            case "Attack":
                element = document.getElementById("attributes_attack_value");
                element.innerHTML = value;
                break;
            case "Magic Attack":
                element = document.getElementById("attributes_magic_attack_value");
                element.innerHTML = value;
                break;
            case "Defense":
                element = document.getElementById("attributes_defense_value");
                element.innerHTML = value;
                break;
            case "Critical Chance":
                element = document.getElementById("attributes_critical_chance_value");
                element.innerHTML = value + '%';
                break;
            case "Evasion":
                element = document.getElementById("attributes_evasion_value");
                element.innerHTML = value + '%';
                break;
        }
        
    },

};


