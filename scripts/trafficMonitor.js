///////////// SET LOCAL STORAGE //////////////////////////////

function setKey() {
    let currentKey = localStorage.getItem('visitorID')
    if (currentKey === null || currentKey === undefined || currentKey === '') {
        localStorage.setItem('visitorID', `id${moment().unix()}`)
    }
}

setKey()

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

///////////// CLICK TRACKING//////////////////////////////

$(document).on("click", "#entryPointButton", function () {
    let clickRecord = `logs/${localStorage.getItem('visitorID')}/${moment().format('YYYY-MM-DD')}/${moment().format('h:mm:ss A')}`
    database.ref('/').update({
        [clickRecord]: 'entryPointButton'
    });
});

$(document).on("click", "#divStudyHelper", function () {
    let clickRecord = `logs/${localStorage.getItem('visitorID')}/${moment().format('YYYY-MM-DD')}/${moment().format('h:mm:ss A')}`
    database.ref('/').update({
        [clickRecord]: 'divStudyHelper'
    });
});

$(document).on("click", "#divDashboard", function () {
    let clickRecord = `logs/${localStorage.getItem('visitorID')}/${moment().format('YYYY-MM-DD')}/${moment().format('h:mm:ss A')}`
    database.ref('/').update({
        [clickRecord]: 'divDashboard'
    });
});

$(document).on("click", "#applicationsSideNavLink", function () {
    let clickRecord = `logs/${localStorage.getItem('visitorID')}/${moment().format('YYYY-MM-DD')}/${moment().format('h:mm:ss A')}`
    database.ref('/').update({
        [clickRecord]: 'applicationsSideNavLink'
    });
});

$(document).on("click", "#sideNavTriggerButton", function () {
    let clickRecord = `logs/${localStorage.getItem('visitorID')}/${moment().format('YYYY-MM-DD')}/${moment().format('h:mm:ss A')}`
    database.ref('/').update({
        [clickRecord]: 'sideNavTriggerButton'
    });
});

$(document).on("click", "#minorProjectsContainer", function () {
    let clickRecord = `logs/${localStorage.getItem('visitorID')}/${moment().format('YYYY-MM-DD')}/${moment().format('h:mm:ss A')}`
    database.ref('/').update({
        [clickRecord]: 'minorProjectsContainer'
    });
});