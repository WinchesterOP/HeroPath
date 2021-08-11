class Savegame {
    constructor() {

    }

    save(item) {
        switch (item) {
            case 'heroSave': 
                localStorage.setItem(item, JSON.stringify(hero));
                logging("INFO", "Hero has been saved")
                break;
            case 'storySave':
                localStorage.setItem(item, JSON.stringify(story));
                logging("INFO", "Story has been saved")
                break;
            default:
                logging("ERROR", "DEFAULT-Savegame");
                break;
        } 
    }

    load(item) {
        if (localStorage.getItem(item) === null){
            logging("INFO", "there is no Savedata")
        } else if (item == 'heroSave') {
            hero.loadHero(JSON.parse(localStorage.getItem(item)));
        } else if (item == 'storySave') {
            story.loadStory(JSON.parse(localStorage.getItem(item)));
        }
    }

    clear(item) {
        localStorage.removeItem(item);
    }

    saveAll() {
        this.save('heroSave');
        this.save('storySave');
    }

    loadAll() {
        this.load('heroSave');
        this.load('storySave');
    }

    clearAll() {
        this.clear('heroSave');
        this.clear('storySave');
    } 


}

