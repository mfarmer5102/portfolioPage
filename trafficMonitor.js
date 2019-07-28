///////////// DATABASE SETUP//////////////////////////////

var firebaseConfig = {
    apiKey: "AIzaSyDK03i09Rpa_gOwQxru1jy3WSoRAhhFm7c",
    authDomain: "portfoliotrafficmonitor.firebaseapp.com",
    databaseURL: "https://portfoliotrafficmonitor.firebaseio.com",
    projectId: "portfoliotrafficmonitor",
    storageBucket: "",
    messagingSenderId: "621788113972",
    appId: "1:621788113972:web:ddaecee27a6f4b29"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

///////////// VARIABLE INITIALIZATION //////////////////////////////

let currentEntriesCount = 0;

///////////// INITIAL AND CONTINUOUS DB SYNCING //////////////////////////////

database.ref().on("value", function (snapshot) {
    console.log(snapshot.val());
    if (snapshot.val() === null || snapshot.val().cumulativeClicks === undefined ) {
        currentEntriesCount = 0;
    } else {
        currentEntriesCount = snapshot.val().cumulativeClicks
    }
    console.log(currentEntriesCount)
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

///////////// CLICK TRACKING//////////////////////////////

$(document).on("click", "#entryPointButton", function () {
    let url = `entries/${currentEntriesCount + 1}/timeStamp`
    database.ref('/').update({
        cumulativeClicks: currentEntriesCount + 1,
        [url]: firebase.database.ServerValue.TIMESTAMP
    });
});

