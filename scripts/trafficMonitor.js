///////////// SET SESSION STORAGE //////////////////////////////

function setKey() {
    let currentKey = sessionStorage.getItem('visitorID')
    if (currentKey !== null && currentKey !== undefined || currentKey !== '') {
        sessionStorage.setItem('visitorID', `${moment().format('YYYY-MM-DD_h:mm:ss_A')}`)
    }
}

setKey()

///////////// VARIABLE INITIALIZATION //////////////////////////////

let accrEntryPointButton = 0;
let accrDivStudyHelper = 0;
let accrDivDashboard = 0;
let accrApplicationsSideNavLink = 0;
let accrSideNavTriggerButton = 0;
let accrMinorProjectsContainer = 0;

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
    let clickRecord = `logs/entryPointButton/${sessionStorage.getItem('visitorID')}/${moment().format('YYYY-MM-DD h:mm:ss A')}`
    database.ref('/').update({
        [clickRecord]: moment().format('YYYY-MM-DD_h:mm:ss_A')
    });
});

$(document).on("click", "#divStudyHelper", function () {
    let clickRecord = `logs/divStudyHelper/${sessionStorage.getItem('visitorID')}/${moment().format('YYYY-MM-DD h:mm:ss A')}`
    database.ref('/').update({
        [clickRecord]: moment().format('YYYY-MM-DD_h:mm:ss_A')
    });
});

$(document).on("click", "#divDashboard", function () {
    let clickRecord = `logs/divDashboard/${sessionStorage.getItem('visitorID')}/${moment().format('YYYY-MM-DD h:mm:ss A')}`
    database.ref('/').update({
        [clickRecord]: moment().format('YYYY-MM-DD_h:mm:ss_A')
    });
});

$(document).on("click", "#applicationsSideNavLink", function () {
    let clickRecord = `logs/applicationsSideNavLink/${sessionStorage.getItem('visitorID')}/${moment().format('YYYY-MM-DD h:mm:ss A')}`
    database.ref('/').update({
        [clickRecord]: moment().format('YYYY-MM-DD_h:mm:ss_A')
    });
});

$(document).on("click", "#sideNavTriggerButton", function () {
    let clickRecord = `logs/sideNavTriggerButton/${sessionStorage.getItem('visitorID')}/${moment().format('YYYY-MM-DD h:mm:ss A')}`
    database.ref('/').update({
        [clickRecord]: moment().format('YYYY-MM-DD_h:mm:ss_A')
    });
});

$(document).on("click", "#minorProjectsContainer", function () {
    let clickRecord = `logs/minorProjectsContainer/${sessionStorage.getItem('visitorID')}/${moment().format('YYYY-MM-DD h:mm:ss A')}`
    database.ref('/').update({
        [clickRecord]: moment().format('YYYY-MM-DD h:mm:ss A')
    });
});


