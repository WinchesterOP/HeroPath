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

   buildButton: function (name, functzioncname) {},

   buildRessourceColumn: function () {
      //let jsontemp = importJSON();
      //console.log(jsontemp);

      // get every key from pageBuilder.ressources to use every subobject
      Object.keys(testSavegame.ressources).forEach(function (key) {
         let temp = testSavegame.ressources[key];
         pageBuilder.createRessource(temp);
      });
   },

   buildButton: function (name, functzioncname) {},
};
