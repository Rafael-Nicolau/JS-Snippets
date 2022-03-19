var beer = 99;

while (beer > 1) {
    console.log(beer + " bottles of beer on the wall, " + beer + " bottles of beer.");
    beer--;
    console.log("Take one down and pass it around, " + beer + " bottles of beer on the wall.");
}

if (beer == 1) {
    console.log(beer + " bottle of beer on the wall, " + beer + " bottle of beer.");
    beer--;
    console.log("Take one down and pass it around, no more bottles of beer on the wall.");
}
if (beer == 0) {
    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
}