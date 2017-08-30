var person = {
name:"brian",
age:15,
grade: 10,
friends : [
"Willaim",
"Jaden",
"Ian"
]
};
var house = {
name:"House",
age:5,
garden:true,
contents : [
"Tables",
"Food",
"Chairs"
]
};
var laptop = {
name:"ShamrockSham",
age:2,
Type:"gaming laptop",
games : [
"Csgo",
"League Of Legends",
"Terraria"
]
};
var x =[person,house,laptop];
window.alert(x[1].contents[0]);