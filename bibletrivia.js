let trivia = [
    {
        question: "Who were the first man and woman",
        answer: "Adam and Eve",
        distractors:[
            "Ruth and Boas",
            "sarah and abraham",
            "ester and king",
        ]
    },
    {
        question: "Who built the Ark to survive the flood",
        answer: "Noah",
        distractors:[
            "Abraham",
            "Joseph",
            "Jacob",
        ]
    },
    {
        question: "How many days and nights did it rain during the flood",
        answer: "40 days and 40 night",
        distractors:[
            "65 days and 65 night",
            "50 days and 50 night",
            "30 days and 30 nights",
        ]
    },
    {
        question: "What was the sign of God’s covenant with Noah",
        answer: "Rainbow",
        distractors:[
            "Burning bush",
            "Scrolls",
            "cock crows",
        ]
    },
    {
        question: "Who was the father of many nations",
        answer: "Abraham",
        distractors:[
            "Joseph",
            "Jacob",
            "Jesus",
        ]
    },
    {
        question: "Whats the first book of the bible",
        answer: "Genesis",
        distractors:[
            "Mark",
            "Luke",
            "John",
        ]
    },
    {
        question: "What was Joseph’s special gift from his father",
        answer: "coat of many colors",
        distractors:[
            "staff",
            "rod",
            "blessing",
        ]
    },
    {
        question: "Who was Abraham’s first son",
        answer: "Ishmael",
        distractors:[
            "Isaac",
            "luke",
            "john",
        ]
    },
    {
        question: "Who did Jacob wrestle with until daybreak",
        answer: "God",
        distractors:[
            "satan",
            "Zac",
            "Luke",
        ]
    },
    {
        question: "How old was Abraham when Isaac was born",
        answer: "100",
        distractors:[
            "90",
            "99",
            "110",
        ]
    },
    {
        question: "Who was the mother of Ishmael",
        answer: "Hagar",
        distractors:[
            "eve",
            "deborah",
            "rhea",
        ]
    },
    {
        question: "Who was turned into a pillar of salt",
        answer: "Lot's wife",
        distractors:[
            "sarah",
            "esther",
            "ruth",
        ]
    },
    {
        question: "The first murder in the Bible was Abel",
        answer: "True",
        distractors:[
            "False",
        ]
    },
    {
        question: "Ham, Shem and Japheth were the sons of Noah",
        answer: "True",
        distractors:[
            "False"
        ]
    },
    {
        question: "Moses fled from Pharaoh to Midian because he killed an Egyptian",
        answer: "True",
        distractors:[
            "False",
        ]
    },
    {
        question: ": Ishmael was Abraham's first son in the Bible",
        answer: "True",
        distractors:[
            "False",
        ]
    },
    {
        question: ": Moses led the children of Israel through river Jordan into the Promised Land.",
        answer: "False",
        distractors:[
            "True",
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;

function displayTrivia(trivia) {
    if (currentQuestionIndex < trivia.length) {
        const questionObj = trivia[currentQuestionIndex];
        const choices = [...questionObj.distractors, questionObj.answer].sort(() => Math.random() - 0.5);

        document.getElementById('question').innerText = questionObj.question;
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        choices.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice;
            button.classList.add('btn', 'btn-primary', 'm-2');
            button.onclick = () => checkAnswer(choice, questionObj.answer);
            choicesContainer.appendChild(button);
        });
    } else {
        document.getElementById('question').innerText = 'Trivia Completed!';
        document.getElementById('choices').innerHTML = '';
        document.getElementById('score').innerText = `Your final score is: ${score}`;
    }
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
    }
    currentQuestionIndex++;
    displayTrivia(trivia);
}

document.addEventListener('DOMContentLoaded', () => {
    displayTrivia(trivia);
});
