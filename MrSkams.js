
var mrSkam = prompt("Choose a number bewtween 1-6!");
if ((mrSkam<1)||(mrSkam>6)||isNaN(mrSkam)){
window.alert("FOOLLOW THE RULLES");
}
else{
var playerTwo = prompt("Choose a number between 1-6!");
if (mrSkam==playerTwo){
window.alert("YOU WIN");
}
else{
window.alert("Mr.Skams answer was "+mrSkam);
window.alert("Player two's answer was "+playerTwo);
}
}