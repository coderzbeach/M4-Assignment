function countdown() {
    let userEntryNum = parseInt(prompt("Enter a number for a countdown."))

    if (isNaN(userEntryNum) || userEntryNum < 0) {
        alert("Number must be positive.");
        return;
    }

for (let i = userEntryNum; i >= 0; i--) {
    console.log(i);
}
}
countdown();
