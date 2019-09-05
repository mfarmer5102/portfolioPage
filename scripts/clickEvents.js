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

//Java Magic Eight Ball
$(document).on("click", "#javaMagicEightBallThumbnail", function () {
    alert('Unfortunately this application is unavailable to experience as it is a command-line application. You may still view its source code on GitHub along with screenshots and/or a demonstrative recording.')
});

//C++ BMI Calculator
$(document).on("click", "#cppBMICalculatorThumbnail", function () {
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

///////////// MANAGE SKILLS CONTENT /////////////////////////////////////////////////

$(document).on("click", ".fa-angle-up", function () {
    $(this).removeClass('fa-angle-up')
    $(this).addClass('fa-angle-down')
});

$(document).on("click", ".fa-angle-down", function () {
    $(this).removeClass('fa-angle-down')
    $(this).addClass('fa-angle-up')
});

$(document).ready(function () {
    $("#languagesExpandable").show();
    $("#frameworksExpandable").hide();
    $("#databasesExpandable").hide();
    $("#technologiesExpandable").hide();
});

$(document).on("click", "#toggleLanguagesButton", function () {
    $("#languagesExpandable").slideToggle();
});

$(document).on("click", "#toggleFrameworksButton", function () {
    $("#frameworksExpandable").slideToggle();
});

$(document).on("click", "#toggleDatabasesButton", function () {
    $("#databasesExpandable").slideToggle();
});

$(document).on("click", "#toggleTechnologiesButton", function () {
    $("#technologiesExpandable").slideToggle();
});

///////////// QUICK LINKS /////////////////////////////////////////////////

$(document).on("click", "#homeQuickLink", function () {
    window.location.replace('index.html')
});

$(document).on("click", "#applicationsQuickLink", function () {
    window.location.replace('applications.html')
});

$(document).on("click", "#githubQuickLink", function () {
    window.location.replace('https://github.com/cafeamericano')
});