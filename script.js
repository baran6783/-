function calcSqrt() {
    const num = parseFloat(document.getElementById("sqrtInput").value);
    if (isNaN(num)) {
        document.getElementById("sqrtResult").innerText = "لطفاً یک عدد وارد کنید.";
    } else {
        document.getElementById("sqrtResult").innerText = "√" + num + " = " + Math.sqrt(num);
    }
}

function calcExp() {
    const base = parseFloat(document.getElementById("baseInput").value);
    const exp = parseFloat(document.getElementById("expInput").value);
    if (isNaN(base) || isNaN(exp)) {
        document.getElementById("expResult").innerText = "لطفاً هر دو عدد را وارد کنید.";
    } else {
        document.getElementById("expResult").innerText = base + "^" + exp + " = " + Math.pow(base, exp);
    }
}

function showAnswers() {
    document.getElementById("answerBox").style.display = "block";
}
