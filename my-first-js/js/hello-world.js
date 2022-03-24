function oldFunction() {
    console.log("The old function");
}

let newerFunction = function() {
    console.log("The newer function");
}

const newestFunction = () => {
    console.log("The newest function");
}

const add1 = (num) => {
    console.log(`The value of num ${num + 1}`);
}

console.log("The script is being loaded");

const loaded = (msg) => {
    console.log(`The HTML is loaded. Msg is ${msg}`);
    let inputCtrl = document.getElementById("inp8");
    inputCtrl.value = msg;
}

console.log("The script has been loaded");