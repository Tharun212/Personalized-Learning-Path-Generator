const databaseQuiz = [
  {
    id: 1,
    question: "What is a primary key?",
    options: [
      "A key used for encryption",
      "A unique identifier for a table record",
      "A foreign key",
      "An index",
    ],
    correctAnswer: 1,
    reference: "https://www.w3schools.com/sql/sql_primarykey.asp",
  },
  {
    id: 2,
    question: "Which SQL command is used to retrieve data?",
    options: ["INSERT", "UPDATE", "DELETE", "SELECT"],
    correctAnswer: 3,
    reference: "https://www.w3schools.com/sql/sql_select.asp",
  },
  {
    id: 3,
    question: "What is a foreign key?",
    options: [
      "A key that uniquely identifies a record",
      "A key used to link two tables",
      "A key used for sorting",
      "A duplicate key",
    ],
    correctAnswer: 1,
    reference: "https://www.w3schools.com/sql/sql_foreignkey.asp",
  },
  {
    id: 4,
    question:
      "Which SQL constraint ensures that a column cannot have NULL values?",
    options: ["UNIQUE", "PRIMARY KEY", "NOT NULL", "CHECK"],
    correctAnswer: 2,
    reference: "https://www.w3schools.com/sql/sql_notnull.asp",
  },
  {
    id: 5,
    question: "Which SQL statement is used to remove a table completely?",
    options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"],
    correctAnswer: 2,
    reference: "https://www.w3schools.com/sql/sql_drop_table.asp",
  },
];

export default databaseQuiz;
