const reactQuiz = [
  {
    id: 1,
    question: "What is a React component?",
    options: [
      "A database table",
      "A reusable piece of UI",
      "A CSS file",
      "A JavaScript loop",
    ],
    correctAnswer: 1,
    reference: "https://react.dev/learn/your-first-component",
  },
  {
    id: 2,
    question: "Which hook is used to manage state?",
    options: ["useEffect", "useRef", "useState", "useMemo"],
    correctAnswer: 2,
    reference: "https://react.dev/reference/react/useState",
  },
  {
    id: 3,
    question: "When does useEffect run by default?",
    options: [
      "Only once",
      "On every render",
      "Only on unmount",
      "Only when state changes",
    ],
    correctAnswer: 1,
    reference: "https://react.dev/reference/react/useEffect",
  },
  {
    id: 4,
    question: "What is JSX?",
    options: [
      "A database query language",
      "A JavaScript extension for UI",
      "A CSS framework",
      "A backend API",
    ],
    correctAnswer: 1,
    reference: "https://react.dev/learn/writing-markup-with-jsx",
  },
  {
    id: 5,
    question: "Props in React are:",
    options: ["Mutable", "Read-only", "Global variables", "Optional hooks"],
    correctAnswer: 1,
    reference: "https://react.dev/learn/passing-props-to-a-component",
  },
];

export default reactQuiz;
