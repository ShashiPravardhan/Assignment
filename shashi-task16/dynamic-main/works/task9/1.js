function calculate() {
    let score = parseFloat(document.getElementById("mark").value);
    let result = "";
    let resultColor = "";
    if (score >= 80) {
        result = "A";
        resultColor = "green";
    } else if (score >= 60 && score <= 79) {
        result = "B";
        resultColor = "green";
    } else if (score >= 40 && score <= 59) {
        result = "C";
        resultColor = "green";
    } else {
        result = "F";
        resultColor = "red";
    }
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = result;
    resultElement.style.color = resultColor;
 }