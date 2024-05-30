"use strict";

const quizData = [
  {
      question: "You receive an email claiming to be from your bank, asking you to click on a link to verify your account details due to a security breach. What should you do?",
      a: "Click on the link and provide the requested information",
      b: "Forward the email to your friends for advice",
      c: "Ignore the email",
      d: "Call your bank to verify the authenticity of the email",
      correct: "d"
     },
     {
      question: "While using an ATM, you notice an unusual device attached to the card slot. What should you do?",
      a: "Ignore it and proceed with your transaction",
      b: "Report it to the bank staff immediately",
      c: "Take a picture and post it on social media for awareness",
      d: "Attempt to remove the device yourself",
      correct: "b"
     },
     {
      question: "You receive an unsolicited text message claiming that you've won a free vacation to an exotic destination. The message instructs you to call a certain number to claim your prize. What should you do?",

      a: "Call the number to claim the prize",
      b: "Save the number and send a message to ask for prize details",
      c: "Reply to the message asking for more details",
      d: "Block the number and delete the message",
      
      correct: "d"
      },
     {
      question: "You notice unauthorized transactions on your online banking statement. What should be your immediate action?",
      a: "Ignore them, assuming it's a mistake",
      b: "Contact the bank to report the fraudulent activity",
      c: "Share your account details on social media for assistance",
      d: "Wait for the next statement to confirm the transactions",
      correct: "b"
     },
     {
      question: "While accessing your mobile banking app in a crowded area, you realize someone is closely observing your screen. What should you do?",
      a: "Continue with your transaction, ignoring the observer",
      b: "Politely ask the person to step back",
      c: "Move to a more private location before continuing",
      d: "Share your login credentials with the observer for assistance",
      correct: "c"
     },
     {
      question: "You receive a text message claiming your account has been suspended and requesting immediate action to unlock it. What should you do?",
      a: "Follow the instructions provided in the text message",
      b: "Ignore the message, assuming it's a scam",
      c: "Reply to the message with your account details for verification",
      d: "Call your bank using the official number to inquire about the message",
      correct: "d"
     },
     {
      question: "While accessing your online banking account from a public computer, you forget to log out. What should you do?",
      a: "Leave the computer without logging out",
      b: "Return to the computer later to log out",
      c: "Change your password immediately from another device  ",
      d: "Inform the next user about your oversight",
      correct: "c"
     },
     {
      question: "Someone claiming to be from the tax department calls, alleging issues with your tax filings and demanding immediate payment by phone to avoid legal consequences. What's your next step?",

      a: "Make the payment as instructed to resolve the issue",
      b: "Hang up and call the tax department's official helpline to verify",
      c: "Provide your personal information for verification purposes",
      d: "Agree to a payment plan with the caller without verifying their identity",
      correct: "b"
    },
    {
      question: "While using online banking, you notice a pop-up window prompting you to download a software update for security purposes. What should you do?",
      a: "Proceed with the download immediately",
      b: "Ignore the pop-up and continue with your transaction",
      c: "Close the pop-up and update your software from the official website",
      d: "Share the pop-up on social media for advice",
      correct: "c"
    },
    {
      question: "A caller posing as your internet service provider claims your account is compromised and asks for remote computer access to resolve the issue. What action should you take?",

      a: "Grant remote access to allow them to resolve the issue",
      b: "Hang up the call and contact your internet service provider directly using their official contact information",
      c: "Share your login credentials with the caller to expedite the process",
      d: "Ask the caller for more details about the alleged compromise",
      
      correct: "b"
    
    },
    {
      question:"While browsing online, you come across a website offering unbelievable deals on designer goods. What should you do?",

      a: "Immediately make a purchase to take advantage of the amazing deals.",
      b: "Research the website for reviews and verify its authenticity before making any purchases.",
      c: "Share the website with friends so they can also benefit from the deals.",
      d: "Proceed with caution and make a small test purchase to assess the legitimacy of the website.",

      correct: "b"
    },
    {
      question: "While using a public Wi-Fi network at a coffee shop, you receive a prompt on your device asking you to update your software. What should you do?",

      a: "Immediately proceed with the software update",
      b: "Delay the update until you're on a secure network",
      c: "Ignore the update prompt and continue using the Wi-Fi",
      d: "Disconnect from the Wi-Fi network to avoid potential risks",
      correct: "b"
    },
    {
     question: "You receive an email with a link to a survey promising a gift card reward upon completion. What should you do?",
    a: "Click on the link and complete the survey to claim your reward",
    b: "Delete the email and mark it as spam",
    c: "Forward the email to your contacts to spread the opportunity",
    d: "Contact the company directly to confirm the legitimacy of the survey",

   correct: "d"
    },
    {
     question:"While installing a new application on your smartphone, you're prompted to grant extensive permissions to access your personal data. What should you do?",

     a: "Grant all permissions to install the application",
     b: "Review the permissions requested and only grant those necessary for the app's function",
     c: "Deny all permissions and refrain from installing the application",
     d: "Grant permissions and monitor the app's behavior afterward",
    correct: "b"
    },
    {
      question: "You receive a text message purportedly from a delivery service, informing you of a package awaiting delivery and requesting you to click on a link for details. What should you do?",

         a: "Click on the link to track your package",
         b: "Call the delivery service using their official contact information to verify the message",
         c: "Forward the message to your contacts for advice",
         d: "Ignore the message and delete it",
         correct: "b"    
},
    {
      question: "You receive a message on your computer screen claiming that your files have been encrypted and you must pay a ransom to regain access. What should you do?",
      a: "Pay the ransom to unlock your files",
      b: "Ignore the message and restart your computer",
      c: "Immediately contact a cybersecurity professional for assistance",
      d: "Follow the instructions in the message to decrypt your files",
      correct: "c"
    },
    {
      question: "You receive a phone call from someone claiming to be a government official requesting personal information like your social security number for verification purposes. What should you do?",

      a: "Provide the requested information to avoid any legal issues",
      b: "Politely decline and hang up",
      c: "Ask for the caller's credentials and verify their identity",
      d: "Give false information to test the caller's legitimacy",
      
      correct: "b"
    },
    {
      question: "While accessing your online banking account, you notice a message indicating that your session has timed out, followed by a prompt to log in again. What should you do?",
      a: "Enter your login credentials again to continue",
      b: "Ignore the message and close the browser",
      c: "Check the URL to ensure you're on the official banking website before logging in again",
      d: "Share your login credentials with a friend for assistance",
      correct : "c"
    },
    {
      "question": "You receive a letter in the mail claiming to be from your bank, asking you to update your account information by filling out a form and mailing it back. What should you do?",
      "a": "Fill out the form and mail it back as instructed",
      "b": "Ignore the letter, assuming it's a scam",
      "c": "Contact your bank using the official number to verify the authenticity of the letter",
      "d": "Share the letter with friends and family for advice",
      correct: "c"
    },
    {
      question: "A caller alleges to be a tech support representative from a reputable company, claiming they've detected a virus on your computer. What's your response?",
a: "Follow their instructions and provide access to your computer",
b: "Hang up and run a trusted antivirus scan on your computer",
c: "Engage in conversation to gather more information about the supposed virus",
d: "Immediately provide your credit card information to fix the issue",

 correct: "b"
    }
    
        
];
function startQuiz() {
  document.getElementById('popupContainer').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  // Additional code to start the quiz goes here
}

const saveBtn = document.getElementById("saveBtn");
const nextBtn = document.getElementById("nextBtn");
//nextBtn.disabled = true;
// Add event listeners to save and next buttons
saveBtn.addEventListener("click", saveAnswer);
nextBtn.addEventListener("click", nextQuestion);

let userAnswers = []; // Array to store user's answers

function saveAnswer() {
  const answer = getSelected();
  const correctAnswer = quizData[currentQuiz].correct;
  
  // Highlight correct and incorrect answers
  answerEl.forEach((answerEl) => {
    const id = answerEl.id;
    if (id === correctAnswer) {
      answerEl.parentElement.classList.add("correct");
    } else {
      if (id === answer) {
        answerEl.parentElement.classList.add("wrong");
      }
    }
  });

  // Show whether the answer is correct or incorrect
  const isCorrect = answer === correctAnswer;
  const feedback = document.createElement("p");
  //feedback.textContent = isCorrect ? "Correct" : "Incorrect";
  feedback.classList.add(isCorrect ? "correct-feedback" : "incorrect-feedback");
  footerEl.appendChild(feedback);

  saveBtn.disabled = true; // Disable save button after saving answer
}

const quiz = document.querySelector(".quiz-body");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const footerEl = document.querySelector(".quiz-footer");
const quizDetailEl = document.querySelector(".quiz-details");
const liEl = document.querySelector("ul li");

const a_txt = document.getElementById("a_text");
const b_txt = document.getElementById("b_text");
const c_txt = document.getElementById("c_text");
const d_txt = document.getElementById("d_text");
const btnSubmit = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_txt.innerText = currentQuizData.a;
  b_txt.innerText = currentQuizData.b;
  c_txt.innerText = currentQuizData.c;
  d_txt.innerText = currentQuizData.d;
  quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${quizData.length}</p>`;
}

// deselect
function deselectAnswers() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
    answerEl.parentElement.classList.remove("correct", "wrong");
  });

  const feedbackElements = footerEl.querySelectorAll(".correct-feedback, .incorrect-feedback");
  feedbackElements.forEach((element) => {
    element.remove();
  });
}

// get selected
function getSelected() {
  let answer;
  answerEl.forEach((answerEls) => {
    if (answerEls.checked) {
      answer = answerEls.id;
    }
  });
  return answer;
}

// Event listener for the submit button
btnSubmit.addEventListener("click", function () {
  const answers = getSelected();

  if (answers) {
    const currentQuizData = quizData[currentQuiz];
    const correctAnswer = currentQuizData.correct;

    if (answers === correctAnswer) {
      score++; // Increment the score if the answer is correct
    }

    nextQuestion(); // Proceed to the next question after evaluating the current one
  }
});

// Function to proceed to the next question
function nextQuestion() {
  saveBtn.disabled = false;
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    const headerTxt = document.querySelector(".header-txt");
    headerTxt.textContent = "Results";
    headerTxt.style.fontSize = "30px";
    const scorePercentage = (score / quizData.length) * 100;
    quiz.innerHTML = `<h1>You answered ${score}/${quizData.length} questions correctly</h1>
    <div style="text-align: justify; padding-bottom:20px">
    <h1>Your Score Percentage is ${scorePercentage}%</h1>
    </div>
    <button type="button" onclick="location.reload()">Reload</button>`;
    footerEl.style.display = "none";
  }

  if (currentQuiz === quizData.length - 1) {
    const btnSubmit = document.getElementById("nextBtn");
    btnSubmit.innerText = "View Results";
    //btnSubmit.style.display = "block";
  }
}


function saveAnswer() {
  const answer = getSelected();
  const correctAnswer = quizData[currentQuiz].correct;
  
  // Highlight correct and incorrect answers
  answerEl.forEach((answerEl) => {
    const id = answerEl.id;
    if (id === correctAnswer) {
      answerEl.parentElement.classList.add("correct");
    } else {
      if (id === answer) {
        answerEl.parentElement.classList.add("wrong");
      }
    }
  });

  // Show whether the answer is correct or incorrect
  const isCorrect = answer === correctAnswer;
  const feedback = document.createElement("p");
  feedback.classList.add(isCorrect ? "correct-feedback" : "incorrect-feedback");
  footerEl.appendChild(feedback);

  saveBtn.disabled = true; // Disable save button after saving answer
  nextBtn.disabled = false;
  // Debugging
  console.log("User Answer:", answer);
  console.log("Correct Answer:", correctAnswer);
  console.log("Is Correct?", isCorrect);

  if (isCorrect) {
    score++; // Increment the score if the answer is correct
    console.log("Score:", score);
  }
}


 
     
