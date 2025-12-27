import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const Assessment = () => {
  const navigate = useNavigate(); // ✅ MUST be here

  return (
    <Layout>
      {/* Header */}
      <div style={header}>
        <span style={badge}>🧠 Skill Assessment</span>
        <h1 style={title}>Assess Your Skills</h1>
        <p style={subtitle}>
          Take quizzes to evaluate your knowledge. Your results will be used to
          generate a personalized learning path tailored to your level.
        </p>
      </div>

      {/* Assessment Cards */}
      <div style={grid}>
        <div style={card} onClick={() => navigate("/quiz/javascript")}>
          <div style={cardIcon}>⚡</div>
          <h3>JavaScript Fundamentals</h3>
          <p style={questions}>5 questions</p>
          <p style={desc}>
            Test your knowledge of JavaScript basics including variables,
            functions, and control flow.
          </p>
        </div>

        <div style={card} onClick={() => navigate("/quiz/database")}>
          <div style={cardIcon}>🗄️</div>
          <h3>Database Fundamentals</h3>
          <p style={questions}>5 questions</p>
          <p style={desc}>
            Assess your understanding of database concepts, SQL, and NoSQL
            databases.
          </p>
        </div>

        <div style={card} onClick={() => navigate("/quiz/react")}>
          <div style={cardIcon}>⚛️</div>
          <h3>React Fundamentals</h3>
          <p style={questions}>5 questions</p>
          <p style={desc}>
            Evaluate your React skills including components, hooks, and state
            management.
          </p>
        </div>

        <div style={card} onClick={() => navigate("/quiz/node")}>
          <div style={cardIcon}>🚀</div>
          <h3>Node.js & Backend</h3>
          <p style={questions}>5 questions</p>
          <p style={desc}>
            Test your backend development skills with Node.js and Express.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Assessment;

/* ---------- STYLES ---------- */

const header = {
  textAlign: "center",
  marginBottom: "60px",
};

const badge = {
  display: "inline-block",
  padding: "8px 16px",
  borderRadius: "999px",
  background: "#ede9fe",
  color: "#7c3aed",
  fontWeight: 600,
  marginBottom: "16px",
};

const title = {
  fontSize: "40px",
  margin: "10px 0",
};

const subtitle = {
  maxWidth: "700px",
  margin: "0 auto",
  color: "#6b7280",
  fontSize: "16px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px",
};

const card = {
  background: "white",
  borderRadius: "14px",
  padding: "28px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  cursor: "pointer",
};

const cardIcon = {
  fontSize: "28px",
  marginBottom: "12px",
};

const questions = {
  color: "#6366f1",
  fontSize: "14px",
  margin: "6px 0",
};

const desc = {
  color: "#6b7280",
  fontSize: "14px",
};
