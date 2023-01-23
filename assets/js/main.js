console.log("klappts?")

/* 
Frage

4 SuperBalls erstellen

Farbe body + h1 ändern

Elemente in css stylen 


wenn click auf Ball     dann body + h1 HintergrundFarbe ändern


*/


// Variablen 
let buttonGrünRot = document.querySelector("#buttonGrünRot");
let buttonGrauGelb = document.querySelector("#buttonGrauGelb");
let buttonSchwarzOrange = document.querySelector("#buttonSchwarzOrange");
let buttonDunkelBlauHellBlau = document.querySelector("#buttonDunkelBlauHellBlau");

let outputBody = document.querySelector("body");
let outputH1 = document.querySelector("h1");


// Eventlistener
buttonGrünRot.addEventListener("click", farbenTauschGrünRot);
buttonGrauGelb.addEventListener("click", farbenTauschGrauGelb);
buttonSchwarzOrange.addEventListener("click", farbenTauschSchwarzOrange);
buttonDunkelBlauHellBlau.addEventListener("click", farbenTauschDunkelBlauHellBlau);



// Funktion
function farbenTauschGrünRot(){
    console.log("funktion eröffnet EventListener ist verknüpft");

    let inputBackgroundColor = "";
    let inputGardienColor1 = "";

    inputBackgroundColor = getComputedStyle(buttonGrünRot).backgroundColor;
    console.log(inputBackgroundColor);

    // geht nicht :-( bekommt in console alles zurück, müsste es sortieren und stückeln oder so was )
/*     inputGardienColor1 = getComputedStyle(buttonGrünRot).backgroundImage;
    console.log(inputGardienColor1);
 */

    outputBody.style.backgroundColor = inputBackgroundColor;
    outputH1.style.color = "red";
}


function farbenTauschGrauGelb(){
    let inputBackgroundColor ="";

    inputBackgroundColor = getComputedStyle(buttonGrauGelb).backgroundColor;

    outputBody.style.backgroundColor = inputBackgroundColor;
    outputH1.style.color = "yellow";
}




function farbenTauschSchwarzOrange(){
    let inputBackgroundColor = "";

    inputBackgroundColor = getComputedStyle(buttonSchwarzOrange).backgroundColor;

    outputBody.style.backgroundColor = inputBackgroundColor;
    outputH1.style.color = "orange";
}




function farbenTauschDunkelBlauHellBlau(){
    let inputBackgroundColor = "";

    inputBackgroundColor = getComputedStyle(buttonDunkelBlauHellBlau).backgroundColor;
    
    outputBody.style.backgroundColor = inputBackgroundColor;
    outputH1.style.color = "#5f95e0"
}