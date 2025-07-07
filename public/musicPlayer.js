
const songs = [
    'audio/K.mp3', 
    'audio/sweet.mp3', 
    'audio/apocalypse.mp3'
];

let currentSongIndex = 0;

const musicPlayerSong = document.getElementById("musicPlayerSong");
musicPlayerSong.src = songs[currentSongIndex];

function playSong() {
    console.log("Attempting to play the song...");
    
    // Try to play the song and handle any errors
    musicPlayerSong.play().then(() => {
        console.log("Song is playing!");
    }).catch((error) => {
        console.error("Error playing the song:", error);
    });
}
function stopSong() {
    musicPlayerSong.pause();
    musicPlayerSong.currentTime = 0; 
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;  // Loop through songs
    musicPlayerSong.src = songs[currentSongIndex];  // Set new song source
    playSong();  // Play the next song
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;  // Loop through songs
    musicPlayerSong.src = songs[currentSongIndex];  // Set new song source
    playSong();  // Play the previous song
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
    playSong();  // Proceed to next song when the current one ends
});

