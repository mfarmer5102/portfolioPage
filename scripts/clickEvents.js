///////////// APPLICATION NOTIFICATIONS /////////////////////////////////////////////////

//#10 - LIRI Bot
$(document).on("click", "#liriBotThumbnail", function () {
    alert('Unfortunately this application is unavailable to experience as it is a command-line application. You may still view its source code on GitHub along with screenshots and/or a demonstrative recording.')
});

//#11 - Hangman
$(document).on("click", "#hangmanNodeThumbnail", function () {
    alert('Unfortunately this application is unavailable to experience as it is a command-line application. You may still view its source code on GitHub along with screenshots and/or a demonstrative recording.')
});

//#12 - Bamazon
$(document).on("click", "#bamazonThumbnail", function () {
    alert('Unfortunately this application is unavailable to experience as it is a command-line application. You may still view its source code on GitHub along with screenshots and/or a demonstrative recording.')
});

//Python Financial Reporter
$(document).on("click", "#pyFinRepThumbnail", function () {
    alert('Unfortunately this application is unavailable to experience as it is a command-line application. You may still view its source code on GitHub along with screenshots and/or a demonstrative recording.')
});

///////////// MANAGE ABOUT ME CONTENT /////////////////////////////////////////////////

$(document).ready(function () {
    $("#extraAboutText").hide();
});

$(document).on("click", "#readMoreAbout", function () {
    $("#extraAboutText").slideDown();
    $("#controlAboutSize").empty();
    $("#controlAboutSize").append(`<a id='readLessAbout' style="cursor: pointer">Read less.</a>`);
});

$(document).on("click", "#readLessAbout", function () {
    $("#extraAboutText").slideUp();
    $("#controlAboutSize").empty()
    $("#controlAboutSize").append(`<a id='readMoreAbout' style="cursor: pointer">Read more.</a>`);
});

///////////// QUICK LINKS /////////////////////////////////////////////////

$(document).on("click", "#homeQuickLink", function () {
    window.location.replace('https://www.appsbymatthew.com')
});

$(document).on("click", "#applicationsQuickLink", function () {
    window.location.replace('https://www.appsbymatthew.com/applications.html')
});

$(document).on("click", "#githubQuickLink", function () {
    window.location.replace('https://github.com/cafeamericano')
});