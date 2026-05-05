// ==============================
// Quiz Grading Function
// ==============================
function gradeQuiz() {
    let score = 0;

    // Question 1: Fill in the blank
    let q1 = document.getElementById("q1").value.toLowerCase().trim();
    if (q1 === "hypertext") score++;

    // Question 2: Multiple choice
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "GET") score++;

    // Question 3
    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "speed") score++;

    // Question 4
    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "QUIC") score++;

    // Question 5: Multiple select
    let q5 = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(x => x.value);

    if (q5.includes("stateless") && q5.includes("encrypted") && q5.length === 2) {
        score++;
    }

    // Display result
    document.getElementById("results").innerHTML =
        `<h2>Your Score: ${score}/5</h2>`;
}


// ==============================
// Reset Quiz Function
// ==============================
function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("results").innerHTML = "";
}
