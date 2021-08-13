class Diary {
    constructor(){
        this.entry = '';
        this.quest = new Array();
    }
    
    loadEntry(save) {
        let diaryElement = document.getElementById("diary_entries_area_text");
        this.entry = save;
        diaryElement.innerHTML = save;
    }

    loadQuest(save) {
        this.quest = save;

        this.quest.forEach(element => this.addQuest(element.name));
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
        this.quest.push(questData);


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