class Diary {
    constructor(quest = []){
        this.entry = '';
        this.quest = quest;
    }
    
    loadEntry(save) {
        let diaryElement = document.getElementById("diary_entries_area_text");
        this.entry = save;
        diaryElement.innerHTML = save;
    }

    addEntry(entryText) {
        let diaryElement = document.getElementById("diary_entries_area_text");
        this.entry = " - " + entryText + '<br><br>' + this.entry;
        diaryElement.innerHTML = this.entry;
    }

    addQuest(questName) {
        
        let questlog = document.getElementById("diary_quest_area");
        let newQuest = document.createElement('div');

        let questData = configQuest.getQuest(questName);


        newQuest.id = questData.name;
        newQuest.className = 'questDIV';
        newQuest.innerHTML =  questData.name 
                            + ':<br>' 
                            + questData.description 
                            + '<br>' 
                            + 'Reward:<br>' 
                            + ' - ' + questData.reward_exp + ' EXP<br>' 
                            + ' - ' + questData.reward_item + '<br>' 
                            + ' - ' + questData.reward_gold + ' Gold<br>'
                            ;

        questlog.appendChild(newQuest);
    }

};