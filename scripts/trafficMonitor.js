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
let accrApplicationsSideNavLink = 0;
let accrSideNavTriggerButton = 0;
let accrMinorProjectsContainer = 0;

///////////// INITIAL AND CONTINUOUS DB SYNCING //////////////////////////////

database.ref().on("value", function (snapshot) {
    console.log(snapshot.val());
    if (snapshot.val() === null) {
        accrEntryPointButton = 0;
        accrDivStudyHelper = 0;
        accrDivDashboard = 0;
        accrApplicationsSideNavLink = 0;
        accrSideNavTriggerButton = 0;
        accrMinorProjectsContainer = 0;
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
        if (snapshot.val().logs.applicationsSideNavLink !== undefined) {
            accrApplicationsSideNavLink = snapshot.val().logs.applicationsSideNavLink.total
        } else {
            accrApplicationsSideNavLink = 0;
        }
        if (snapshot.val().logs.sideNavTriggerButton !== undefined) {
            accrSideNavTriggerButton = snapshot.val().logs.sideNavTriggerButton.total
        } else {
            accrSideNavTriggerButton = 0;
        }
        if (snapshot.val().logs.minorProjectsContainer !== undefined) {
            accrMinorProjectsContainer = snapshot.val().logs.minorProjectsContainer.total
        } else {
            accrMinorProjectsContainer = 0;
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

$(document).on("click", "#applicationsSideNavLink", function () {
    let accumulator = `logs/applicationsSideNavLink/total`
    let clickRecord = `logs/applicationsSideNavLink/${accrApplicationsSideNavLink + 1}/timeStamp`
    database.ref('/').update({
        [accumulator]: accrApplicationsSideNavLink + 1,
        [clickRecord]: firebase.database.ServerValue.TIMESTAMP
    });
});

$(document).on("click", "#sideNavTriggerButton", function () {
    let accumulator = `logs/sideNavTriggerButton/total`
    let clickRecord = `logs/sideNavTriggerButton/${accrSideNavTriggerButton + 1}/timeStamp`
    database.ref('/').update({
        [accumulator]: accrSideNavTriggerButton + 1,
        [clickRecord]: firebase.database.ServerValue.TIMESTAMP
    });
});

$(document).on("click", "#minorProjectsContainer", function () {
    let accumulator = `logs/minorProjectsContainer/total`
    let clickRecord = `logs/minorProjectsContainer/${accrMinorProjectsContainer + 1}/timeStamp`
    database.ref('/').update({
        [accumulator]: accrMinorProjectsContainer + 1,
        [clickRecord]: firebase.database.ServerValue.TIMESTAMP
    });
});

///////////// COOKIES //////////////////////////////

function cookieManager() {
    let now = moment().format('MMMM Do YYYY, h:mm:ss a')
    var visitor = document.cookie;
    if (visitor != "") {
        console.log(visitor)
    } else {
        document.cookie = `visitor=${now}`;
    }
}

///////////// RUN PROGRAM //////////////////////////////

cookieManager()
console.log(document.cookie)