 
 // dark/light-mode
 document.querySelector("#switchMode").addEventListener("click", () => {
    let body = document.body;
    if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "bisque";
    } else {
    body.style.backgroundColor = "black";
    }
 })

 // 