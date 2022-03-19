alert("Welcome to the Love Calculator!");
var firstName = prompt("What is your name?");
var secondName = prompt("What is the name of the person you would like to calculate?");

var match = Math.floor(Math.random()*100);

if (match >= 70) {
    alert(firstName + " and " + secondName + " have a MAGESTIC matching score of " + match + "%");
} 

if (match >= 50 && match <70){
     alert(firstName + " and " + secondName + " have a GOOD matching score of " + match + "%");
}

else {
    alert(firstName + " and " + secondName + " have a matching score of " + match + "%");
}