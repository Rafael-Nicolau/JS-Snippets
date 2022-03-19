var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whoIsPaying() {
    var i = Math.floor(Math.random()*names.length);
    return names[i] + " is going to buy lunch today!";
}

whoIsPaying();