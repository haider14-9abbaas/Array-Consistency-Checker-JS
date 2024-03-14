document.write("JavaScript Connected");

var array = [1, 2, 3, 5, 6, 7];
var commonDifference = array[1] - array[0];
var isConsistent = true;

for (var i = 1; i < array.length - 1; i++) {
    var currentDifference = array[i + 1] - array[i];
    if (currentDifference !== commonDifference) {
        isConsistent = false;
        break;
    }
}

if (isConsistent) {
    var message = "The array is consistent.";
    alert(message);
    console.log(message);
} else {
    var message = "The array is not consistent.";
    alert(message);
    console.log(message);
}
