const nodeQuiz = [
  {
    id: 1,
    question: "What is Node.js?",
    options: [
      "A frontend framework",
      "A JavaScript runtime environment",
      "A database",
      "A browser",
    ],
    correctAnswer: 1,
    reference:
      "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
  },
  {
    id: 2,
    question: "Which module is used to create a server?",
    options: ["fs", "http", "path", "os"],
    correctAnswer: 1,
    reference: "https://nodejs.org/api/http.html",
  },
  {
    id: 3,
    question: "What does Express.js provide?",
    options: [
      "Database connection",
      "Routing and middleware",
      "Frontend rendering",
      "Authentication only",
    ],
    correctAnswer: 1,
    reference: "https://expressjs.com/en/starter/hello-world.html",
  },
  {
    id: 4,
    question: "What is middleware in Express?",
    options: [
      "A database table",
      "A function that handles requests",
      "A frontend component",
      "A Node.js package manager",
    ],
    correctAnswer: 1,
    reference: "https://expressjs.com/en/guide/using-middleware.html",
  },
  {
    id: 5,
    question: "Which command installs a package?",
    options: ["node install", "npm add", "npm install", "node add"],
    correctAnswer: 2,
    reference: "https://docs.npmjs.com/cli/v10/commands/npm-install",
  },
];

export default nodeQuiz;
