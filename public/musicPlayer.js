let musicPlayerSong = new Audio('audio/bananaShake.mp3');

function playSong() {
    musicPlayerSong.play();
}

function stopSong() {
    musicPlayerSong.pause();
    musicPlayerSong.currentTime = `${minutes}:`;
}

musicPlayerSong.addEventListener("timeupdate", () => {
    const currentTime = musicPlayerSong.currentTime;
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    
    document.getElementById("minuteNumber").textContent = `${minutes}:`;
    document.getElementById("secondNumber").textContent = seconds < 10 ? `0${seconds}` : seconds;
});