let pageBuilder = {
   creativeDIV: function (name, value) {
      let ressourceColumn = document.getElementById("ressourceColumn");
      let div = document.createElement("div");
      let span1 = document.createElement("span");
      let span2 = document.createElement("span");

      div.id = name;
      span1.className = "ressourceName";
      span2.className = "ressourceValue";

      div.appendChild(span1);
      div.appendChild(span2);
      ressourceColumn.appendChild(div);
   },

   buildRessourceColumn: function () {
      let ressources = {
         health: {
            name: "heroHealth",
            value: 10,
         },
         mana: {
            name: "heroMana",
            value: 10,
         },
         stamina: {
            name: "heroStamina",
            value: 10,
         },
         exp: {
            name: "exp",
            value: 0,
         },
         expNeeded: {
            name: "expNeeded",
            value: 10,
         },
         money: {
            name: "gold",
            value: 0,
         },
      };

      for (element in ressources) {
         pageBuilder.creativeDIV(element.name, element.value);
      }
   },
};
