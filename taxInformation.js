const correctUTax = 'chroma';
const correctPTax = '#8A9A5B';
// chroma #8A9A5B
function goTax() {
    const uTaxUser = document.getElementById('uTax').value.toLowerCase().trim();
    const pTaxUser = document.getElementById('pTax').value.trim();

    if (uTaxUser === correctUTax && pTaxUser === correctPTax) {
        document.getElementById('window13').style.display = "block";
        document.getElementById('window11').style.display= "none";

    } else {
        const errorSound = new Audio('audio/errorSound.mp3');
        errorSound.play();
        document.getElementById('window27').style.display = 'block';
        bringWindowToFront("window27")
    }
}
