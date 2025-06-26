const correctUsernameTax = 'chroma';
const correctPasswordTax = '#8A9A5B';
// chroma #8A9A5B
function loginTax() {
    const usernameTaxUser = document.getElementById('usernameTax').value.toLowerCase().trim();
    const passwordTaxUser = document.getElementById('passwordTax').value.trim();

    if (usernameTaxUser === correctUsernameTax && passwordTaxUser === correctPasswordTax) {
        document.getElementById('window13').style.display = "block";
        document.getElementById('window11').style.display= "none";

    } else {
        const errorSound = new Audio('audio/errorSound.mp3');
        errorSound.play();
        document.getElementById('window27').style.display = 'block';
        bringWindowToFront("window27")
    }
}
