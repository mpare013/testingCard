// Declare loggedIn properly
let loggedIn = false;
const correctUTNT = 'dietpepsi';
const correctPTNT = 'lunchbox';

function loginTNT() {
    const uTNT = document.getElementById('uTNT').value;
    const pTNT = document.getElementById('pTNT').value;

 
    if (uTNT === correctUTNT && pTNT === correctPTNT) {

        document.getElementById('endBlock').style.display = "block";
        document.getElementById('window18').style.display= "none";
        loggedIn = true;
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
    "DO YOU WANT TO PROCEED WITH DELETING FILES? YES/NO<br>",
    "<br>",
    "ERROR: NO RESPONSE DETECTED. DELETING FILES WITHOUT CONFIRMATION.<br>",
    "DELETION IN PROGRESS...<br>",
    "DELETING FILES: WINDOWS_ESSENTIALS...",
    "DELETING FILES: USER_PROFILE...",
    "WARNING: DELETE OPERATION MAY TAKE UP TO 10 MINUTES.<br>",
    
    "WARNING: THIS ACTION IS IRREVERSIBLE.<br>",
    "ALL BACKUP FILES DELETED.<br>",
    "DELETION COMMAND INITIATED.<br>",
    "ERROR: DELETE OPERATION FAILED.<br>",
    "ATTEMPTING TO FORCE DELETE FILES...<br>",
    "DELETING: ADMINISTRATIVE BACKUPS...<br>",
    "ERROR: SYSTEM FILES UNABLE TO BE DELETED.<br>",
    "<br>",
    "USER DATA DESTRUCTION IN PROGRESS.<br>",
    "WARNING: SYSTEM WILL TERMINATE.<br>",
    "FORCING SHUTDOWN IN 10 SECONDS.<br>",
    "DELETE FILES: SYSTEM CACHE...<br>",
    "ATTEMPTING TO DELETE: SYSTEM LOGS...<br>",
    "ERROR: SYSTEM LOGS CANNOT BE DELETED.<br>",
    "<br>",

    "<br>",
    "ERROR: SYSTEM COMPROMISED BEYOND REPAIR.<br>",
    "ALL AVAILABLE SYSTEM RESOURCES EXHAUSTED.<br>",
    "ATTEMPTING TO CORRUPT BACKUP FILES...<br>",
    "ERROR: FILE SYSTEM DAMAGE EXCESSIVE.<br>",
    "ATTEMPTING TO FORCE SHUTDOWN...<br>",
    "SYSTEM WILL RESTART IN 5 SECONDS.<br>",
    "<br>",
    "ERROR: UNSUCCESSFUL SYSTEM RECOVERY ATTEMPT.<br>",
    "ALL SYSTEM FILES PERMANENTLY CORRUPTED.<br>",
    "RECOVERY PROCEDURE INACTIVE.<br>",
    "SYSTEM RESTART INITIATED.<br>",
    "WARNING: SYSTEM WILL RESTART.<br>",
    "USER FILES PERMANENTLY LOST.<br>",

    "WARNING: TEMPERATURE TOO HIGH. SHUTTING DOWN SYSTEM.<br>",
    "ERROR: CPU OVERHEATING. SYSTEM WILL TERMINATE.<br>",
    "SYSTEM ERROR: TEMPERATURE EXCEEDS SAFETY LIMITS.<br>",
    "WARNING: GPU TEMPERATURE CRITICAL. THERMAL SHUTDOWN INITIATED.<br>",
    "<br>",
    "TEMPERATURE WARNING: SYSTEM IS OVERHEATING.<br>",
    "ALERT: CPU TEMPERATURE EXCEEDS 90°C.<br>",
    "THERMAL FAILURE DETECTED. SHUTTING DOWN NOW.<br>",
    "WARNING: TEMPERATURE CRITICAL. SYSTEM SHUTDOWN IN PROGRESS.<br>",
    "ERROR: COOLING SYSTEM MALFUNCTION. TEMPERATURE RISING.<br>",
    "<br>",
    "ALERT: SYSTEM OVERHEATED. IMMINENT DAMAGE DETECTED.<br>",
    "ERROR: SYSTEM COOLING INSUFFICIENT. HEAT DAMAGE POSSIBLE.<br>",
    "WARNING: SYSTEM COMPONENTS OVERHEATING. FILES MAY BE LOST.<br>",
    "ATTEMPTING TO LOWER TEMPERATURE... FAILED.<br>",
    "CRITICAL ALERT: HARDWARE WILL OVERHEAT IF TEMPERATURE CONTINUES TO RISE.<br>",
    "<br>",
    "TEMPERATURE WARNING: SHUTTING DOWN SYSTEM TO PREVENT DAMAGE.<br>",
    "CPU OVERHEAT: SYSTEM AUTOMATICALLY SHUTTING DOWN.<br>",
    "TEMPERATURE ABOVE SAFE LEVEL. SYSTEM WILL CRASH.<br>",
    "WARNING: SYSTEM IS TOO HOT TO CONTINUE.<br>",
    "ERROR: OVERHEAT DETECTED. SYSTEM FAILURE IMMINENT.<br>",

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

        // Play sound when typing is happening
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
        setTimeout(typeSnotText, 300);
    } else {
        // All lines have been displayed, now play ending sounds
        setTimeout(endingSound, 500); 
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

