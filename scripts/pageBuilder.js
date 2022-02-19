let pageBuilder = {
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

   creativeDIV: function (ressource) {
      let ressourceColumn = document.getElementById("ressourceColumn");
      let div = document.createElement("div");
      let span1 = document.createElement("span");
      let span2 = document.createElement("span");

      div.id = ressource.id;
      span1.className = "ressourceName";
      span1.innerHTML = ressource.name;
      span2.className = "ressourceValue";
      span2.innerHTML = ressource.value;

      div.appendChild(span1);
      div.appendChild(span2);
      ressourceColumn.appendChild(div);
   },

   buildRessourceColumn: function () {
      // get every key from pageBuilder.ressources to use every subobject
      Object.keys(pageBuilder.ressources).forEach(function (key) {
         let temp = pageBuilder.ressources[key];
         pageBuilder.creativeDIV(temp);
      });
   },
};
