document.getElementById('greenButton').onclick = switchGreen;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;

function switchGreen() {
    document.getElementsByTagName('header')[0].style.backgroundColor = '#006849'; 
    document.getElementsByTagName('h1')[0].style.color = '#EDEDD6'; 
    document.getElementsByTagName('header')[0].style.backgroundImage = "url('./assets/img/yellowPill.png')";
/*     document.getElementById("landingImg").src = "./assets/img/Biobox_green.png"; */
    document.getElementById("yellowButton").style.border = "none";
    document.getElementById("blueButton").style.border = "none";
    document.getElementById("whiteButton").style.border = "none";
    document.getElementById("greenButton").style.border = "2px solid #EDEDD6";
}

function switchWhite() {
    document.getElementsByTagName('header')[0].style.backgroundColor = '#EDEDD6'; 
    document.getElementsByTagName('h1')[0].style.color = '#0F4891'; 
    document.getElementsByTagName('header')[0].style.backgroundImage = "url('./assets/img/yellowPill.png')";
/*     document.getElementById("landingImg").src = "./assets/img/Biobox_cream.png"; */
    document.getElementById("greenButton").style.border = "none";
    document.getElementById("yellowButton").style.border = "none";
    document.getElementById("blueButton").style.border = "none";
    document.getElementById("whiteButton").style.border = "2px solid #0F4891";
}

function switchBlue() {
    document.getElementsByTagName('header')[0].style.backgroundColor = '#0F4891'; 
    document.getElementsByTagName('h1')[0].style.color = '#F0BE33'; 
    document.getElementsByTagName('header')[0].style.backgroundImage = "url('./assets/img/whitePill.png')";
/*     document.getElementById("landingImg").src = "./assets/img/Biobox_black.png"; */
    document.getElementById("greenButton").style.border = "none";
    document.getElementById("whiteButton").style.border = "none";
    document.getElementById("yellowButton").style.border = "none";
    document.getElementById("blueButton").style.border = "2px solid #F0BE33";
}

function switchYellow() {
    document.getElementsByTagName('header')[0].style.backgroundColor = '#F0BE33'; 
    document.getElementsByTagName('h1')[0].style.color = '#EDEDD6'; 
    document.getElementsByTagName('header')[0].style.backgroundImage = "url('./assets/img/greenPill.png')";
/*     document.getElementById("landingImg").src = "./assets/img/Biobox_wood.png"; */
    document.getElementById("greenButton").style.border = "none";
    document.getElementById("whiteButton").style.border = "none";
    document.getElementById("blueButton").style.border = "none";
    document.getElementById("yellowButton").style.border = "2px solid #EDEDD6";

}
