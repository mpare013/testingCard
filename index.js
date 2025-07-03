document.addEventListener('DOMContentLoaded', function () {
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // no military time i think convert '0' to '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;

        const clockElement = document.querySelector('.clock');
        if (clockElement) {
            clockElement.textContent = `${hours}:${minutes} ${ampm}`;
        } else {
            console.error("Clock element not found!");
        }
    }

    setInterval(updateClock, 1000)
    updateClock();
});// Open and close Start Menu
const startBtn = document.getElementById('start');
const startMenuContainer = document.getElementById('startMenuContainer');
function loginStart() {
    window.location.href = 'index.html';
}
// Function to toggle the start menu visibility
function openStartMenu() {
    // Check if the menu is already open or closed
    if (startMenuContainer.style.display === 'block') {
        startMenuContainer.style.display = 'none'; // Close the menu
    } else {
        startMenuContainer.style.display = 'block'; // Open the menu
    }
}
function getMaxZIndex() {
    let maxZIndex = 0;
    document.querySelectorAll('.window').forEach(windowEl => {
        const zIndex = parseInt(windowEl.style.zIndex, 10) || 0;
        maxZIndex = Math.max(maxZIndex, zIndex);
    });
    return maxZIndex;
}

// Function to bring the window to the front by setting its z-index
function bringToFront(windowEl) {
    const currentMaxZIndex = getMaxZIndex();
    windowEl.style.zIndex = currentMaxZIndex + 1;
}

    document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start');
    const startMenuContainer = document.getElementById('startMenuContainer');

    //  toggle the start menu visibility
    function openStartMenu() {
        if (startMenuContainer.style.display === 'block') {
            startMenuContainer.style.display = 'none'; // Close the menu
        } else {
            startMenuContainer.style.display = 'block'; // Open the menu
        }
    }

    document.addEventListener('click', (e) => {
        if (!startBtn.contains(e.target) && !startMenuContainer.contains(e.target)) {
            startMenuContainer.style.display = 'none'; 
        }
    });
});



const correctUsername = 'strawberry';
const correctPassword = '2001';

function go() {
    const username = document.getElementById('uname').value;
    const password = document.getElementById('pword').value;

    if (username === correctUsername && password === correctPassword) {
        const loginSound = new Audio('audio/winxp.mp3'); 
        loginSound.play();

        setTimeout(() => {
            window.location.href = 'desktop.html';
        }, 3350);
    } else {
        error();
    }
}
function openWelcomeMessage(){
        const welcomeWindow = document.getElementById("welcome-message");
        welcomeWindow.style.display = 'block';
        bringWindowToFront(welcomeWindow);
}
function error() {
    if (username !== correctUsername || password !== correctPassword) {
        const errorSound = new Audio('audio/errorSound.mp3');
        errorSound.play();

        const errorWindow = document.getElementById("window27");
        errorWindow.style.display = 'block';
        bringWindowToFront("window27");
    }
}

function closeWelcomeMessage(){
    document.getElementById('welcome-message').style.display = "none"
}
function closeError(){
    document.getElementById("window27").style.display ="none";
}

function mouseClick(){
    const clickSound = new Audio("audio/click.mp3");
    clickSound.play();
}
function openPepsiJoke(){
    document.getElementById("window6").style.display ="block";
    bringWindowToFront(window6);
}
function closePepsiJoke(){
    document.getElementById("window6").style.display ="none";
}

const pepsiCorrectAnswer = 'pop';

function loginPepsi() {
    const pepsiAnswer = document.getElementById('pepsiUserAnswer').value.toLowerCase().trim();
    const bubbles = new Audio ("audio/openCan.mp3");
    if (pepsiAnswer === pepsiCorrectAnswer) {
        bubbles.play();
        openMusicPlayer(); 
    } else {
        const errorSound = new Audio('audio/errorSound.mp3');
        document.getElementById('window27').style.display = 'block';
        errorSound.play();
        bringWindowToFront(window27);
    }
}

function openMusicPlayer() {
    document.getElementById("window6").style.display = "none";
    document.getElementById("window12").style.display = "block";
        bringWindowToFront(window12);
}
function closeMusicPlayer(){
    document.getElementById("window12").style.display ="none";
    musicPlayerSong.pause();   
}

function closePepsiJoke() {
    document.getElementById("pepsiInformation").style.display = "none";
}

function openHint(){
    document.getElementById("hint-message").style.display ="block";
        bringWindowToFront("hint-message");
}

function closeHint(){
    document.getElementById("hint-message").style.display ="none";
}

function openMSDOS(){
    document.getElementById("window30").style.display="block";
    bringWindowToFront(window30);
}

function openMSDOSHint(){
    document.getElementById("window5").style.display ="block";
    bringWindowToFront(window5);
}

function closeMSDOS(){
    document.getElementById("window30").style.display="none";
}

function closeMSDOSHint(){
    document.getElementById("window5").style.display="none";
}

function openStartMenu(){
    document.getElementById("startMenuContainer").style.display="block";
}

function openNotepad() {
    document.getElementById('window4').style.display = 'block';
        bringWindowToFront(window4);
}



function openTaxDocuments(){
    document.getElementById("window11").style.display="block";
        bringWindowToFront(window11);
}

function closeTaxDocuments(){
    document.getElementById("window11").style.display="none";
}




function openTaxHint(){
    document.getElementById("window14").style.display="block";
    bringWindowToFront(window14);
}
function closeTaxHint(){
    document.getElementById("window14").style.display="none";
}
function openLoveLetter() {
    document.getElementById("window17").style.display = "block";
        bringWindowToFront(window17);
}
function openMyComputer() {
    document.getElementById("window1").style.display = "block";
        bringWindowToFront(window1);
}

function closeMyComputer() {
    document.getElementById("window1").style.display = "none";
}

function openRecyclingBin() {
    document.getElementById("window7").style.display = "block";
        bringWindowToFront(window7);
}

function closeRecyclingBin() {
    document.getElementById("window7").style.display = "none";
}

function openTNTPasswordNote(){
    document.getElementById("window66").style.display="block";
        bringWindowToFront(window66);
}

function openFlowers(){
    document.getElementById("window36").style.display="block";
        bringWindowToFront(window36);
}


function openDreamNote(){
    document.getElementById("dream-window").style.display="block";
}
function closeTNTPasswordNote(){
    document.getElementById("window66").style.display="none";
}

function closeDreamNote(){
    document.getElementById("dream-window").style.display="none";
}
function closeFlowers(){
    document.getElementById("flowers-window").style.display="none";
}
//inbox

function openInbox() {
    document.getElementById("window2").style.display = "block";
        bringWindowToFront(window2);
}

function closeInbox() {
    document.getElementById("inbox-window").style.display = "none";
}

function openEmail(id) {
    document.querySelectorAll(".email-content").forEach(email => email.style.display = "none");
    const emailToShow = document.getElementById(id);
    if (emailToShow) emailToShow.style.display = "block";
}



function openInternetError() {
    document.getElementById("window60").style.display = "block";
    bringWindowToFront(window60);
    const errorSound = new Audio('audio/errorSound.mp3');
    errorSound.play();
}


function closeInternetError(){
    document.getElementById("window60").style.display ="none";
}

function openInternet() {
    document.getElementById("window3").style.display ="block";
        bringWindowToFront(window3);
}
function openMorseNote() {
    document.getElementById("window15").style.display="block";
    bringWindowToFront(window15);
}

function closeMorseNote() {
    document.getElementById("window15").style.display="none";
}
function openBank(){
    document.getElementById("window37").style.display="block";
    bringWindowToFront(window37);
}
function openDecoder() {
    document.getElementById("window67").style.display="block";
    bringWindowToFront(window67);
}

function closeDecoder() {
    document.getElementById("window67").style.display="none";
}
// window 50 51
function openSticker2(){
    document.getElementById("window51").style.display="block";
        bringWindowToFront(window51);
}

function closeSticker2(){
    document.getElementById("window51").style.display="none";
}
function openSticker3(){
    document.getElementById("window50").style.display="block";
        bringWindowToFront(window50);
}

function closeSticker3(){
    document.getElementById("window50").style.display="none";
}

function openDocumentsWindow(){
    document.getElementById("window20").style.display="block";
        bringWindowToFront(window20);
}


function openSettings(){
    document.getElementById("window9").style.display="block";
        bringWindowToFront(window9);
}


function openTNT(){
    document.getElementById("window18").style.display="block";
        bringWindowToFront(window18);
}


function openHiddenDocumentsWindow(){
    document.getElementById("tax-window").style.display="block";
}

function makeWish(){
    document.getElementById('wish-granted').style.display="block";
    document.getElementById('wish-window-container').style.display="none";
    const wishSound= new Audio('audio/magic.mp3');
    wishSound.play();
}

function openWishInput(){
    document.getElementById('wishInputBox').style.display="block";
}

function closeWish(){
    document.getElementById('wish-granted').style.display="none";
}

function openPuzzleClue(){
    const puzzleWindow = document.getElementById("window34");
    puzzleWindow.style.display = "block";
    bringWindowToFront(puzzleWindow);
}


function openHowtoplay(){
    const howWindow = document.getElementById("window21");
    howWindow.style.display = "block";
    bringWindowToFront(howWindow);
}
function openPokerDog(){
    const dogWindow = document.getElementById("window81");
    dogWindow.style.display = "block";
    bringWindowToFront(dogWindow);
}

function closeHowtoplay(){
    document.getElementById('window21').style.display="none";

}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        const inputId = event.target.id;

        if (inputId === "wishInput") {
            event.preventDefault();
            makeWish();
        } else if (inputId === "pepsiUserAnswer") {
            event.preventDefault();
            loginPepsi();
        } else if (inputId === "notepad") {
            event.preventDefault();
            saveNote();
        } else if (inputId === "uTax") {
            event.preventDefault();
            goTax();
        } else if (inputId === "pTax") {
            event.preventDefault();
            goTax();
        } else if (inputId === "uTNT") {
            event.preventDefault();
            loginTNT();
        } else if (inputId === "pTNT") {
            event.preventDefault();
            loginTNT();
        } else if (inputId === "uname") {
            event.preventDefault();
            go();
        } else if (inputId === "pword") {
            event.preventDefault();
            go();
        } else if (inputId ==="searchBox") {
            event.preventDefault();
            openInternetError();
        } else if (inputId === "url") {
            event.preventDefault();
            openInternetError();
        }
    }
}

function openGroceryListNote(){
    const groceryWindow = document.getElementById("window23");
    groceryWindow.style.display = "block";
    bringWindowToFront(groceryWindow);
}

function openRandomNote(){
    const draftWindow = document.getElementById("window24");
    draftWindow.style.display = "block";
    bringWindowToFront(draftWindow);
}

function openFavourites(){
    const favWindow = document.getElementById("window25");
    favWindow.style.display = "block";
    bringWindowToFront(favWindow);
}




function openTodolist(){
    const todoWindow = document.getElementById("window65");
    todoWindow.style.display = "block";
    bringWindowToFront(todoWindow);
}

function closeTodolist(){
    document.getElementById('window65').style.display= "none";
}


