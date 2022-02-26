let pageBuilder = {
   createRessource: function (ressource) {
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

   createButton: function (buttonData) {
      let parentDIV = document.getElementById(buttonData.parent);
      let but = document.createElement("button");

      but.className = buttonData.class;
      but.innerHTML = buttonData.text;
      but.onclick = function () {
         button.openLine(buttonData.onclickParameter1, buttonData.onclickParameter2);
      };

      parentDIV.appendChild(but);
   },

   // TODO: combine buildRessourceColumn and this function???
   buildButtons: function () {
      Object.keys(testSavegame.buttons).forEach(function (button) {
         let temp = testSavegame.buttons[button];
         pageBuilder.createButton(temp);
      });
   },

   buildRessourceColumn: function () {
      // get every key from savegame.ressources to use every subobject
      // TODO: Option for Testing Savegame or loading localStorage
      Object.keys(testSavegame.ressources).forEach(function (key) {
         pageBuilder.createRessource(testSavegame.ressources[key]);
      });
   },
};
