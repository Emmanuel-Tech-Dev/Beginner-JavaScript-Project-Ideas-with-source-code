function calculatorTip() {
    // declare are needed variables for your calculator
    var billAmount = document.getElementById("billamt").value;
    var serviceQuality = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

    //Validation of the input take place HERE
    if (billAmount === "" || serviceQuality == 0) {
        alert("Please Enter Some Value");
        return;
    }
    //validate the input of the number of people rendering thier services
    if (numOfPeople === "" || numOfPeople <= 1) {
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculations Takes Place over here
    var total = (billAmount * serviceQuality) / numOfPeople;
    total = Math.round(total * 100) / 100;
    // round it to 2 decimal places
    total = total.toFixed(2);
    document.getElementById("toltip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
// Hide the tip amount before calculation 
document.getElementById("toltip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
    calculatorTip();
};