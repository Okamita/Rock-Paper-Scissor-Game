const buttons = document.querySelectorAll("#imageButton");
const otherContainer = document.querySelector(".other");
const uiElementsContainer = document.querySelector(".uiElementsContainer");
const dialogueBox = document.querySelector(".choices");

let round = 1;
let playerSelection;
let computerSelection;







//Start the game by having the introduction in the dialogueBox
updateDialogueBox(introduction);



const heartContainer = document.createElement("img");
heartContainer.classList.add("lifeImage");



dialogueBox.insertBefore(heartContainer, dialogueBox.firstChild);


const demon = document.createElement("img");
demon.classList.add("lemon");
heartContainer.classList.add("hide");

demon.src = "img\\Demon.gif";
otherContainer.appendChild(demon);

const backGroundSelection = document.createElement("div");
const roulette = document.createElement("img");

roulette.classList.add("rouletteImage");

roulette.src = "img\\Empty.png";
roulette.style.width = "220px";

const buttonRoulette = document.querySelector(".lollo");

let images = [];
images.push("img\\Paper.png");
images.push("img\\Rock.png");
images.push("img\\Scissor.png");

let currentIndex = 0;
let boolean = true;
let playerLife = 3;

function playerLife1(){
    if(playerLife === 2){
        heartContainer.src = "img\\Heart 2.png";
    }
    else if(playerLife === 1){
        heartContainer.src = "img\\Heart 1.png";
    }else if(playerLife <= 0){
        heartContainer.src = "img\\Heart 0.png";
    }
}

let enemyHeart = [];
enemyHeart.push(document.querySelector(".firstBlueHeart"));
enemyHeart.push(document.querySelector(".secondBlueHeart"));
enemyHeart.push(document.querySelector(".thirdBlueHeart"));

let enemyHealth = 3;

function enemyLife(){
    if(enemyHealth === 2){
        enemyHeart[2].remove();
    }
    else if(enemyHealth === 1){
        enemyHeart[1].remove();
    }else if(enemyHealth <= 0){
        enemyHeart[0].remove();
    }
}


const we = document.querySelector(".textRound");
we.style.fontFamily = "Minecraft, sans-serif";

let isTie = false;


function checkGameCondition(){
    const lookupLoseMatchUp={
        "img\\Rock.png" : "img\\Paper.png",
        "img\\Paper.png" : "img\\Scissor.png",
        "img\\Scissor.png" : "img\\Rock.png"
    }

    computerSelection = roulette.getAttribute("src");
 
    addNextRoundButton();

    const dialogueBoxText = document.querySelector(".dialogueBoxText");

    let winMessage = `Questo era il round ${round}, ed hai Vinto!

Il nemico non si aspettava che avresti usato ${selectionConverter(playerSelection)} contro la sua ${selectionConverter(computerSelection)}. 
    
Il nemico ha perso un punto vita.
    
Continua cosi e vinceremo in men che non si dica!`;
    
    
    let lostMessage = `Questo era il round ${round}, ed hai perso.
        
Vedi, il nemico ha scelto ${selectionConverter(computerSelection)} e tu hai scelto ${selectionConverter(playerSelection)}, e come ti avevo detto all'inizio, ${selectionConverter(computerSelection)} vince sopra ${selectionConverter(playerSelection)}!.
    
Purtroppo abbiamo perso un punto vita.
        
Non ti rassegnare hai ancora tempo per vincere!`;
    
    let tieMessage = `Questo era il round ${round}, ed é un pareggio!
        
É incredibile come sia tu che il nemico abbiate scelto ${selectionConverter(playerSelection)}.
    
In questi casi il round non aumenta, te lo detto, questa battaglia é all'ultimo sangue!`

    if(playerSelection === computerSelection){
        dialogueBoxText.textContent = tieMessage;
        isTie = true;
        return;
    }


    if(lookupLoseMatchUp[playerSelection] === computerSelection){     
        dialogueBoxText.textContent = lostMessage;
        playerLife--;
        isTie = false;
    }else{
        dialogueBoxText.textContent = winMessage;
        enemyHealth--;
        isTie = false;
    }
}

function selectionConverter(value){
    if(value === "img\\Paper.png"){
        return "Pergamena";
    }

    if(value === "img\\Scissor.png"){
        return "Spada";
    }

    if(value === "img\\Rock.png"){
        return "Pietra Magica";
    }


}


async function buttonPlayAnimation(){
    const delayTime = 26;

    buttonRoulette.style.backgroundImage = "url('img/play02.png')";
    await delay(delayTime);
    buttonRoulette.style.backgroundImage = "url('img/play03.png')";
    await delay(delayTime);
    buttonRoulette.style.backgroundImage = "url('img/play04.png')";
    await delay(delayTime);
    buttonRoulette.style.backgroundImage = "url(img/play05.png')";
    await delay(delayTime);
    buttonRoulette.style.backgroundImage = "url('img/play01.png')";
}


let choiceMade = false;
buttonRoulette.addEventListener("click",async ()=>{

    if(!isChoiceActive){
        updateDialogueBox(error);
        arryIndex.textContent = positionInArray;
        return;
    }

    if(choiceMade){
        updateDialogueBox(error2);
        arryIndex.textContent = positionInArray;
        return;
    }

    buttonPlayAnimation();

    let randomNumber = Math.floor(Math.random() * 3);
    clearInterval(timer);
    await delay(300);
    roulette.src = images[randomNumber];
    backGroundSelection.classList.add("enemySelection");
    checkGameCondition();
    playerLife1();
    enemyLife();
    choiceMade = true;
});





function delay(time){
    return new Promise(resolve => setTimeout(resolve, time));
}

function startRoulette(){
    timer = setInterval(changeImage, 200);
}

function changeImage(){
    roulette.src = ""; // Clear previous image
    currentIndex = (currentIndex + 1) % images.length;
    roulette.src = images[currentIndex];
}


startRoulette();

otherContainer.appendChild(backGroundSelection);
backGroundSelection.appendChild(roulette);

let isChoiceActive = false;


buttons.forEach(button =>{
    button.classList.add("hoverTrue");
    button.addEventListener("click", ()=>{
        if(!button.classList.contains("boolTrue")){
            checkOtherButtons(buttons);
            button.style.backgroundImage = "url('img/lIMONE.png')";
            button.style.backgroundSize = "contain";
            button.style.backgroundPosition = "center";
            button.style.backgroundRepeat = "no-repeat";
            button.classList.add("boolTrue");
            button.classList.remove("hoverTrue");
            isChoiceActive = true;

            button.children[0].classList.add("limoncello");
            playerSelection = button.children[0].getAttribute("src");


        }else{
            button.style.backgroundImage = '';
            button.classList.remove("boolTrue");
            button.classList.add("hoverTrue");
            isChoiceActive = false;
        }
    });
});

function checkOtherButtons(buttons){
    buttons.forEach(button =>{
        button.style.backgroundImage = '';
        button.classList.remove("boolTrue");
        button.classList.add("hoverTrue");
    });
}









const backButton = document.querySelector(".backButton");

const nextButton = document.querySelector(".nextButton");




nextButton.addEventListener("click", ()=>{
    const dialogueBoxText = document.querySelector(".dialogueBoxText");
    
    if(positionInArray === dialogueBoxArr.length-1){
        return;
    }

    dialogueBoxText.textContent = dialogueBoxArr[positionInArray+1];
    positionInArray += 1;
    arryIndex.textContent = positionInArray;
});


backButton.addEventListener("click", ()=>{

    const dialogueBoxText = document.querySelector(".dialogueBoxText");
    
    if(positionInArray === 0){
        return;
    }

    dialogueBoxText.textContent = dialogueBoxArr[positionInArray-1];
    positionInArray -= 1;
    arryIndex.textContent = positionInArray;
});







//Function to update the text in the dialogue box, it use the string.js file as reference
function updateDialogueBox(displayMsg){
    const dialogueBoxText = document.querySelector(".dialogueBoxText");
    
    if(!lookUpText[displayMsg]){
        return;
    }

    if(!(dialogueBoxArr.includes(lookUpText[displayMsg]))){
        dialogueBoxArr.push(lookUpText[displayMsg]);
        positionInArray = dialogueBoxArr.indexOf(lookUpText[displayMsg]);
        arryIndex.textContent = positionInArray;
    }

    if(lookUpText[displayMsg]){
        dialogueBoxText.textContent = lookUpText[displayMsg];
    }   


}

function addNextRoundButton(){
    const nextRoundButton = document.createElement("button");
    nextRoundButton.setAttribute("id", "nextRoundButton");
    
    if(document.querySelector("#nextRoundButton")){
        return;
    }

    nextRoundButton.addEventListener("click", ()=>{

        //next round is the last
        if(round === 6){
            removeNextRoundButton();
            return;
        }

        const dialogueBoxText = document.querySelector(".dialogueBoxText");
    
       

        
        if(!isTie){
            round++;
            we.textContent = `Round ${round}/6`;
        }
        console.log(round);

        console.log(dialogueBoxText.textContent);
        dialogueBoxText.textContent = `Siamo al round ${round}, seleziona una delle tre scelte e poi premi conferma.

In questo modo vedrai il risultato dello scontro e la scelta effettuata dal nemico`;;

        

        choiceMade = false;

        isChoiceActive = true;
        
        startRoulette();
        backGroundSelection.classList.remove("enemySelection");
        checkOtherButtons(buttons);

        if(enemyHealth === 0){
            demon.remove();
            let lello = document.querySelector(".rouletteImage");
            let choiceContainer = document.querySelector(".choices")
            choiceContainer.remove();
            lello.remove();
            updateDialogueBox(winMsg);
            we.textContent = "Hai vinto! \nNon ho voglia di programmare altro, fai F5 se vuoi ri-giocare";
        }

        if(playerLife === 0){
            let lello = document.querySelector(".rouletteImage");
            let choiceContainer = document.querySelector(".choices")
            const dialogueBoxContainer = document.querySelector(".dialogueBox");
            const pageContainer = document.querySelector(".pageContainer");
            pageContainer.setAttribute("style", "height: 900px; justify-content: center;");
            dialogueBoxContainer.remove();
            choiceContainer.remove();
            lello.remove();
            we.textContent = "Hai perso!";
            return;
        }

        removeNextRoundButton();
    });

    if((enemyHealth === 0)){
        return;
    }

    const dialogueBox = document.querySelector(".dialogueBox");
    const logButtons = document.querySelector(".logButtons");

    nextRoundButton.textContent = "Next Round";
    dialogueBox.insertBefore(nextRoundButton, logButtons);
}

function removeNextRoundButton(){
    const nextRoundButton = document.querySelector("#nextRoundButton");
    nextRoundButton.remove();
}