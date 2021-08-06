class Savegame {
    constructor() {

    }

    save() {
        localStorage.setItem('heroSave', JSON.stringify(hero));

        let check = localStorage.getItem('heroSave');
        check = JSON.parse(check);
        console.log(check.level);
        console.log(check.exp);
    }

    load() {
        let saveItem = localStorage.getItem('heroSave');
        hero = saveItem;
    }

}

