let diary = {
  
  addEntry: function(entryText) {
      let diaryElement = document.getElementById("diary_entries_area_text");
      diaryElement.innerHTML = " - " + entryText + '<br><br>' + diaryElement.innerHTML;
  },  

  addQuest: function(questName) {
      var questlog = document.getElementById("diary_quest_area");
      var newQuest = document.createElement('div');

      newQuest.id = questName;
      newQuest.className = 'questDIV';
      newQuest.innerHTML = 'Lady in Distress:<br>' + 
                    ' kill the slimes in the Dungeon: Flower Bed<br>' +
                    'Reward: ' + 
                    config.quest_lady_in_distress_reward_exp + 
                    ' EP + Flower x10'; 

      questlog.appendChild(newQuest);
  },

};

