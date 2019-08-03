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

///////////// SET LOCAL STORAGE //////////////////////////////

function setKey() {
    let currentKey = localStorage.getItem('visitorID')
    if (currentKey === null || currentKey === undefined || currentKey === '') {
        localStorage.setItem('visitorID', `visitor${moment().unix()}`)
        let path = `activity/${localStorage.getItem('visitorID')}/firstArrival`
        database.ref('/').update({
            [path]: moment().format('YYYY-MM-DD H:mm:ss A')
        });
    }
}

setKey()

///////////// CAPTURE CLICK EVENTS AND LOG TO DATABASE //////////////////////////////

function logUserActivity(elementID) {
    if (elementID !== undefined) {
        let clickRecord = `activity/${localStorage.getItem('visitorID')}/${moment().format('YYYY-MM-DD')}/${moment().format('H:mm:ss A')}`
        database.ref('/').update({
            [clickRecord]: elementID
        });
    }
}

$(document).ready(function () {
    $("a").click(function () {
        logUserActivity($(this).attr('data-seed'))
    });
    $("button").click(function () {
        logUserActivity($(this).attr('data-seed'))
    });
    $("div").click(function () {
        logUserActivity($(this).attr('data-seed'))
    });