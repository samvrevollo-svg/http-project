function gradeQuiz() {
    let score = 0;
    let total = 5;
    let output = "";

    // helper for cards
    function resultCard(question, correct, correctAnswer) {
        let color = correct ? "#22c55e" : "#ef4444";
        let text = correct ? "Correct" : "Incorrect";

        return `
        <div style="
            background:#fff7f5;
            padding:15px;
            margin:10px 0;
            border-radius:15px;
            border-left:6px solid ${color};
            text-align:left;
        ">
            <strong>${question}</strong><br>
            <span style="color:${color}; font-weight:bold;">${text}</span>
            ${!correct ? `<div style="font-size:0.9em; color:#555;">Answer: ${correctAnswer}</div>` : ""}
        </div>
        `;
    }

    // Q1
    let q1 = document.getElementById("q1").value.toLowerCase();
    let c1 = q1 === "hypertext";
    if (c1) score++;
    output += resultCard("Q1", c1, "Hypertext");

    // Q2
    let q2 = document.querySelector('input[name="q2"]:checked');
    let c2 = q2 && q2.value === "GET";
    if (c2) score++;
    output += resultCard("Q2", c2, "GET");

    // Q3
    let q3 = document.querySelector('input[name="q3"]:checked');
    let c3 = q3 && q3.value === "speed";
    if (c3) score++;
    output += resultCard("Q3", c3, "Speed");

    // Q4
    let q4 = document.querySelector('input[name="q4"]:checked');
    let c4 = q4 && q4.value === "QUIC";
    if (c4) score++;
    output += resultCard("Q4", c4, "QUIC");

    // Q5
    let q5 = document.querySelectorAll('input[name="q5"]:checked');
    let answers = Array.from(q5).map(el => el.value);
    let c5 = answers.includes("stateless") && answers.includes("encrypted") && answers.length === 2;
    if (c5) score++;
    output += resultCard("Q5", c5, "Stateless + Encrypted");

    let pass = score >= 3;

    document.getElementById("results").innerHTML = `
        <div style="
            background:#fff7f5;
            padding:20px;
            border-radius:20px;
        ">
            <h2 style="color:${pass ? '#22c55e' : '#ef4444'};">
                ${pass ? "You Passed 🎉" : "Try Again 💔"}
            </h2>
            <p style="font-size:18px;">Score: ${score}/${total}</p>
            ${output}
        </div>
    `;
}

function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("results").innerHTML = "";
}
