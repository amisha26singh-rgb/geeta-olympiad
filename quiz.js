const quiz = [
  {
    question: "Who spoke the Bhagavad Gita?",
    options: ["Krishna", "Arjuna", "Vyasa", "Bhishma"],
    answer: 0
  },
  {
    question: "How many chapters are in the Gita?",
    options: ["12", "15", "18", "20"],
    answer: 2
  }
];

let i = 0;

function load() {
  document.getElementById("question").innerText = quiz[i].question;
  document.getElementById("options").innerHTML = "";

  quiz[i].options.forEach((opt, idx) => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => check(idx);
    document.getElementById("options").appendChild(btn);
  });
}

function check(selected) {
  if (selected === quiz[i].answer) {
    document.getElementById("feedback").innerText = "Correct";
  } else {
    document.getElementById("feedback").innerText =
      "Wrong. Correct: " + quiz[i].options[quiz[i].answer];
  }
}

function nextQuestion() {
  i++;
  if (i < quiz.length) load();
  else alert("Exam finished");
}

load();
