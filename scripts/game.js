let game = {

    battleMode: false,

    setBattleMode: function(boolean) {
        game.battleMode = boolean;
    },  

    checkBattleMode: function() {
        return game.battleMode;
    },
};