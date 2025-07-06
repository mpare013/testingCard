function makeDraggable(windowEl) {
    const windowTop = windowEl.querySelector('.window-top');

    if (!windowTop) return;

    let offsetX = 0, offsetY = 0;
    let isDragging = false;

    const onMouseDown = (e) => {
        e.preventDefault(); // Prevent text selection

        // Get initial mouse position relative to the window
        const rect = windowEl.getBoundingClientRect();
        offsetX = e.clientX - windowEl.offsetLeft;
        offsetY = e.clientY - windowEl.offsetTop;


        isDragging = true;

        // Bring to front
        windowEl.style.zIndex = getMaxZIndex() + 1;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;

        const newLeft = e.clientX - offsetX;
        const newTop = e.clientY - offsetY;

        windowEl.style.left = `${newLeft}px`;
        windowEl.style.top = `${newTop}px`;
    };

    const onMouseUp = () => {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    windowTop.addEventListener('mousedown', onMouseDown);
}


// Function to get the maximum z-index of all windows
function getMaxZIndex() {
    let maxZIndex = 0;
    document.querySelectorAll('.window').forEach(windowEl => {
        const zIndex = parseInt(windowEl.style.zIndex, 10) || 0;
        maxZIndex = Math.max(maxZIndex, zIndex);
    });
    return maxZIndex;
}

// Function to bring the window to the front
function bringWindowToFront(windowEl) {
    const currentMaxZIndex = getMaxZIndex();
    windowEl.style.zIndex = currentMaxZIndex + 1;
}



function closePops(windowEl) {
    // hide but not get rid of the specific window that the close button was clicked in
    windowEl.style.display = "none";
}

// open  windows with draggable functionality
function openPops() {
    const errorSoundPath = 'audio/errorSound.mp3';
    const numberOfPopups = 20;

    const maxX = document.documentElement.clientWidth;
    const maxY = document.documentElement.clientHeight;

    const snotWindowTemplate = document.getElementById("window40");
    const inboxIndex = document.getElementById('window2');
    const errorInternetIndex = document.getElementById('window60');
    for (let i = 0; i < numberOfPopups; i++) {
        setTimeout(() => {
            const newWindow = snotWindowTemplate.cloneNode(true);

            newWindow.style.display = "block";
            newWindow.style.position = "absolute"; 
            newWindow.classList.add('snot-window');

            // random position for the new window
            const randomX = Math.random() * (maxX - newWindow.offsetWidth); 
            const randomY = Math.random() * (maxY - newWindow.offsetHeight);

            newWindow.style.left = `${randomX}px`;
            newWindow.style.top = `${randomY}px`;

            // Set an initial z-index for all windows
            inboxIndex.style.zIndex = 1;

            // Add event listener to update z-index when clicked
            newWindow.addEventListener("click", () => {
                // Set the highest z-index when clicked
                newWindow.style.zIndex = getMaxZIndex() + 1;
            });


            const closeButton = newWindow.querySelector('.btn'); // Assuming the button has class .btn
            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    closePops(newWindow); // Close the current window
                });
            }

            // Make the new window draggable by the .window-top
            makeDraggable(newWindow);

            document.body.appendChild(newWindow);

            // Play sound on each popup appearance
            const sound = new Audio(errorSoundPath);
            sound.play();
        }, i * 100); 
    }
}


document.querySelectorAll('.window').forEach(windowEl => {
    makeDraggable(windowEl);

    // Whenever the window is interacted with (mousedown = click/drag start), bring it to front
    windowEl.addEventListener('mousedown', () => {
        bringWindowToFront(windowEl);
    });
});


document.addEventListener('click', e => {
  if (e.target.closest('.btn')) {
    const windowEl = e.target.closest('.window');
    if (windowEl) {
      windowEl.style.display = "none"; 
    }
  }
});


    document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start');
    const startMenuContainer = document.getElementById('startMenuContainer');





    document.addEventListener('click', (e) => {
        if (!startBtn.contains(e.target) && !startMenuContainer.contains(e.target)) {
            startMenuContainer.style.display = 'none'; 
        }
    });
});
