import { useState } from "react";
import { saveAssessment} from "../../api/assessmentApi";

const Quiz = ({ quiz , subject}) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quiz[current];

  const handleAnswer = async (selectedIndex) => {
    let newScore = score;

    if (selectedIndex === question.correctAnswer) {
      newScore = score + 1;
      setScore(newScore);
    }

    if (current + 1 < quiz.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setFinished(true);

      const total = quiz.length;
      const percentage = Math.round((newScore / total) * 100);

      try {
        await saveAssessment({
          subject,
          score: newScore, // raw score (e.g. 1, 2, 4)
          total: total, // total questions
          percentage: percentage, // REAL percentage (50, 80, etc)
        });

        console.log("Assessment saved successfully");
      } catch (error) {
        console.error("Failed to save assessment", error);
      }
    }
  };



  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const percentage = Math.round((score / quiz.length) * 100);
    const isPerfect = percentage === 100;
    const isGood = percentage >= 70;
    const isAverage = percentage >= 50;

    return (
      <>
        <style>{`
          .result-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 3rem 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
            text-align: center;
            animation: scaleIn 0.5s ease-out;
            position: relative;
            overflow: hidden;
          }

          .result-container::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
            animation: rotate 10s linear infinite;
          }

          .result-content {
            position: relative;
            z-index: 1;
          }

          .result-icon {
            font-size: 5rem;
            margin-bottom: 1rem;
            animation: bounce 1s ease-in-out;
          }

          .result-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: white;
            margin: 0 0 1rem 0;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          }

          .result-message {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.95);
            margin-bottom: 2rem;
            font-weight: 300;
          }

          .score-display {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            padding: 2rem;
            border-radius: 16px;
            margin: 2rem 0;
            border: 2px solid rgba(255, 255, 255, 0.3);
          }

          .score-number {
            font-size: 4rem;
            font-weight: 800;
            color: white;
            margin: 0;
            line-height: 1;
          }

          .score-label {
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.9);
            margin-top: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          .percentage-display {
            font-size: 2rem;
            font-weight: 700;
            color: white;
            margin: 1rem 0;
          }

          .restart-button {
            display: inline-block;
            padding: 1rem 3rem;
            background: white;
            color: #667eea;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            margin-top: 1rem;
          }

          .restart-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          }

          .restart-button:active {
            transform: translateY(-1px);
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @media (max-width: 768px) {
            .result-container {
              padding: 2rem 1.5rem;
            }

            .result-icon {
              font-size: 4rem;
            }

            .result-title {
              font-size: 2rem;
            }

            .score-number {
              font-size: 3rem;
            }

            .percentage-display {
              font-size: 1.5rem;
            }
          }
        `}</style>
        <div className="result-container">
          <div className="result-content">
            <div className="result-icon">
              {isPerfect ? "🏆" : isGood ? "🎉" : isAverage ? "👍" : "💪"}
            </div>
            <h2 className="result-title">Quiz Completed!</h2>
            <p className="result-message">
              {isPerfect
                ? "Perfect Score! You're a master!"
                : isGood
                ? "Great job! Well done!"
                : isAverage
                ? "Good effort! Keep practicing!"
                : "Keep learning and try again!"}
            </p>
            <div className="score-display">
              <div className="score-number">
                {score} / {quiz.length}
              </div>
              <div className="score-label">Your Score</div>
              <div className="percentage-display">{percentage}%</div>
            </div>
            <button className="restart-button" onClick={handleRestart}>
              🔄 Restart Quiz
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        .quiz-container {
          max-width: 700px;
          margin: 0 auto;
          padding: 2.5rem;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          animation: fadeInUp 0.5s ease-out;
        }

        .progress-bar-container {
          width: 100%;
          height: 8px;
          background: #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
          border-radius: 10px;
        }

        .question-counter {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f3f4f6;
        }

        .counter-text {
          font-size: 0.95rem;
          font-weight: 600;
          color: #667eea;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .score-badge {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .question-text {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 2rem;
          line-height: 1.6;
          animation: slideIn 0.4s ease-out;
        }

        .options-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .option-button {
          display: block;
          width: 100%;
          padding: 1.25rem 1.5rem;
          text-align: left;
          cursor: pointer;
          border-radius: 12px;
          border: 2px solid #e5e7eb;
          background: white;
          font-size: 1.05rem;
          font-weight: 500;
          color: #374151;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .option-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .option-button:hover {
          border-color: #667eea;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
          transform: translateX(5px);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
        }

        .option-button:hover::before {
          left: 100%;
        }

        .option-button:active {
          transform: translateX(3px) scale(0.98);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .quiz-container {
            padding: 1.5rem;
          }

          .question-text {
            font-size: 1.25rem;
          }

          .option-button {
            padding: 1rem 1.25rem;
            font-size: 1rem;
          }

          .question-counter {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
      <div className="quiz-container">
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${((current + 1) / quiz.length) * 100}%` }}
          ></div>
        </div>

        <div className="question-counter">
          <span className="counter-text">
            Question {current + 1} of {quiz.length}
          </span>
          <span className="score-badge">Score: {score}</span>
        </div>

        <h2 className="question-text">{question.question}</h2>

        <div className="options-container">
          {question.options.map((opt, i) => (
            <button
              key={i}
              className="option-button"
              onClick={() => handleAnswer(i)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Quiz;
