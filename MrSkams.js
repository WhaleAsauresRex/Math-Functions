
var mrSkam = Math.floor(Math.random()*6+1);
if ((mrSkam<1)||(mrSkam>6)||isNaN(mrSkam)){
window.alert("FOOLLOW THE RULLES");
}
else{
var playerTwo = prompt("Choose a number between 1-6! No decimals!");
var playerTwo = Math.floor(parseInt(playerTwo));
if (mrSkam==playerTwo){
window.alert("YOU WIN");
}
else{
window.alert("Mr.Skams answer was "+mrSkam);
window.alert("Player two's answer was "+playerTwo);
}
}