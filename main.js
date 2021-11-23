let switchMode = document.querySelector("#switchMode");
let getResult = document.querySelector("#getResult");

// dark/light-mode
switchMode.addEventListener("click", () => {
    let body = document.body;
    let font = document.querySelector("#content");

    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "blanchedalmond";
        switchMode.style.backgroundColor = "blanchedalmond";
        getResult.style.backgroundColor = "blanchedalmond";
    } else {
        body.style.backgroundColor = "black";
        switchMode.style.backgroundColor = "black";
        getResult.style.backgroundColor = "black";
    }
    if (font.style.color === "blanchedalmond") {
       font.style.color = "black";
       switchMode.style.color = "black";
       getResult.style.color = "black";
    } else {
        font.style.color = "blanchedalmond";
        switchMode.style.color = "blanchedalmond";
        getResult.style.color = "blanchedalmond";
    }
    if (switchMode.textContent === "Dark Mode") {
        switchMode.textContent = "Light Mode";
    } else {
        switchMode.textContent = "Dark Mode";
    }
 })

// quiz-funktionalitet & visa resultat
let displayResult = document.querySelector(".showResult"); 
let questions = document.querySelectorAll("[name = 'question1'], [name = 'question2'], [name = 'question3'], [name = 'question4'], [name = 'question5'], [name = 'question6']");
let check1 = document.querySelector("#checkbox1")
let check2 = document.querySelector("#checkbox2")
let check3 = document.querySelector("#checkbox3")
let check4 = document.querySelector("#checkbox4")

getResult.addEventListener("click", () => {
    let points = 0;
    questions.forEach (btn => {
        if (btn.checked && btn.value === "correct") {
        points++;
    }
    })

    if (check1.checked && check2.checked && check3.checked && check4.checked === false) {
        points++;
    }
        
    if (points === 7) {
        displayResult.innerHTML = `Amount of correct answers: ${points}`;
        displayResult.style.color = "green";
        displayResult.style.textAlign = "center";
    } else if (points >= 7*0.5) { 
        displayResult.innerHTML = `Amount of correct answers: ${points}`;
        displayResult.style.color = "DarkOrange";
        displayResult.style.textAlign = "center";
    } else {
        displayResult.innerHTML = `Amount of correct answers: ${points}`;
        displayResult.style.color = "red";
        displayResult.style.textAlign = "center";
    }
});
