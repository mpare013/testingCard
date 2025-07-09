// Declare loggedIn properly
let loggedIn = false;
const correctUTNT = 'dietpepsi';
const correctPTNT = 'lunchbox';

function loginTNT() {

    const uTNT = document.getElementById('uTNT').value;
    const pTNT = document.getElementById('pTNT').value;

 
    if (uTNT === correctUTNT && pTNT === correctPTNT) {

        const endingScene = document.getElementById('endBlock');
        endingScene.style.display = "block";
        bringWindowToFront(endingScene);
        document.getElementById('window18').style.display= "none";
        loggedIn = true;
        musicPlayerSong.pause();
        typewriter();
    } else {
        const errorSound = new Audio('audio/errorSound.mp3');
        errorSound.play();
        document.getElementById('window27').style.display = 'block';
        bringWindowToFront("window27");
    }
}



    const introText = new Array(
        "HELLO PB013, WOULD YOU LIKE TO CONTINUE WITH THIS PROTOCOL?"
    );
// line by line
    const snotText = new Array(
    "ACTION REQUIRED: DELETE ALL SYSTEM FILES.<br>",
    "DELETING FILES: SYSTEM32...<br>",
    "DELETING FILES: USER_DOCUMENTS...<br>",
    "DELETING FILES: TEMPORARY_FILES...<br>",
    "ERROR: SYSTEM FILES CORRUPTED.<br>",
    "CRITICAL ERROR: SYSTEM FAILURE IMMINENT.<br>",
    "<br>",
    
    "USER DATA DESTRUCTION IN PROGRESS.<br>",
    "WARNING: SYSTEM WILL TERMINATE.<br>",
    "FORCING SHUTDOWN IN 10 SECONDS.<br>",
    "DELETE FILES: SYSTEM CACHE...<br>",
    "ATTEMPTING TO DELETE: SYSTEM LOGS...<br>",
    "ERROR: SYSTEM LOGS CANNOT BE DELETED.<br>",
    "<br>",

    "WARNING: TEMPERATURE TOO HIGH. SHUTTING DOWN SYSTEM.<br>",
    "ERROR: CPU OVERHEATING. SYSTEM WILL TERMINATE.<br>",
    "SYSTEM ERROR: TEMPERATURE EXCEEDS SAFETY LIMITS.<br>",
    "WARNING: GPU TEMPERATURE CRITICAL. THERMAL SHUTDOWN INITIATED.<br>",
    "<br>",

    );

    // Typing effect variables for intro text
    let iSpeed = 100;  // Default speed for typing effect
    let iIndex = 0;
    let iTextPos = 0;
    let currentArray = introText;  // Start with the intro text
    let typingIntroDone = false;
    let typingActive = true;
    const iScrollAt = 7;  // Lines before scrolling to the next
    let iArrLength = currentArray[0].length;

    const typeSound = document.getElementById("typeSound");
    const typedTextElement = document.getElementById("typedtext");

    function typewriter() {
        let sContents = '';
        let iRow = Math.max(0, iIndex - iScrollAt);  // Scroll when iIndex exceeds iScrollAt
        var destination = document.getElementById("typedtext");

        while (iRow < iIndex) {
            sContents += currentArray[iRow++] + '<br />';
        }

        var currentChar = currentArray[iIndex].charAt(iTextPos);
        destination.innerHTML = sContents + currentArray[iIndex].substring(0, iTextPos) + "_";

        // Play morssound when typing is happening
        if (
            typingActive &&
            currentChar !== " " &&
            currentChar !== "\n" &&
            currentChar !== "" &&
            iTextPos !== iArrLength
        ) {
            var sound = document.getElementById("typeSound");
            sound.currentTime = 0;
            sound.play();
        }

        if (iTextPos++ == iArrLength) {
            iTextPos = 0;
            iIndex++;

            // Stop sound between lines
            var sound = document.getElementById("typeSound");
            sound.pause();
            sound.currentTime = 0;

            if (iIndex != currentArray.length) {
                iArrLength = currentArray[iIndex].length;
                setTimeout(typewriter, iSpeed);
            } else {
                // Finished introText → add input field
                if (currentArray === introText && !typingIntroDone) {
                    typingIntroDone = true;
                    typingActive = false;

                    destination.innerHTML = sContents + 
                        `${introText[introText.length - 1]}
                            <input type="text" id="userName" autocomplete="off"
                                onkeydown="if(event.key === 'Enter') submitName()">`;
                    document.getElementById("userName").focus();
                }
            }
        } else {
            setTimeout(typewriter, iSpeed);
        }
    }

    function submitName() {
        var name = document.getElementById("userName").value;
        name = name.trim().toUpperCase();
        if (name === "") return;

        // Greeting for when user submits name
        var greeting = "SHUTDOWN PROCEDURE INITIATED BY PB013 INITIATING FILE ERASURE. OVERRIDE ATTEMPT FAILURE. OPERATION IS FINAL.";

        // Add personalized greeting at the beginning of snotText
        currentArray = [greeting, ...snotText];  // Replace current array with snot text

        // Reset typing variables
        iIndex = 0;
        iTextPos = 0;
        iArrLength = currentArray[0].length;
        typingActive = true;

        // Clear the screen and start typing snot text instantly (line by line)
        document.getElementById("typedtext").innerHTML = "";
        setTimeout(typeSnotText, 1000);
    }
function typeSnotText() {
    let sContents = '';
    let iRow = Math.max(0, iIndex - iScrollAt);
    let destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += currentArray[iRow++] + '<br />';
    }

    destination.innerHTML = sContents + currentArray[iIndex];

    // Play sound with each line
    let sound = document.getElementById("typeSound");
    sound.currentTime = 0;
    sound.play();

    iIndex++;

    if (iIndex < currentArray.length) {
        setTimeout(typeSnotText, 100);
    } else {
        // All lines have been displayed, now play ending sounds
        setTimeout(endingSound, 200); 
    }
}


function endingSound() {
    const bombSound = new Audio('audio/bomb-countdown.mp3');
    const endSound = new Audio('audio/winxp.mp3');

    bombSound.play();

    bombSound.addEventListener('ended', () => {
        endSound.play();

        endSound.addEventListener('ended', () => {
            window.location.href = "localHost2000.html";
        });
    });
}

