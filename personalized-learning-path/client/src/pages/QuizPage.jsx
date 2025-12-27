import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Quiz from "../components/quiz/Quiz";

import javascriptQuiz from "../data/quizzes/javascriptQuiz";
import reactQuiz from "../data/quizzes/reactQuiz";
import databaseQuiz from "../data/quizzes/databaseQuiz";
import nodeQuiz from "../data/quizzes/nodeQuiz";

const quizMap = {
  javascript: javascriptQuiz,
  react: reactQuiz,
  database: databaseQuiz,
  node: nodeQuiz,
};

const QuizPage = () => {
  const { subject } = useParams();
  const quizData = quizMap[subject];

  if (!quizData) {
    return (
      <Layout>
        <style>{`
          .quiz-not-found {
            min-height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }

          .error-container {
            text-align: center;
            max-width: 500px;
            padding: 3rem;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
            animation: slideUp 0.6s ease-out;
          }

          .error-icon {
            font-size: 5rem;
            margin-bottom: 1.5rem;
            animation: shake 0.5s ease-in-out;
          }

          .error-title {
            font-size: 2rem;
            font-weight: 700;
            color: #2d3748;
            margin: 0 0 1rem 0;
          }

          .error-message {
            font-size: 1.1rem;
            color: #718096;
            margin: 0 0 2rem 0;
            line-height: 1.6;
          }

          .back-button {
            display: inline-block;
            padding: 0.875rem 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          }

          .back-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
          }

          .back-button:active {
            transform: translateY(0);
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes shake {
            0%, 100% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(-10deg);
            }
            75% {
              transform: rotate(10deg);
            }
          }

          @media (max-width: 768px) {
            .error-container {
              padding: 2rem 1.5rem;
            }

            .error-icon {
              font-size: 4rem;
            }

            .error-title {
              font-size: 1.5rem;
            }

            .error-message {
              font-size: 1rem;
            }
          }

          @media (max-width: 480px) {
            .back-button {
              padding: 0.75rem 1.5rem;
              font-size: 0.95rem;
            }
          }
        `}</style>
        <div className="quiz-not-found">
          <div className="error-container">
            <div className="error-icon">❌</div>
            <h2 className="error-title">Quiz Not Found</h2>
            <p className="error-message">
              The quiz you're looking for doesn't exist or has been removed.
            </p>
            <a href="/" className="back-button">
              Return to Home
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <style>{`
        .quiz-page {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
          animation: fadeIn 0.5s ease-in;
        }

        .quiz-header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .quiz-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: pulse 4s ease-in-out infinite;
        }

        .quiz-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          text-transform: capitalize;
          position: relative;
          z-index: 1;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .quiz-description {
          font-size: 1.1rem;
          margin: 0;
          opacity: 0.95;
          position: relative;
          z-index: 1;
          font-weight: 300;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(5deg);
          }
        }

        @media (max-width: 768px) {
          .quiz-page {
            padding: 1.5rem 1rem;
          }

          .quiz-header {
            padding: 1.5rem;
            margin-bottom: 2rem;
          }

          .quiz-title {
            font-size: 2rem;
          }

          .quiz-description {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .quiz-title {
            font-size: 1.75rem;
          }

          .quiz-description {
            font-size: 0.95rem;
          }
        }
      `}</style>
      <div className="quiz-page">
        <div className="quiz-header">
          <h1 className="quiz-title">{subject} Quiz</h1>
          <p className="quiz-description">
            Test your knowledge and improve your skills
          </p>
        </div>
        <Quiz quiz={quizData} subject={subject} />
      </div>
    </Layout>
  );
};

export default QuizPage;
