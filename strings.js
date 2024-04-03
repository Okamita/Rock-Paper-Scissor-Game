const userName = document.querySelector(".nameInput");
const arryIndex = document.querySelector(".arryIndex");

const introduction = "introductionMsg";
const tutorial = "tutorialMsg";
const error = "errorMsg";
const lostRound = "lostRoundMsg";
const winRound = "winRoundMsg";
const tieRound = "tieMsg"
const roundMsg = "roundMsg"
const error2 = "error2MSG"
const winMsg = "winMsg";

let dialogueBoxArr = [];
let positionInArray = 0;

arryIndex.textContent = 1;

const lookUpText={
    "introductionMsg" :  `Ehi, guarda chi è qui! Sei atterrato anche tu in questo mondo alternativo!
    \nAh, ma non preoccuparti, amico, sono qui per farti da guida. Sì, sono il tuo avatar, il tuo biglietto d'ingresso a questa follia. Puoi manipolarmi a tuo piacimento, almeno fino a quando non raggiungiamo il traguardo, che sia una vittoria trionfante o una sconfitta amara.
    \n Se vinci, sei libero di tornare alla tua vita piena di dolci distrazioni. Ma se perdiamo... be', direi che entrambi saremo destinati a fare la fine più brutta che si possa immaginare....... influencer di tiktok!
    \nQuindi, su, fatti coraggio e scrivi qui il tuo nome, se sei abbastanza audace da affrontare questa avventura con me!`,

    "tutorialMsg" : `Ehi, PLACHEHOLDERTEXT, ascolta un attimo, ti spiego come funziona 'sto giro. Abbiamo sei turni davanti a noi per giocare a "Spada, Magia, Pergamena". Capito il giochino? Beh, se non hai le idee chiare, facciamo un confronto con la tua realtà. Conosci il classico sasso, carta, forbici, vero? Ecco, è simile.
    \n• La spada fa a fette la pergamena incantata, come quando squarci un vecchio tomo.
    \n• La pietra magica pietrifica la spada.
    \n• La pergamena riesce a fermare la pietra magica, proprio come quando metti uno scudo davanti a un proiettile.
    \nSei pronto per la sfida?
    \nSeleziona una delle tre scelte e poi premi il tasto Play.`,
    

    "errorMsg" : "Ehi! Non puoi selezionare play prima di scegliere un arma, usa il tuo mouse per scegliere un arma tra le tre e poi premi play.",
    "lostRoundMsg" :  `Questo era il round 1, ed hai perso. 
    
Vedi, il nemico ha scelto ENEMYCHOICE e tu hai scelto PLAYERCHOICE, e come ti avevo
detto all'inizio, ENEMYCHOICE vince sopra PLAYERCHOICE!. 

Purtroppo abbiamo perso un punto vita.
    
Non ti rassegnare hai ancora tempo per vincere!`,
    
    "winRoundMsg" :  `Questo era il round 1, ed hai Vinto! 

Il nemico non si aspettava che avresti usato PLAYERCHOICE contro la sua ENEMYCHOICE. 

Il nemico ha perso un punto vita.

Continua cosi e vinceremo in men che non si dica!`,

"tieMsg" :  `Questo era il round 1, ed é un pareggio! 
    
É incredibile come sia tu che il nemico abbiate scelto PLAYERCHOICE. 

In questi casi il round non aumenta, te lo detto, questa battaglia é all'ultimo sangue!`,

"roundMsg" : "Siamo al round 1, seleziona una delle tre scelte e poi premi conferma." +
            "\n\nIn questo modo vedrai il risultato dello scontro e la scelta effettuata dal nemico",
"error2MSG" : "Ehi prima di poter giocare devi premere next round!",
"winMsg" : "CI SEI RIUSCITO!, hai vinto il gioco e ci hai liberati entrambi! Ora puoi finalmente tornare alla tua vita piena di intrattenimento....."

}

userName.addEventListener("keydown", (event)=> {
    if(event.key === "Enter"){
        tutorialEvent();
    }
});

function tutorialEvent(){
    const logButton = document.querySelector(".logButtons");

    //Changes the object with a new Object with the correct name
    lookUpText["tutorialMsg"] = lookUpText["tutorialMsg"].replace("PLACHEHOLDERTEXT", userName.value);


    updateDialogueBox(tutorial);

    
    userName.remove();
    logButton.setAttribute("style", "visibility: visible")

    dialogueBox.classList.remove("hide");
    uiElementsContainer.classList.remove("hide");
    heartContainer.src = "img\\Heart 3.png";
}


function updateTextDisplay(message, playerValue, enemyValue){
    lookUpText[message] = lookUpText[message].replaceAll("PLAYERCHOICE", playerValue);
    lookUpText[message] = lookUpText[message].replaceAll("ENEMYCHOICE", enemyValue);
}

function updateTextRound(message, round){
    lookUpText[message] = lookUpText[message].replaceAll(round, round+1);
}