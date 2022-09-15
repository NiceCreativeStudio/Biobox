let greenButton = document.getElementById('greenButton')
let whiteButton = document.getElementById('whiteButton')
let blueButton = document.getElementById('blueButton')
let yellowButton = document.getElementById('yellowButton')

greenButton.onclick = switchGreen;
whiteButton.onclick = switchWhite;
blueButton.onclick = switchBlue;
yellowButton.onclick = switchYellow;



var heroBg = document.querySelector(".hero__container");
var titleList = document.querySelectorAll(".title");
var navList = document.querySelectorAll(".colorChange");
var mobileTrigger = document.getElementById("nav__mobile--trigger");
var bgPill = document.getElementById("bgPill");
var heroBiobox = document.getElementById("heroBiobox");


function switchGreen() {
    heroBg.style.backgroundColor = '#006849'; 
    titleList.forEach(function(title) {
        (title).style.color = '#EDEDD6';
    });
    navList.forEach(function(nav) {
        (nav).style.color = '#F0BE33';
    });
    mobileTrigger.style.fill = "#F0BE33";
    bgPill.style.backgroundImage = "url('./assets/img/yellowPill.png')";
    heroBiobox.style.backgroundImage = "url(https://ik.imagekit.io/nicecreativestudio/Biobox/green-biobox.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662985077854)";
    yellowButton.style.border = "none";
    blueButton.style.border = "none";
    whiteButton.style.border = "none";
    greenButton.style.border = "2px solid #EDEDD6";
}

function switchYellow() {
    heroBg.style.backgroundColor = '#F0BE33'; 
    titleList.forEach(function(title) {
        (title).style.color = '#EDEDD6';
    });
    navList.forEach(function(nav) {
        (nav).style.color = '#006849';
    });
    mobileTrigger.style.fill = "#006849";
    bgPill.style.backgroundImage = "url('./assets/img/greenPill.png')";
    heroBiobox.style.backgroundImage = "url(https://ik.imagekit.io/nicecreativestudio/Biobox/yellow-biobox.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662985070092)";
    greenButton.style.border = "none";
    yellowButton.style.border = "2px solid #EDEDD6";
    blueButton.style.border = "none";
    whiteButton.style.border = "none";
}

function switchBlue() {
    heroBg.style.backgroundColor = '#0F4891'; 
    titleList.forEach(function(title) {
        (title).style.color = '#F0BE33';
    });
    navList.forEach(function(nav) {
        (nav).style.color = '#EDEDD6';
    });
    mobileTrigger.style.fill = "#EDEDD6";
    bgPill.style.backgroundImage = "url('./assets/img/whitePill.png')";
    heroBiobox.style.backgroundImage = "url(https://ik.imagekit.io/nicecreativestudio/Biobox/blue-biobox.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662985100925)";
    greenButton.style.border = "none";
    yellowButton.style.border = "none";
    blueButton.style.border = "2px solid #F0BE33";
    whiteButton.style.border = "none";
}

function switchWhite() {
    heroBg.style.backgroundColor = '#EDEDD6'; 
    titleList.forEach(function(title) {
        (title).style.color = '#0F4891';
    });
    navList.forEach(function(nav) {
        (nav).style.color = '#0F4891';
    });
    mobileTrigger.style.fill = "#0F4891";
    bgPill.style.backgroundImage = "url('./assets/img/yellowPill.png')";
    heroBiobox.style.backgroundImage = "url(https://ik.imagekit.io/nicecreativestudio/Biobox/white-biobox.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662985059446)";
    greenButton.style.border = "none";
    yellowButton.style.border = "none";
    blueButton.style.border = "none";
    whiteButton.style.border = "2px solid #0F4891";
}



