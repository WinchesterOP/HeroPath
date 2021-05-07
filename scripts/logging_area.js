let logging_area = {

    logSomeText: function(textToAdd) {
        let loggingText = document.getElementById("logging_area_text");
        let newLoggingText = logging_area.checkIfEntryIsFull(loggingText.innerHTML);
        loggingText.innerHTML = getTime() + ": " + textToAdd + '<br>' + newLoggingText;
    },

    logSomeBattleText: function(textToAdd) {
        let loggingText = document.getElementById("logging_area_battle_text");
        let newLoggingText = logging_area.checkIfEntryIsFull(loggingText.innerHTML);
        loggingText.innerHTML = getTime() + ": " + textToAdd + '<br>' + newLoggingText;
    },

    clearBattleText: function() {
        let loggingText = document.getElementById("logging_area_battle_text");
        loggingText.innerHTML = '';
    },

    checkIfEntryIsFull: function(loggingText) {
        if ((loggingText.match(/<br>/g)||[]).length >= 6 ){
            return logging_area.trimEntry(loggingText);
        } else {
            return loggingText;
        }
    },

    trimEntry: function(loggingText) {
        let string_array = loggingText.split('<br>');
        string_array.pop();
        return string_array.join('<br>');
    },

};