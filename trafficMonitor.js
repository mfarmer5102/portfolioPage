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
let accrDivStudyHelper = 0;
let accrDivDashboard = 0;

///////////// INITIAL AND CONTINUOUS DB SYNCING //////////////////////////////

database.ref().on("value", function (snapshot) {
    console.log(snapshot.val());
    if (snapshot.val() === null) {
        accrEntryPointButton = 0;
        accrDivStudyHelper = 0;
        accrDivDashboard = 0;
    } else {
        if (snapshot.val().logs.entryPointButton !== undefined) {
            accrEntryPointButton = snapshot.val().logs.entryPointButton.total
        } else {
            accrEntryPointButton = 0;
        }
        if (snapshot.val().logs.divStudyHelper !== undefined) {
            accrDivStudyHelper = snapshot.val().logs.divStudyHelper.total
        } else {
            accrDivStudyHelper = 0;
        }
        if (snapshot.val().logs.divDashboard !== undefined) {
            accrDivDashboard = snapshot.val().logs.divDashboard.total
        } else {
            accrDivDashboard = 0;
        }
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

$(document).on("click", "#divStudyHelper", function () {
    let accumulator = `logs/divStudyHelper/total`
    let clickRecord = `logs/divStudyHelper/${accrDivStudyHelper + 1}/timeStamp`
    database.ref('/').update({
        [accumulator]: accrDivStudyHelper + 1,
        [clickRecord]: firebase.database.ServerValue.TIMESTAMP
    });
});

$(document).on("click", "#divDashboard", function () {
    let accumulator = `logs/divDashboard/total`
    let clickRecord = `logs/divDashboard/${accrDivDashboard + 1}/timeStamp`
    database.ref('/').update({
        [accumulator]: accrDivDashboard + 1,
        [clickRecord]: firebase.database.ServerValue.TIMESTAMP
    });
});

