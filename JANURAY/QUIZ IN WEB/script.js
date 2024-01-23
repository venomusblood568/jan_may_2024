const quizData = [
    {
        question: "What is the author of the book To Kill a Mockingbird?",
        a: "J.K. Rowling",
        b: "Harper Lee",
        c: "George Orwell",
        d: "Jane Austen",
        correct: "b",
    },
    {
        question: "Who wrote the book 1984?",
        a: "Ernest Hemingway",
        b: "F. Scott Fitzgerald",
        c: "George Orwell",
        d: "Aldous Huxley",
        correct: "c",
    },
    {
        question: "The book The Great Gatsby was penned by:",
        a: "Charles Dickens",
        b: "F. Scott Fitzgerald",
        c: "Emily Brontë",
        d: "Mark Twain",
        correct: "b",
    },
    {
        question: "Who is the author of Pride and Prejudice?",
        a: "Charlotte Brontë",
        b: "Jane Austen",
        c: "Leo Tolstoy",
        d: "Charles Dickens",
        correct: "b",
    },
    {
        question: "Which author is responsible for writing The Catcher in the Rye?",
        a: "J.D. Salinger",
        b: "Ray Bradbury",
        c: "Kurt Vonnegut",
        d: "John Steinbeck",
        correct: "a",
    },
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const scoreDisplay = document.getElementById('score');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
    const answerEls = document.querySelectorAll('.answer');
    answerEls.forEach(answerEl => (answerEl.checked = false));
}

function getSelected() {
    let answer;

    const answerEls = document.querySelectorAll('.answer');
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function updateScore() {
    scoreDisplay.innerText = `Score: ${score}/${quizData.length}`;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You reached the end of the quiz!</h2>
                <h2>Your final score is: ${score}/${quizData.length}</h2>
                <button onclick="location.reload()">Restart</button>`;
        }

        // Update and display the score
        updateScore();
    }
});

// Initial load of the quiz
loadQuiz();
updateScore(); // Display initial score
