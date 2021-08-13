let configQuest = {

    ladyInDistress: {
        name: 'Lady in Distress',
        description: 'kill the slimes in the Dungeon: Flower Bed',
        reward_exp:     100,
        reward_item:    'Flower',
        reward_gold:    10,
    },

    getQuest: function(quest) {
        return configQuest[quest];

    },
};