/* Constanten Nutzen wenn es nicht geaendert werden soll 
 * und diese am besten gross schreiben damit man sie besser erkennt
 */

let result = false;

/*
do {
    let heroName = prompt('Name your Hero?', "WinchesterOP");
    let question = `Your Hero will be named: ${heroName}. Are you Sure?`;

    result = confirm(question);

    if (result) {
        hero.setHeroName(heroName)
        logging("INFO", "Hero name was setted as: \"" + hero.name + "\"");
    }
} while (!result);

*/


 // Get the attributes from hero and sets the progressbars on the character-sheet

progressbar.setAllProgessbarMaxes();
progressbar.refreshProgressbar(prog.healthBar, prog.healthNum, hero.health, hero.healthMax);
progressbar.refreshProgressbar(prog.manaBar, prog.manaNum, hero.mana, hero.manaMax);
progressbar.refreshProgressbar(prog.staminaBar, prog.staminaNum, hero.stamina, hero.staminaMax);
hero.refreshGoldDisplay();
area_func.getAllSwitchAreas();


background_timer.startCounting();


   
