let configEnemy = {

    rabbit: {   
                name:               'Rabbit', 
                health:             30, 
                mana:               10, 
                stamina:            10, 
                exp:                20,
                gold:               1,
                attack:             3,
                magic_attack:       0,
                defense:            0,
                evasion:            5,
                critical_chance:    5,
                location:           'Dungeon: Flower Bed',
            },
    
    mole: {   
                name:               'Mole', 
                health:             25, 
                mana:               10, 
                stamina:            10, 
                exp:                25,
                gold:               1,
                attack:             8,
                magic_attack:       0,
                defense:            2,
                evasion:            5,
                critical_chance:    5,
                location:           'Dungeon: Flower Bed',
            },
        
    slime: {   
                name:               'Slime', 
                health:             10, 
                mana:               10, 
                stamina:            10, 
                exp:                40,
                gold:               1,
                attack:             12,
                magic_attack:       0,
                defense:            9,
                evasion:            5,
                critical_chance:    5,
                location:           'Dungeon: Flower Bed',
            },

    getEnemy: function(enemyName) {
        return configEnemy[enemyName];

    },

    getEnemiesOffLocation: function(location) {
        let enemyList = [];
        let temp = Object.values(configEnemy);

        for (enemyName in configEnemy) {
            if (configEnemy[enemyName].location == location) {
                enemyList.push(enemyName);
            }
        }
        return enemyList;
    }        
    
};