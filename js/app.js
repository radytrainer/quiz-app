let data = [
  {
    user: {
      name: "John Smith",
      email: "john.smith@gmail.com",
    },
  },
];

let questions = [
  {
    id: 1,
    Q: "What is HTML?",
    choice: [
      { answer: false, quest: "HTML" },
      { answer: false, quest: "HTML" },
      { answer: true, quest: "HTML" },
      { answer: false, quest: "HTML" },
    ],
  },
  {
    id: 2,
    Q: "What is CSS?",
    choice: [
      { answer: false, quest: "HTML" },
      { answer: false, quest: "HTML" },
      { answer: true, quest: "HTML" },
      { answer: false, quest: "HTML" },
    ],
  },
  {
    id: 3,
    Q: "What is JS?",
    choice: [
      { answer: false, quest: "HTML" },
      { answer: false, quest: "HTML" },
      { answer: true, quest: "HTML" },
      { answer: false, quest: "HTML" },
    ],
  },
];

const qContainer = document.querySelector(".qcontainer");
const action = document.createElement('div');
action.className = "action"
const btnSubmit = document.createElement('button');
btnSubmit.classList.add('btn-submit');
btnSubmit.textContent = "Submit";

action.appendChild(btnSubmit);
let counter = 0;
for (let question of questions) {
  const container = document.createElement("div");
  container.classList.add("container");
  container.classList.add("quest");

  const ol = document.createElement("ol");
  const qTitle = document.createElement("p");
  qTitle.textContent = question.Q;
  ol.appendChild(qTitle);
  let choiceOfQ = question.choice;

  for (let answer of choiceOfQ) {
    
    const li = document.createElement("li");
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute('name', 'question' + counter);
    if (answer.answer) {
        radio.setAttribute('value', '1');
    }else {
        radio.setAttribute('value', '0');
    }
    const label = document.createElement("label");
    label.textContent = answer.quest;
    li.appendChild(radio);
    li.appendChild(label);
    ol.appendChild(li);
}
counter++;

  container.appendChild(ol);
  qContainer.appendChild(container);
}
qContainer.appendChild(action);

let result = 0;
let score = document.querySelector('.score');
function submitScore(e) {
    e.preventDefault();
   
    const all = document.querySelectorAll('input[type="radio"]');
    
    for (let answer of all) {
        if (answer.checked) {
            result += parseInt(answer.value);
        }
    }

    score.textContent = result + "/" + questions.length;

    result = 0;
}

btnSubmit.addEventListener('click', submitScore);

