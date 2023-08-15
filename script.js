// Questions that will be asked
const Questions = [
    {
        question:
            "Jag gillar att arbeta i mindre grupper - Jag gillar att arbeta i stora grupper",
        idx: 0,
        answer: [
            { text: "1", isCorrect: false },
            { text: "2", isCorrect: false },
            { text: "3", isCorrect: false },
            { text: "3", isCorrect: true },
            { text: "4", isCorrect: false },
        ],
    },
    {
        question:
            "Jag är inte intresserad av att ha kontakt med företag - Jag är intresserad av att ha kontakt med företag",
        idx: 1,
        answer: [
            { text: "1", isCorrect: false },
            { text: "2", isCorrect: false },
            { text: "3", isCorrect: false },
            { text: "3", isCorrect: true },
            { text: "4", isCorrect: false },
        ],
    },
    {
        question:
            "Jag önskar att inte behöva vara service minded- Jag älskar att vara serviceminded",
        idx: 2,
        answer: [
            { text: "1", isCorrect: false },
            { text: "2", isCorrect: false },
            { text: "3", isCorrect: false },
            { text: "3", isCorrect: true },
            { text: "4", isCorrect: false },
        ],
    },
    {
        question:
            "Jag tycker det är bekvämt när någon säger till mig vad jag ska göra - Jag gillar att ta iniativ",
        idx: 3,
        answer: [
            { text: "1", isCorrect: false },
            { text: "2", isCorrect: false },
            { text: "3", isCorrect: false },
            { text: "3", isCorrect: true },
            { text: "4", isCorrect: false },
        ],
    },
    {
        question: "Jag har ett särskilt intresse att",
        idx: 4,
        answer: [
            { text: "Fota", isCorrect: false },
            { text: "Filma", isCorrect: false },
            { text: "Arbeta med el och teknik", isCorrect: true },
            { text: "Inreda", isCorrect: false },
            { text: "Testa appar", isCorrect: false },
            { text: "Arbeta fysiskt", isCorrect: false },
        ],
    },
];

// Host role followed by index of the question followed by the points for this specific role from choice 1-5
// Also contains a description for the role what it means to do in this role
const Scoring = [
    {
        Banquet: {
            0: [1, 1, 2, 3, 4],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [1, 2, 3, 4, 5],
            4: [0, 0, 0, 0, 0, 0],
            Description: "Banquet",
        },
        Company: {
            0: [5, 4, 3, 2, 1],
            1: [1, 3, 5, 6, 7],
            2: [1, 2, 3, 4, 5],
            3: [1, 2, 3, 4, 5],
            4: [0, 0, 0, 0, 0, 0],
            Description: "Company",
        },
        Event: {
            0: [2, 2, 2, 3, 4],
            1: [1, 2, 3, 4, 5],
            2: [1, 1, 2, 3, 4],
            3: [5, 4, 3, 2, 2],
            4: [0, 0, 0, 0, 0, 0],
            Description: "Event",
        },
        Film: {
            0: [5, 4, 3, 2, 1],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [2, 2, 2, 3, 3],
            4: [0, 5, 0, 0, 0, 0],
            Description: "Film",
        },
        Info_Desk: {
            0: [1, 2, 3, 4, 5],
            1: [1, 1, 1, 2, 3],
            2: [1, 2, 3, 4, 5],
            3: [5, 4, 3, 2, 1],
            4: [0, 0, 0, 0, 0, 0],
            Description: "Info Desk",
        },
        Interior: {
            0: [1, 2, 3, 2, 1],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [1, 2, 3, 4, 5],
            4: [0, 0, 0, 5, 0, 0],
            Description: "Interior",
        },
        Logistics: {
            0: [3, 4, 3, 2, 1],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [1, 2, 3, 4, 5],
            4: [0, 0, 0, 0, 0, 5],
            Description: "Logistics",
        },
        Lounge: {
            0: [1, 2, 3, 4, 5],
            1: [1, 1, 1, 2, 3],
            2: [1, 2, 3, 4, 5],
            3: [5, 4, 3, 2, 1],
            4: [0, 0, 0, 0, 0, 0],
            Description: "Lounge",
        },
        Lunch: {
            0: [1, 2, 3, 4, 5],
            1: [1, 1, 1, 2, 3],
            2: [1, 2, 3, 4, 5],
            3: [5, 4, 3, 2, 1],
            4: [0, 0, 0, 0, 0, 0],
            Description: "Lunch",
        },
        PSN: {
            0: [3, 4, 3, 2, 1],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [1, 2, 3, 4, 5],
            4: [0, 0, 5, 0, 0, 0],
            Description: "PSN",
        },
        Photo: {
            0: [5, 4, 3, 2, 1],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [2, 2, 2, 3, 3],
            4: [5, 0, 0, 0, 0, 0],
            Description: "Photo",
        },
        Student_Sessions: {
            0: [5, 4, 3, 2, 1],
            1: [1, 2, 3, 4, 5],
            2: [1, 2, 3, 4, 5],
            3: [1, 2, 2, 2, 3],
            4: [0, 0, 0, 0, 0, 0],
            Description: "Student Sessions",
        },
        Wardrobe: {
            0: [5, 4, 3, 2, 1],
            1: [1, 1, 1, 2, 3],
            2: [1, 1, 2, 3, 4],
            3: [6, 5, 4, 2, 1],
            4: [0, 0, 0, 0, 0, 0],
            Description: "Wardrobe",
        },
        QA: {
            0: [4, 4, 3, 2, 1],
            1: [4, 4, 3, 2, 1],
            2: [4, 4, 3, 2, 1],
            3: [1, 2, 3, 4, 4],
            4: [0, 0, 0, 0, 5, 0],
            Description: "QA",
        },
    },
];

let currQuestion = 0;
let score = 0;

function loadQues() {
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].question;
    opt.innerHTML = "";

    for (let i = 0; i < Questions[currQuestion].answer.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].answer[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

loadQues();

function loadScore() {
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
}

function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove();
        document.getElementById("ques").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}

function checkAns() {
    const selectedAns = parseInt(
        document.querySelector('input[name="answer"]:checked').value
    );

    if (Questions[currQuestion].answer[selectedAns].isCorrect) {
        score++;
        console.log("Correct");
        nextQuestion();
    } else {
        nextQuestion();
    }
}
