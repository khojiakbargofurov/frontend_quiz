// react router dom import
import { useParams } from "react-router-dom";

// components
import Test from "../components/Test";

import { useEffect } from "react";

function Quiz() {
  const { title } = useParams();
  const quizzes = {
    quizzes: [
      {
        "title": "English",
        "color": "#FFF1E9",
        "icon": "./assets/icon-english.png",
        "questions": [
          {
            "question": "Which of these is a synonym for 'happy'?",
            "options": ["Sad", "Excited", "Joyful", "Angry"],
            "answer": "Joyful"
          },
          {
            "question": "What is the correct form of the verb in the sentence: 'She ____ to the store yesterday.'",
            "options": ["go", "went", "going", "gone"],
            "answer": "went"
          },
          {
            "question": "Which of these is an example of a simile?",
            "options": ["The night was dark.", "He was as fast as a cheetah.", "She was a strong woman.", "The sky was clear."],
            "answer": "He was as fast as a cheetah."
          },
          {
            "question": "Which sentence is in the passive voice?",
            "options": ["The cat chased the mouse.", "The mouse was chased by the cat.", "She sings a song.", "They played the game."],
            "answer": "The mouse was chased by the cat."
          },
          {
            "question": "What does the word 'benevolent' mean?",
            "options": ["Kind", "Cruel", "Uncertain", "Greedy"],
            "answer": "Kind"
          }
        ]
      },
      {
        "title": "Math",
        "color": "#F4F9FC",
        "icon": "./assets/icon-math.png",
        "questions": [
          {
            "question": "What is the value of π (Pi) to two decimal places?",
            "options": ["3.14", "3.141", "2.71", "3.15"],
            "answer": "3.14"
          },
          {
            "question": "What is the square root of 144?",
            "options": ["10", "12", "14", "16"],
            "answer": "12"
          },
          {
            "question": "What is the sum of angles in a triangle?",
            "options": ["90°", "180°", "360°", "270°"],
            "answer": "180°"
          },
          {
            "question": "What is the result of 5 × 6?",
            "options": ["30", "36", "25", "28"],
            "answer": "30"
          },
          {
            "question": "If x + 5 = 10, what is the value of x?",
            "options": ["5", "10", "15", "0"],
            "answer": "5"
          }
        ]
      },
      {
        "title": "Physics",
        "color": "#E0F1F7",
        "icon": "./assets/icon-physics.png",
        "questions": [
          {
            "question": "What is the SI unit of force?",
            "options": ["Newton", "Joule", "Watt", "Meter"],
            "answer": "Newton"
          },
          {
            "question": "Which of these is a renewable source of energy?",
            "options": ["Coal", "Natural Gas", "Solar Energy", "Oil"],
            "answer": "Solar Energy"
          },
          {
            "question": "What is the speed of light in a vacuum?",
            "options": ["3 × 10^8 m/s", "2 × 10^8 m/s", "1 × 10^8 m/s", "3 × 10^6 m/s"],
            "answer": "3 × 10^8 m/s"
          },
          {
            "question": "Who is known as the father of modern physics?",
            "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
            "answer": "Albert Einstein"
          },
          {
            "question": "Which force causes objects to fall toward the Earth?",
            "options": ["Magnetic Force", "Gravity", "Friction", "Electrostatic Force"],
            "answer": "Gravity"
          }
        ]
      }      
    ],
  };
  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);

  if (title == "English") {
    const quizzes2 = quizzes.quizzes[0];
    return (
      <div className="quiz-container container">
        {quizzes2 && <Test questions={quizzes2} />}
      </div>
    );
  } else if (title == "Math") {
    const quizzes2 = quizzes.quizzes[1];
    return (
      <div className="quiz-container container">
        {quizzes2 && <Test questions={quizzes2} />}
      </div>
    );
  } else if (title == "Physics") {
    const quizzes2 = quizzes.quizzes[2];
    return (
      <div className="quiz-container container">
        {quizzes2 && <Test questions={quizzes2} />}
      </div>
    );
  } 
}

export default Quiz;
