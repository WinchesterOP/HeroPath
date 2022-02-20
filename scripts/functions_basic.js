function getTimestamp() {
   let date = new Date();
   let day = date.getDay();
   let month = date.getMonth();
   let year = date.getFullYear();

   if (day < 10) {
      day = "0" + day;
   }
   if (month < 10) {
      month = "0" + month;
   }

   let formattedTime = day + "." + month + "." + year + " " + date.toLocaleTimeString();

   return formattedTime;
}

function getTime() {
   let date = new Date();
   return date.toLocaleTimeString();
}

function logging(loglevel, text) {
   console.log(getTimestamp() + " - " + loglevel + ": " + text);
}

function getPercentage(partialValue, totalValue) {
   return (100 * partialValue) / totalValue;
}

function cutToFirstThreeLetters(word) {
   return word.substring(0, 3);
}
// TODO: working on JSON import
function importJSON() {
   let devJSONRequired = require(".json/dev.json");
   console.log("devJSONRequired", devJSONRequired);
   console.log("json", devJSON);
   /* let jsonstring = "./json/dev.json";
   let json;
   let json = require([jsonstring]); //(with path)
 */
   /* fetch("./json/dev.json")
      .then((response) => {
         return JSON.parse(response);
      })
      .then((jsondata) => console.log(jsondata));
   return json; */
}

// was added to see how testing works
function multiplicate(x, n) {
   return x * n;
}
