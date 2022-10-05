let balance = 679;

function decrease(subtrahend) {
    balance = balance - subtrahend;
}
function increase(addition) {
    balance = balance + addition;
}
let operation = prompt("Do you want to decrease or increase your balance?");
switch (operation) {
    case "decrease":
    case "-":
        let subtrahend = Number(prompt("How much do you want to decrease your balance?"));
        while (subtrahend > balance || isNaN(subtrahend)) { subtrahend = prompt("Enter a valid value"); }
        decrease(subtrahend);
        alert("Your balance: " + balance);
        break;
    case "increase":
    case "+":
        let addition = Number(prompt("How much do you want to increase your balance?"));
        while (isNaN(addition)) { addition = prompt("Enter a valid value"); }
        increase(addition);
        alert("Your balance: " + balance);
        break
    default:
        alert("Your balance: " + balance);
        break;

}
