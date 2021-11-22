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
let displayResult = document.querySelector("#content"); 
let questions = document.querySelectorAll("[name = 'question1'], [name = 'question2'], [name = 'question3'], [name = 'question4'], [name = 'question5'], [name = 'question6']")
let question7 = document.querySelectorAll("[name = 'question7']")

let points = 0;
let checkboxChecked = [];

getResult.addEventListener("click", () => {

    questions.forEach (btn => {
        if (btn.checked && btn.value === "correct") {
        points++
    }
    })

    question7.forEach(btn => {
        if (btn.checked && btn.value === "correct") {
            checkboxChecked.push(btn)
            if (checkboxChecked.length === 3) {
                points++
            }
        } 
    });

    if (points === 7) {
        displayResult.innerHTML = `Dina poäng: ${points}`;
        displayResult.style.color = "green"
    } else if (points >= 4) {
        displayResult.innerHTML = `Dina poäng: ${points}`;
        displayResult.style.color = "yellow"
    } else {
        displayResult.innerHTML = `Dina poäng: ${points}`;
        displayResult.style.color = "red"
    }
});
