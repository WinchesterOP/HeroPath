let savegame = {};

class Savegame {
   constructor() {}

   static save(item) {
      switch (item) {
         case "hero":
            localStorage.setItem(item, JSON.stringify(hero));
            logging("INFO", "Hero has been saved");
            break;
         case "story":
            localStorage.setItem(item, JSON.stringify(story));
            logging("INFO", "Story has been saved");
            break;
         case "button":
            localStorage.setItem(item, JSON.stringify(button));
            logging("INFO", "Button has been saved");
            break;
         case "entry":
            localStorage.setItem(item, JSON.stringify(diary.entry));
            logging("INFO", "Entries has been saved");
            break;
         case "quest":
            localStorage.setItem(item, JSON.stringify(diary.quest));
            logging("INFO", "Quests has been saved");
            break;
         default:
            logging("ERROR", "DEFAULT-Savegame");
            break;
      }
   }

   static load(item) {
      if (localStorage.getItem(item) === null) {
         logging("INFO", "there is no Savedata");
         return;
      }

      switch (item) {
         case "hero":
            hero.loadHero(JSON.parse(localStorage.getItem(item)));
            logging("INFO", "Hero has been loaded");
            break;
         case "story":
            story.loadStory(JSON.parse(localStorage.getItem(item)));
            logging("INFO", "Story has been loaded");
            break;
         case "button":
            button.loadButton(JSON.parse(localStorage.getItem(item)));
            logging("INFO", "Button has been loaded");
            break;
         case "entry":
            diary.loadEntry(JSON.parse(localStorage.getItem(item)));
            logging("INFO", "Entry has been loaded");
            break;
         case "quest":
            diary.loadQuest(JSON.parse(localStorage.getItem(item)));
            logging("INFO", "Quest has been loaded");
            break;
         default:
            logging("INFO", "there is no Savedata");
            break;
      }
   }

   static clear(item) {
      localStorage.removeItem(item);
   }

   static saveAll() {
      this.save("hero");
      this.save("story");
      this.save("button");
      this.save("entry");
      this.save("quest");
   }

   static loadAll() {
      this.load("hero");
      this.load("story");
      this.load("button");
      this.load("entry");
      this.load("quest");
   }

   static clearAll() {
      this.clear("hero");
      this.clear("story");
      this.clear("button");
      this.clear("entry");
      this.clear("quest");
   }
}
