let testSavegame = {
   ressources: {
      health: {
         id: "heroHealth",
         name: "Health:",
         value: 10,
      },
      mana: {
         id: "heroMana",
         name: "Mana:",
         value: 10,
      },
      stamina: {
         id: "heroStamina",
         name: "Stamina:",
         value: 10,
      },
      exp: {
         id: "exp",
         name: "EXP:",
         value: 0,
      },
      expNeeded: {
         id: "expNeeded",
         name: "Next Lv.:",
         value: 10,
      },
      money: {
         id: "money",
         name: "Gold:",
         value: 0,
      },
   },
   world: {
      home: {
         text: "Home",
         onclickParameter1: "worldContent",
         onclickParameter2: "worldHome",
         class: "mainButton",
         visible: true,
      },
      litteTown: {
         text: "Little Town",
         onclickParameter1: "worldContent",
         onclickParameter2: "worldLittleTown",
         class: "mainButton",
         visible: true,
      },
   },
};
