let battle = {
    partyMemberCounter: 0,
    enemyCounter: 0,
    partyArray: [],
    enemyArray: [],
    heroRound: true,
    enemyAlive: true,
    fightButtons: false,
    reward: { gold: 0, exp: 0 },

    createBattleArea: function (location) {
        let enemies = this.getEnemies(location);

        area_func.disableCharacterSheet();
        area_func.switchMenuToBattle();
        game.setBattleMode(true);
        battle.createBattleAreaPartyMemberField();

        for (i = 0; i < enemies.length; i++) {
            battle.createBattleAreaEnemyField(enemies[i]);
        }

        if (!battle.fightButtons) {
            battle.createFightButtons();
        }
    },

    getEnemies: function (location) {
        let enemies = configEnemy.getEnemiesOffLocation(location);
        let returnEnemies = [];
        let enemyTypes = enemies.length;
        let enemyCount = Math.floor(Math.random() * config.enemyCount) + 1;

        if (enemyTypes > 1) {
            for (i = 0; i + 1 <= enemyCount; i++) {
                returnEnemies[i] =
                    enemies[Math.floor(Math.random() * enemyTypes)];
            }
        } else {
            returnEnemies[0] = enemies[0];
        }

        return returnEnemies;
    },

    clearBattleArea: function () {
        this.setHeroBars();
        this.deleteAllDivs();
        battle.partyMemberCounter = 0;
        battle.enemyCounter = 0;
        battle.partyArray = [];
        battle.enemyArray = [];
        area_func.switchMenuToWorld();
        area_func.enableCharacterSheet();
        game.setBattleMode(false);
        logging_area.clearBattleText();
        this.reward = { gold: 0, exp: 0 };
    },

    deleteAllDivs: function () {
        let divToDelete = document.getElementById("partyDIV1");
        divToDelete.remove();

        for (i = 0; i < 4; i++) {
            divToDelete = document.getElementById("enemyDIV" + i);

            if (divToDelete) {
                divToDelete.remove();
            }
        }
    },

    setHeroBars: function () {
        let stats = hero.getStats();
        let remainHealth = this.partyArray[0].health;
        let remainMana = this.partyArray[0].mana;
        let remainStamina = this.partyArray[0].stamina;
        hero.reduceHealth(stats.health - remainHealth);
        hero.reduceMana(stats.mana - remainMana);
        hero.reduceStamina(stats.stamina - remainStamina);
    },

    createFightButtons: function () {
        let battleButtons = document.getElementById("battle_area_buttons");
        let attackButton = document.createElement("button");
        let magicButton = document.createElement("button");
        let skillButton = document.createElement("button");
        let itemButton = document.createElement("button");

        attackButton.className = "battleButton";
        magicButton.className = "battleButton";
        skillButton.className = "battleButton";
        itemButton.className = "battleButton";

        attackButton.innerHTML = "Attack";
        magicButton.innerHTML = "Magic";
        skillButton.innerHTML = "Skill";
        itemButton.innerHTML = "Item";

        attackButton.onclick = function () {
            button.clickedOnAttackButton();
        };
        magicButton.onclick = function () {
            button.clickedOnAttackButton();
        };
        skillButton.onclick = function () {
            button.clickedOnAttackButton();
        };
        itemButton.onclick = function () {
            button.clickedOnAttackButton();
        };

        battleButtons.appendChild(attackButton);
        battleButtons.appendChild(magicButton);
        battleButtons.appendChild(skillButton);
        battleButtons.appendChild(itemButton);

        battle.fightButtons = true;
    },

    fightEnemyRound: function () {
        for (index of battle.enemyArray.keys()) {
            if (game.checkBattleMode()) {
                battle.fightEnemyAttack(index);
            }
        }
    },

    //TODO: right now only the first one will be attacked
    fightAttack: function () {
        let damage = battle.calculateDamage(
            battle.partyArray[0].attack,
            battle.enemyArray[0].defense
        );
        logging_area.logSomeBattleText(
            "You have dealt " + damage + " Damage to " + this.enemyArray[0].name
        );
        battle.reduceHealth("Enemy", battle.enemyArray[0].enemy_id, damage);

        battle.fightEnemyRound();
    },

    fightEnemyAttack: function (index) {
        let damage = battle.calculateDamage(
            battle.enemyArray[index].attack,
            battle.partyArray[0].defense
        );
        logging_area.logSomeBattleText(
            this.enemyArray[0].name +
                " attacked you with  " +
                damage +
                " Damage"
        );
        battle.reduceHealth("Party", battle.partyArray[0].hero_id, damage);
    },

    reduceHealth: function (memberType, id, damage) {
        let progressbarID = "progressbarHealth" + memberType + id;
        let progressbarNumber = "progressbarStateHealth" + memberType + id;

        switch (memberType) {
            case "Enemy":
                let enemyHealthMax = battle.enemyArray[0].healthMax;
                battle.enemyArray[0].health -= damage;

                if (battle.enemyArray[0].health <= 0) {
                    this.reward.gold += this.enemyArray[0].gold;
                    this.reward.exp += this.enemyArray[0].exp;
                    logging_area.logSomeBattleText(
                        this.enemyArray[0].name + " had died"
                    );
                    battle.deleteEnemy(battle.enemyArray[0].enemy_id);
                } else {
                    progressbar.refreshProgressbar(
                        progressbarID,
                        progressbarNumber,
                        battle.enemyArray[0].health,
                        enemyHealthMax
                    );
                }
                break;
            case "Party":
                let heroHealthMax = battle.partyArray[0].healthMax;
                battle.partyArray[0].health -= damage;

                if (battle.partyArray[0].health <= 0) {
                    battle.clearBattleArea();
                    logging_area.logSomeText("You have lost the fight");
                } else {
                    progressbar.refreshProgressbar(
                        progressbarID,
                        progressbarNumber,
                        battle.partyArray[0].health,
                        heroHealthMax
                    );
                }
                break;
        }
    },

    deleteEnemy: function (enemy_id) {
        let enemyToDelete = document.getElementById("enemyDIV" + enemy_id);
        enemyToDelete.remove();
        battle.enemyCounter--;
        battle.enemyArray.shift();

        battle.checkIfLastEnemy();
    },

    /**
     * Damage formula
     * percentage from config * 2     example: 20 * 2 = 40
     * Random of 40                   example: 13
     * minus of 20 to get minus       example: -7
     * so we have to take -7 percent of the damage
     */
    calculateDamage: function (attack, defense) {
        let damage = attack - defense;

        let percentage =
            Math.floor(Math.random() * (config.damagePercentage * 2)) +
            1 -
            config.damagePercentage;
        let modifier = 100;

        modifier += percentage;
        damage *= modifier / 100;

        if (damage >= 0) {
            return ~~damage;
        } else {
            return 1;
        }
    },

    checkIfLastEnemy: function () {
        if (battle.enemyArray.length == 0) {
            this.getReward();
            this.clearBattleArea();
            logging_area.logSomeText("You have won the fight");
        }
    },

    getReward: function () {
        hero.addtoCurrentGold(this.reward.gold);
        hero.gainEXP(this.reward.exp);
        logging_area.logSomeText(
            "In this fight you got " +
                this.reward.gold +
                " Gold and " +
                this.reward.exp +
                " Exp"
        );
    },

    createBattleAreaPartyMemberField: function () {
        battle.partyMemberCounter++;

        let battleArea = document.getElementById("battle_area_party");
        let partyMemberField = document.createElement("div");
        partyMemberField.id = "partyDIV" + battle.partyMemberCounter;
        partyMemberField.className = "partyDIV";

        battleArea.appendChild(partyMemberField);

        battle.createMember(partyMemberField, "Party");

        let heroStats = hero.getStats();
        let heroMember = {
            hero_id: battle.partyMemberCounter,
            name: heroStats.name,
            health: heroStats.health,
            healthMax: heroStats.healthMax,
            mana: heroStats.mana,
            manaMax: heroStats.manaMax,
            stamina: heroStats.stamina,
            staminaMax: heroStats.staminaMax,
            attack: heroStats.attack,
            magic_attack: heroStats.magic_attack,
            defense: heroStats.defense,
            evasion: heroStats.evasion,
            critical_chance: heroStats.critical_chance,
        };
        battle.partyArray.push(heroMember);

        battle.fillMember(
            heroMember.name,
            heroMember.health,
            heroMember.mana,
            heroMember.stamina,
            heroMember.healthMax,
            heroMember.manaMax,
            heroMember.staminaMax,
            heroMember.hero_id,
            "Party"
        );
    },

    createBattleAreaEnemyField: function (enemyName) {
        battle.enemyCounter++;
        let enemyStats = configEnemy.getEnemy(enemyName);
        let enemy = {
            enemy_id: battle.enemyCounter,
            name: enemyStats.name,
            health: enemyStats.health,
            healthMax: enemyStats.health,
            mana: enemyStats.mana,
            manaMax: enemyStats.mana,
            stamina: enemyStats.stamina,
            staminaMax: enemyStats.stamina,
            attack: enemyStats.attack,
            magic_attack: enemyStats.magic_attack,
            defense: enemyStats.defense,
            evasion: enemyStats.evasion,
            critical_chance: enemyStats.critical_chance,
            exp: enemyStats.exp,
            gold: enemyStats.gold,
        };

        let battleArea = document.getElementById("battle_area_enemy");
        let enemyField = document.createElement("div");

        enemyField.id = "enemyDIV" + battle.enemyCounter;
        enemyField.className = "enemyDIV";

        battle.enemyArray.push(enemy);

        battle.createMember(enemyField, "Enemy");

        battleArea.appendChild(enemyField);

        battle.fillMember(
            enemy.name,
            enemy.health,
            enemy.mana,
            enemy.stamina,
            enemy.healthMax,
            enemy.manaMax,
            enemy.staminaMax,
            enemy.enemy_id,
            "Enemy"
        );
    },

    fillMember: function (
        name,
        health,
        mana,
        stamina,
        healthMax,
        manaMax,
        staminaMax,
        id,
        type
    ) {
        let element;
        let memberName = "MemberName" + type + id;
        let healthMaxID = "progressbarMaxHealth" + type + id;
        let healthStateID = "progressbarStateHealth" + type + id;
        let healthBar = "progressbarHealth" + type + id;
        let manaMaxID = "progressbarMaxMana" + type + id;
        let manaStateID = "progressbarStateMana" + type + id;
        let manaBar = "progressbarMana" + type + id;
        let staminaMaxID = "progressbarMaxStamina" + type + id;
        let staminaStateID = "progressbarStateStamina" + type + id;
        let staminaBar = "progressbarStamina" + type + id;

        element = document.getElementById(memberName);
        element.innerHTML = name;

        element = document.getElementById(healthMaxID);
        element.innerHTML = " / " + healthMax;

        element = document.getElementById(healthStateID);
        element.innerHTML = health;

        element = document.getElementById(manaMaxID);
        element.innerHTML = " / " + manaMax;

        element = document.getElementById(manaStateID);
        element.innerHTML = mana;

        element = document.getElementById(staminaMaxID);
        element.innerHTML = " / " + staminaMax;

        element = document.getElementById(staminaStateID);
        element.innerHTML = stamina;

        progressbar.refreshProgressbar(
            healthBar,
            healthStateID,
            health,
            healthMax
        );
        progressbar.refreshProgressbar(manaBar, manaStateID, mana, manaMax);
        progressbar.refreshProgressbar(
            staminaBar,
            staminaStateID,
            stamina,
            staminaMax
        );
    },

    createMember: function (MemberField, memberType) {
        let name = document.createElement("div");
        let healthBar = document.createElement("div");
        let manaBar = document.createElement("div");
        let staminaBar = document.createElement("div");

        switch (memberType) {
            case "Enemy":
                name.id = "MemberName" + memberType + battle.enemyCounter;
                break;
            case "Party":
                name.id = "MemberName" + memberType + battle.partyMemberCounter;
                break;
        }

        battle.createProgressbar(healthBar, "Health", memberType);
        battle.createProgressbar(manaBar, "Mana", memberType);
        battle.createProgressbar(staminaBar, "Stamina", memberType);

        MemberField.appendChild(name);
        MemberField.appendChild(healthBar);
        MemberField.appendChild(manaBar);
        MemberField.appendChild(staminaBar);
    },

    //TODO: way to long and many doubles
    createProgressbar: function (memberProgressbar, type, memberType) {
        let progressbar = document.createElement("div");
        let progressbarText = document.createElement("div");
        let progressbarMax = document.createElement("div");
        let progressbarState = document.createElement("div");

        switch (memberType) {
            case "Enemy":
                progressbar.id =
                    "progressbar" + type + memberType + battle.enemyCounter;
                progressbar.className = "progressbar";
                progressbarText.id =
                    "progressbarText" + type + memberType + battle.enemyCounter;
                progressbarText.className = "progressbarText";
                progressbarText.innerHTML = type + ":";
                progressbarMax.id =
                    "progressbarMax" + type + memberType + battle.enemyCounter;
                progressbarMax.className = "progressbarMax";
                progressbarState.id =
                    "progressbarState" +
                    type +
                    memberType +
                    battle.enemyCounter;
                progressbarState.className = "progressbarState";
                break;
            case "Party":
                progressbar.id =
                    "progressbar" +
                    type +
                    memberType +
                    battle.partyMemberCounter;
                progressbar.className = "progressbar";
                progressbarText.id =
                    "progressbarText" +
                    type +
                    memberType +
                    battle.partyMemberCounter;
                progressbarText.className = "progressbarText";
                progressbarText.innerHTML = type + ":";
                progressbarMax.id =
                    "progressbarMax" +
                    type +
                    memberType +
                    battle.partyMemberCounter;
                progressbarMax.className = "progressbarMax";
                progressbarState.id =
                    "progressbarState" +
                    type +
                    memberType +
                    battle.partyMemberCounter;
                progressbarState.className = "progressbarState";
                break;
        }

        memberProgressbar.appendChild(progressbar);
        memberProgressbar.appendChild(progressbarText);
        memberProgressbar.appendChild(progressbarMax);
        memberProgressbar.appendChild(progressbarState);
    },
};
