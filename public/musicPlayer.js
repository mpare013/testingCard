document.addEventListener("DOMContentLoaded", function() {
    const songs = [
        'audio/K.mp3', 
        'audio/sweet.mp3', 
        'audio/apocalypse.mp3'
    ];

    let currentSongIndex = 0;

    const musicPlayerSong = document.getElementById("musicPlayerSong");

    // Check if the audio element is found
    if (!musicPlayerSong) {
        console.error("Audio element not found!");
        return;  // Exit if there's no audio element
    }

    // Set initial song source
    musicPlayerSong.src = songs[currentSongIndex];

    function playSong() {
        console.log("Attempting to play the song...");
        musicPlayerSong.play().then(() => {
            console.log("Song is playing!");
        }).catch((error) => {
            console.error("Error playing the song:", error);
        });
    }

    function stopSong() {
        musicPlayerSong.pause();
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;  // Loop through songs
        if (musicPlayerSong) {
            musicPlayerSong.src = songs[currentSongIndex];  // Set new song source
            updateTrackNumber();  // Update track number on the UI
            playSong();  // Play the next song
        } else {
            console.error("Audio element is not available.");
        }
    }

    function previousSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;  // Loop through songs
        if (musicPlayerSong) {
            musicPlayerSong.src = songs[currentSongIndex];  // Set new song source
            updateTrackNumber();  // Update track number on the UI
            playSong();  // Play the previous song
        } else {
            console.error("Audio element is not available.");
        }
    }

    function updateTrackNumber() {
        document.getElementById("trackNumber").textContent = currentSongIndex + 1;  // Display track number
    }

    musicPlayerSong.addEventListener("timeupdate", () => {
        const currentTime = musicPlayerSong.currentTime;
        const minutes = Math.floor(currentTime / 60);
        const seconds = Math.floor(currentTime % 60);
        document.getElementById("minuteNumber").textContent = `${minutes < 10 ? '0' + minutes : minutes}:`;
        document.getElementById("secondNumber").textContent = seconds < 10 ? `0${seconds}` : seconds;
    });

    musicPlayerSong.addEventListener("ended", () => {
        playSong();  // Restart the same song when it ends
    });

    // Event listeners for buttons
    document.getElementById("play").addEventListener("click", playSong);
    document.getElementById("stop").addEventListener("click", stopSong);
    document.querySelector(".previous").addEventListener("click", previousSong);
    document.querySelector(".next").addEventListener("click", nextSong);
});