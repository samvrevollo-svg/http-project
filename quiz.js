function gradeQuiz() {
    let score = 0;
    let total = 5;
    let results = "";

    // Q1
    let q1 = document.getElementById("q1").value.toLowerCase();
    if (q1 === "hypertext") {
        score++;
        results += "<p style='color:green;'>Q1 Correct</p>";
    } else {
        results += "<p style='color:red;'>Q1 Incorrect (Answer: Hypertext)</p>";
    }

    // Q2
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "GET") {
        score++;
        results += "<p style='color:green;'>Q2 Correct</p>";
    } else {
        results += "<p style='color:red;'>Q2 Incorrect (Answer: GET)</p>";
    }

    // Q3
    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "speed") {
        score++;
        results += "<p style='color:green;'>Q3 Correct</p>";
    } else {
        results += "<p style='color:red;'>Q3 Incorrect (Answer: Speed)</p>";
    }

    // Q4
    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "QUIC") {
        score++;
        results += "<p style='color:green;'>Q4 Correct</p>";
    } else {
        results += "<p style='color:red;'>Q4 Incorrect (Answer: QUIC)</p>";
    }

    // Q5
    let q5 = document.querySelectorAll('input[name="q5"]:checked');
    let answers = Array.from(q5).map(el => el.value);

    if (answers.includes("stateless") && answers.includes("encrypted") && answers.length === 2) {
        score++;
        results += "<p style='color:green;'>Q5 Correct</p>";
    } else {
        results += "<p style='color:red;'>Q5 Incorrect</p>";
    }

    let pass = score >= 3 ? "PASS" : "FAIL";

    document.getElementById("results").innerHTML =
        `<h2>${pass}</h2>
         <p>Score: ${score}/${total}</p>
         ${results}`;
}

function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("results").innerHTML = "";
}
