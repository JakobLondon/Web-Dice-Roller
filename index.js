function rollDice() {
    document.getElementById("die1").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("die2").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("die3").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("die4").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("die5").value = Math.floor(Math.random()*6) + 1;
}