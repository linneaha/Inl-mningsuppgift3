let switchMode = document.querySelector("#switchMode");
let getResult = document.querySelector("#getResult");

// dark/light-mode
switchMode.addEventListener("click", () => {
    let body = document.body;
    let font = document.querySelector("#content");

    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "bisque";
    } else {
        body.style.backgroundColor = "black";
    }
    if (font.style.color === "bisque") {
       font.style.color = "black";
    } else {
        font.style.color = "bisque";
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
let alt1 = document.querySelector("#checkbox1")
let alt2 = document.querySelector("#checkbox2")
let alt3 = document.querySelector("#checkbox3")
let wrongAnswer = document.querySelector("#checkbox4")

getResult.addEventListener("click", () => {
    let points = 0;
    questions.forEach (btn => {
        if (btn.checked && btn.value === "correct") {
        points++;
    }
    })

    if (alt1.checked && alt2.checked && alt3.checked && wrongAnswer.checked === false) {
        points++;
    }
        
    if (points === 7) {
        displayResult.innerHTML = `Amount of correct answers: ${points}`;
        displayResult.style.color = "green";
    } else if (points >= 4) {
        displayResult.innerHTML = `Amount of correct answers: ${points}`;
        displayResult.style.color = "orange";
    } else {
        displayResult.innerHTML = `Amount of correct answers: ${points}`;
        displayResult.style.color = "red";
    }
});
