document.getElementById('greenButton').onclick = switchGreen;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;


function switchGreen() {
    document.getElementsByTagName('header')[0].style.backgroundColor = '#006849'; 
    document.getElementsByTagName('h1')[0].style.color = '#EDEDD6'; 
    document.getElementById("navLogo").style.color = "#F0BE33"; 
    document.getElementById("navContact").style.color = "#F0BE33"; 
    document.getElementById("navLink1").style.color = "#F0BE33";
    document.getElementById("navLink2").style.color = "#F0BE33";
    document.getElementById("navLink3").style.color = "#F0BE33";
    document.getElementById("nav__mobile--trigger").style.fill = "#F0BE33";
    document.getElementById("subtitle").style.color = "#F0BE33";
    document.getElementsByClassName('landing')[0].style.backgroundImage = "url('./assets/img/yellowPill.png')";
/*     document.getElementById("landingImg").src = "./assets/img/Biobox_green.png"; */
    document.getElementById("yellowButton").style.border = "none";
    document.getElementById("blueButton").style.border = "none";
    document.getElementById("whiteButton").style.border = "none";
    document.getElementById("greenButton").style.border = "2px solid #EDEDD6";
}

function switchWhite() {
    document.getElementsByTagName('header')[0].style.backgroundColor = '#EDEDD6'; 
    document.getElementsByTagName('h1')[0].style.color = '#0F4891'; 
    document.getElementById("navLogo").style.color = "#0F4891"; 
    document.getElementById("navContact").style.color = "#0F4891"; 
    document.getElementById("navLink1").style.color = "#0F4891";
    document.getElementById("navLink2").style.color = "#0F4891";
    document.getElementById("navLink3").style.color = "#0F4891";
    document.getElementById("nav__mobile--trigger").style.fill = "#0F4891";
    document.getElementById("subtitle").style.color = "#0F4891";
    document.getElementsByClassName('landing')[0].style.backgroundImage = "url('./assets/img/yellowPill.png')";
/*     document.getElementById("landingImg").src = "./assets/img/Biobox_cream.png"; */
    document.getElementById("greenButton").style.border = "none";
    document.getElementById("yellowButton").style.border = "none";
    document.getElementById("blueButton").style.border = "none";
    document.getElementById("whiteButton").style.border = "2px solid #0F4891";
}

function switchBlue() {
    document.getElementsByTagName('header')[0].style.backgroundColor = '#0F4891'; 
    document.getElementsByTagName('h1')[0].style.color = '#F0BE33';
    document.getElementById("navLogo").style.color = "#EDEDD6"; 
    document.getElementById("navContact").style.color = "#EDEDD6"; 
    document.getElementById("navLink1").style.color = "#EDEDD6";
    document.getElementById("navLink2").style.color = "#EDEDD6";
    document.getElementById("navLink3").style.color = "#EDEDD6";
    document.getElementById("nav__mobile--trigger").style.fill = "#EDEDD6";
    document.getElementById("subtitle").style.color = "#EDEDD6";
    document.getElementsByClassName('landing')[0].style.backgroundImage = "url('./assets/img/whitePill.png')";
/*     document.getElementById("landingImg").src = "./assets/img/Biobox_black.png"; */
    document.getElementById("greenButton").style.border = "none";
    document.getElementById("whiteButton").style.border = "none";
    document.getElementById("yellowButton").style.border = "none";
    document.getElementById("blueButton").style.border = "2px solid #F0BE33";
}

function switchYellow() {
    document.getElementsByTagName('header')[0].style.backgroundColor = '#F0BE33'; 
    document.getElementsByTagName('h1')[0].style.color = '#EDEDD6'; 
    document.getElementById("navLogo").style.color = "#006849"; 
    document.getElementById("navContact").style.color = "#006849"; 
    document.getElementById("navLink1").style.color = "#006849";
    document.getElementById("navLink2").style.color = "#006849";
    document.getElementById("navLink3").style.color = "#006849";
    document.getElementById("nav__mobile--trigger").style.fill = "#006849";
    document.getElementById("subtitle").style.color = "#006849";
    document.getElementsByClassName('landing')[0].style.backgroundImage = "url('./assets/img/greenPill.png')";
/*     document.getElementById("landingImg").src = "./assets/img/Biobox_wood.png"; */
    document.getElementById("greenButton").style.border = "none";
    document.getElementById("whiteButton").style.border = "none";
    document.getElementById("blueButton").style.border = "none";
    document.getElementById("yellowButton").style.border = "2px solid #EDEDD6";
}
