var bc = 5;
var sc = 25;

function counter(str) {
    if (str === 'bm') bc--;
    else if (str === 'bp') bc++;
    else if (str === 'sm') sc--;
    else if (str === 'sp') sc++;

    if (bc < 1) bc = 1;
    else if (bc > 99) bc = 99;
    if (sc < 1) sc = 1;
    else if (sc > 99) sc = 99;


    $('.breakcounter').html(bc);
    $('.sessioncounter').html(sc);
    $('.sessioncounterr').html(sc);
}

var numOfSec;
var numOfMin;
var startSec;
var intervalBeginning1;

var bNumOfSec;
var bNumOfMin;
var bStartSec;
var bIntervalBeginning1;

function start() {
    $(".sesbody").removeAttr("onclick");
    $(".sesbody").attr("onclick", "resetter();");
    $(".sesbody h5").html("Session");
    $(".sesbody h5").css("visibility", "visible");
    $(".sesbody span").css("display", "block");
    $(".resetbtn").css("display", "none");
    $('.sessioncounterr').html(`${$(".sessioncounter").html()*1 - 1}:${59}`);
    //console.log("1");
    sc = $(".sessioncounter").html() * 1 - 1;
    numOfSec = sc * 60 + 59;
    numOfMin = sc;
    startSec = 59;
    var intervalBeginning = setInterval(cat, 1000);
    intervalBeginning1 = intervalBeginning;
}

function cat() {
    if (numOfSec === 1) {
        //console.log(startSec, numOfMin, intervalBeginning1, numOfSec);
        clearInterval(intervalBeginning1);
        $(".sessioncounterr").html($(".breakcounter").html() * 1);
        breakTimer();
    }
    if (startSec == 0) {
        numOfMin--;
        startSec = 59;
        startSec--;
        numOfSec--;
    } else {
        startSec--;
        numOfSec--;
    }
    if (numOfSec !== 0 || numOfSec !== -1)
        $('.sessioncounterr').html(`${numOfMin}:${startSec}`);
}

function breakTimer() {
    $('.sessioncounterr').html(`${$(".sessioncounter").html()*1 - 1}:${59}`);
    sc = $(".sessioncounter").html() * 1 - 1;
    numOfSec = sc * 60 + 59;
    numOfMin = sc;
    startSec = 59;
    $(".sesbody h5").html("Break");
    $('.sessioncounterr').html(`${$(".breakcounter").html()*1 - 1}:${59}`);
    bc = $(".breakcounter").html() * 1 - 1;
    bNumOfMin = bc;
    bStartSec = 59;
    bNumOfSec = ((bNumOfMin * 60) + bStartSec + 1);
    //console.log('22', bNumOfSec);
    var bIntervalBeginning = setInterval(bcat, 1000);
    bIntervalBeginning1 = bIntervalBeginning;
}

function bcat() {
    if (bNumOfSec === 1) {
        clearInterval(bIntervalBeginning1);
        $(".sesbody h5").css("visibility", "hidden");
        $(".sessioncounterr").css("display", "none");
        $(".resetbtn").css("display", "block");
    }
    if (bStartSec == 0) {
        bNumOfMin--;
        bStartSec = 59 + 1;
    }
    bStartSec--;
    bNumOfSec--;
    if (bNumOfSec !== 0)
        $('.sessioncounterr').html(`${bNumOfMin}:${bStartSec}`);
}

function resetter() {
    clearInterval(intervalBeginning1);
    clearInterval(bIntervalBeginning1);
    start();
}