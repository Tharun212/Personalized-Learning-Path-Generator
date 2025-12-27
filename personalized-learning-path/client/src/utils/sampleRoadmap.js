export const sampleRoadmap = {
  subject: "JavaScript",
  level: "Beginner",
  topics: [
    {
      id: "js-basics",
      title: "JavaScript Basics",
      description: "Variables, syntax, and basic concepts",
      prerequisites: [],
    },
    {
      id: "js-variables",
      title: "Variables & Data Types",
      description: "let, const, data types",
      prerequisites: ["js-basics"],
    },
    {
      id: "js-loops",
      title: "Loops & Conditions",
      description: "if, for, while",
      prerequisites: ["js-variables"],
    },
    {
      id: "js-functions",
      title: "Functions",
      description: "Function declarations and arrow functions",
      prerequisites: ["js-loops"],
    },
  ],
};
