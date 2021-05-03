let story_progress = {
    level_father_talk: 0,
    level_littleTown_Farmer: 0,
    level_littleTown_Lady: 0,

    checkLevelProgress: function(level) {
        switch (level) {
            case 1: // First level up gives new buttons und bars
                area_func.appearHealthProgressbar();
                area_func.appearManaProgressbar();
                area_func.appearExpDisplay();
                button_func.appearButton("restButton");
                button_func.appearButton("meditateButton");
                button_func.appearButton("recoverButton");
                button_func.appearButton("talkToFatherButton");
                break;
            case 2:
                button_func.appearMenuButton("attributesButton");
                logging_area.logSomeText("<br>[UNLOCKED: Attributes]");
                
                break;
            case 3: // Level 3 will trigger first quest event
                button_func.appearButton("talkToLadyButton");
                break;
            case 4:
                break;
            default:
                logging("INFO", "No more level progress-steps");
                break;
        } 
    },

    talkToFather: function() {
        switch (story_progress.level_father_talk) {
            case 0:
                logging_area.logSomeText("Father: My son, I see that you are getting older and stronger. Maybe now is the time for you to see more of the world and experience your own story.<br>[UNLOCKED: Little Town]<br>[UNLOCKED: Diary]");
                diary.addEntry("Father told me that I was now strong enough to see the world with my own eyes. Maybe I should visit the farm town up north. I have never been there.");
                button_func.vanishButton("talkToFatherButton");
                button_func.appearButton("talkToFarmerButton");
                button_func.appearButton("littleTownButton");
                button_func.appearButton("diaryButton");
                button_func.appearButton("entriesButton");
                area_func.appearEntryDisplay();
                story_progress.level_father_talk++;
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            default:
                logging("ERROR", "talkToFather has no more Options");
                break;
        }
          
    },  

    talkToLittleTownFarmer: function() {
        switch (story_progress.level_littleTown_Farmer) {
            case 0:
                logging_area.logSomeText("Farmer: Hello boy, you look like you have some strength left. I'd need some help bringing in the harvest. You could earn a coin or two.<br>[UNLOCKED: Gold]<br>[UNLOCKED: Farmworking]");
                diary.addEntry("A friendly farmer said I could work for him. That sounds like an easy way to fill my pockets");
                button_func.vanishButton("talkToFarmerButton");
                button_func.appearButton("farmworkingButton");
                area_func.appearGold();
                story_progress.level_littleTown_Farmer++;
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            default:
                logging("ERROR", "talkToFarmer has no more Options");
                break;
        }
          
    },

    talkToLittleTownLady: function() {
        switch (story_progress.level_littleTown_Lady) {
            case 0:
                logging_area.logSomeText("Lady:Could you please help me with my flower bed? Some slimes showed up last night and are now slowly eating all my plants. Could you please scare them away?<br>[UNLOCKED: Dungeon: Flower Bed]<br>[NEW QUEST!!!]");
                diary.addEntry("A lady in the small town is in distress. Her beloved flowers are threatened by slime. I must put an end to this misery.");
                diary.addQuest("Lady in Distress");
                button_func.vanishButton("talkToLadyButton");
                button_func.appearButton("questButton");
                button_func.appearButton("dungeonFlowerBedButton");
                story_progress.level_littleTown_Lady++;
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            default:
                logging("ERROR", "talkToLady has no more Options");
                break;
        }
          
    },
};