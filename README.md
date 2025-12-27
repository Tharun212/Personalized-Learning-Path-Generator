📚 Personalized Learning Path Platform

A full-stack web application that assesses user skills through quizzes, stores results, generates a personalized learning roadmap based on performance, visualizes progress interactively, and allows exporting the roadmap as a PDF.
------------------------------------------------------------------------------------------------------------------------------

🚀 How It Works (Assessment → Roadmap Flow)

1. Skill Assessment

 1.1 Users take subject-based quizzes (JavaScript, React, Database, Node.js).

 1.2 Each quiz contains multiple-choice questions.

 1.3 Score and percentage are calculated on completion.
------------------------------------------------------------------------------------------------------------------------------

2. Score Storage

 2.1 Quiz results are sent to the backend and stored in MongoDB.

 2.2 Stored data includes:

 2.3 Subject

 2.4 Score

 2.5 Total questions

 2.6 Percentage

 2.7 Timestamp
------------------------------------------------------------------------------------------------------------------------------
3. Performance Analysis

 3.1 The dashboard fetches all past assessments.

 3.2 Displays:

 3.3 Total attempts

 3.4 Latest score

 3.5 Average performance

 3.6 Assessment history
------------------------------------------------------------------------------------------------------------------------------


4. Personalized Roadmap Generation

 4.1 The latest assessment score is used to determine user level:

 4.2 Beginner (0–39%)

 4.3 Intermediate (40–69%)

 4.4 Advanced (70%+)

 4.5 A rule-based engine generates learning topics based on the level.
------------------------------------------------------------------------------------------------------------------------------

5. Interactive Roadmap Visualization

 5.1 Roadmap is rendered using D3.js.

 5.2 Users can:

 5.3 View learning topics as nodes

 5.4 Track completion progress

 5.5 Interact with topics visually
------------------------------------------------------------------------------------------------------------------------------


6. PDF Export

 Users can export the generated roadmap as a PDF for offline learning or sharing.
------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------

🛠 Tech Stack
------------------------Frontend---------------

   React.js – UI development

   React Router – Page navigation

   D3.js – Interactive roadmap visualization

   Axios – API communication

   HTML / CSS / JavaScript

------------------------Backend-----------------

  Node.js

  Express.js – REST API

  MongoDB – Database

  Mongoose – ODM for MongoDB

----------------------Other Tools-----------------

   Vite – Frontend build tool

   jsPDF / html2canvas – PDF generation

   Git & GitHub – Version control
------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------

1. 📊 Key Features

   Skill-based quizzes

   Persistent score tracking

   Performance dashboard

   Rule-based personalized roadmap
 
   Interactive D3 visualization

   Export roadmap as PDF

------------------------------------------------------------------------------------------------------------------------------


🔮 Future Enhancements

 1. AI-based roadmap generation (LLM integration)

 2. Topic-wise resource recommendations

 3. User authentication

 4. Adaptive quizzes based on past performance
 -----------------------------------------------------------------------------------------------------------------------------


