// let display = document.getElementById("display");

// function append(value){
//     display.value += value;
// }

// function clearDisplay(){
//     display.value = "";
// }

// function calculate(){
//     display.value = eval(display.value);
// }
// function square(){
// display.value = Math.pow(display.value,2);
// }

// function cube(){
// display.value = Math.pow(display.value,3);
// }

// function squareRoot(){
// display.value = Math.sqrt(display.value);
// }
let display = document.getElementById("display");

function append(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
}

function deleteLast(){
display.value = display.value.slice(0,-1);
}

function calculate(){
try{
display.value = eval(display.value);
}
catch{
display.value = "Error";
}
}

function square(){
display.value = Math.pow(display.value,2);
}

function cube(){
display.value = Math.pow(display.value,3);
}

function squareRoot(){
display.value = Math.sqrt(display.value);
}