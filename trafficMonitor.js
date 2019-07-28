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

let accrEntryPointButton = 0;

///////////// INITIAL AND CONTINUOUS DB SYNCING //////////////////////////////

database.ref().on("value", function (snapshot) {
    console.log(snapshot.val());
    if (snapshot.val() === null ) {
        accrEntryPointButton = 0;
    } else {
        accrEntryPointButton = snapshot.val().logs.entryPointButton.total
    }
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

///////////// CLICK TRACKING//////////////////////////////

$(document).on("click", "#entryPointButton", function () {
    let accumulator = `logs/entryPointButton/total`
    let clickRecord = `logs/entryPointButton/${accrEntryPointButton + 1}/timeStamp`
    database.ref('/').update({
        [accumulator]: accrEntryPointButton + 1,
        [clickRecord]: firebase.database.ServerValue.TIMESTAMP
    });
});

