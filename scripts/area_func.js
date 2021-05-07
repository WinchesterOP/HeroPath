let area_func = {

    area_array: [],
    diary_area_array: [],
    menuButtonAreaArray: [],

    getAllSwitchAreas: function() {
        area_func.area_array = document.getElementsByClassName("switch_area");
        area_func.diary_area_array = document.getElementsByClassName("switch_area_diary");
        area_func.menuButtonAreaArray = document.getElementsByClassName("menuButtonArea");
    },

    appearGold: function() {
        let temp = document.getElementById("money");
        temp.style.display = "inline-block";
    },

    //TODO: appear functions can be shorted to one function
    appearStaminaProgressbar: function() {
        let temp = document.getElementById("progressbar_stamina");
        temp.style.display = "block";
    },

    appearHealthProgressbar: function() {
        let temp = document.getElementById("progressbar_health");
        temp.style.display = "block";
    },

    appearManaProgressbar: function() {
        let temp = document.getElementById("progressbar_mana");
        temp.style.display = "block";
    },

    appearExpDisplay: function() {
        let temp = document.getElementById("exp_area");
        temp.style.display = "inline-block";
    },

    appearEntryDisplay: function() {
        let temp = document.getElementById("logging_area");
        temp.style.display = "block";
    },

    disableCharacterSheet: function() {
        let temp = document.getElementById("menu_area");
        temp.style.display = "none";
    },

    enableCharacterSheet: function() {
        let temp = document.getElementById("menu_area");
        temp.style.display = "block";
    },

    switchToLittleTown: function() {
        for (area_entry of area_func.area_array) {
            if (area_entry.id == "littleTown_area") {
                area_entry.style.display = "block";
            } else {
                area_entry.style.display = "none";
            }
        }
    },

    switchToHome: function() {
        for (area_entry of area_func.area_array) {
            if (area_entry.id == "home_area") {
                area_entry.style.display = "block";
            } else {
                area_entry.style.display = "none";
            }
        }
    },

    switchToEntries: function() {
        for (area_entry of area_func.diary_area_array) {
            if (area_entry.id == "diary_entries_area") {
                area_entry.style.display = "block";
            } else {
                area_entry.style.display = "none";
            }
        }
    },

    switchToQuest: function() {
        for (area_entry of area_func.diary_area_array) {
            if (area_entry.id == "diary_quest_area") {
                area_entry.style.display = "block";
            } else {
                area_entry.style.display = "none";
            }
        }
    },

    switchMenuToWorld: function() {
        for (area_entry of area_func.menuButtonAreaArray) {
            if (area_entry.id == "world_area") {
                area_entry.style.display = "block";
            } else {
                area_entry.style.display = "none";
            }
        }
    },

    switchMenuToAttributes: function() {
        for (area_entry of area_func.menuButtonAreaArray) {
            if (area_entry.id == "attributes_area") {
                area_entry.style.display = "block";
            } else {
                area_entry.style.display = "none";
            }
        }
    },

    switchMenuToBattle: function() {
        for (area_entry of area_func.menuButtonAreaArray) {
            if (area_entry.id == "battle_area") {
                area_entry.style.display = "block";
            } else {
                area_entry.style.display = "none";
            }
        }
    },

    switchMenuToDiary: function() {
        for (area_entry of area_func.menuButtonAreaArray) {
            if (area_entry.id == "diary_area") {
                area_entry.style.display = "block";
            } else {
                area_entry.style.display = "none";
            }
        }
    },



};