import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout fullWidth>
      <div style={container}>
        {/* Glowing orbs */}
        <div style={glowOrb1}></div>
        <div style={glowOrb2}></div>
        <div style={glowOrb3}></div>

        <div style={contentWrapper}>
          <span style={badge}>✨ AI-Powered Learning Paths</span>

          <h1 style={title}>
            Your Personalized <span style={gradient}>Learning Journey</span>
            <br /> Starts Here
          </h1>

          <p style={subtitle}>
            Take skill assessments, receive AI-powered recommendations, and
            follow a customized roadmap tailored to your goals.
          </p>

          <div style={buttonRow}>
            <Link to="/assessment" style={primaryBtn}>
              Start Assessment →
            </Link>

            <Link to="/roadmap" style={secondaryBtn}>
              View Sample Roadmap
            </Link>
          </div>

          <div style={stats}>
            <div>
              <h2 style={statNumber}>20+</h2>
              <p style={statLabel}>Learning Topics</p>
            </div>
            <div>
              <h2 style={statNumber}>4</h2>
              <p style={statLabel}>Skill Categories</p>
            </div>
            <div>
              <h2 style={statNumber}>100%</h2>
              <p style={statLabel}>Personalized</p>
            </div>
          </div>
        </div>
      </div>
      {/* HOW IT WORKS SECTION */}
      <section style={howSection}>
        <h2 style={howTitle}>How It Works</h2>
        <p style={howSubtitle}>
          A streamlined process to identify your skills and create a
          personalized learning experience.
        </p>

        <div style={cardGrid}>
          <div style={infoCard}>
            <div style={icon}>🧠</div>
            <h3>Skill Assessment</h3>
            <p>
              Take interactive quizzes to evaluate your current knowledge in
              JavaScript, React, Databases, and more.
            </p>
          </div>

          <div style={infoCard}>
            <div style={icon}>✨</div>
            <h3>AI Recommendations</h3>
            <p>
              Get personalized learning suggestions powered by AI that adapts to
              your skill level and goals.
            </p>
          </div>

          <div style={infoCard}>
            <div style={icon}>🗺️</div>
            <h3>Dynamic Roadmap</h3>
            <p>
              Visualize your learning journey with an interactive DAG chart
              showing topic dependencies.
            </p>
          </div>

          <div style={infoCard}>
            <div style={icon}>✅</div>
            <h3>Progress Tracking</h3>
            <p>
              Mark topics as complete and track your progress with satisfying
              visual feedback.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

const container = {
  padding: "80px 20px",
  textAlign: "center",
  background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
};

const badge = {
  background: "rgba(224, 242, 254, 0.15)",
  padding: "8px 16px",
  borderRadius: "999px",
  color: "#7dd3fc",
  fontWeight: 600,
  display: "inline-block",
  border: "1px solid rgba(125, 211, 252, 0.3)",
  backdropFilter: "blur(10px)",
};

const title = {
  fontSize: "48px",
  margin: "20px 0",
  textAlign: "center",
  color: "#f1f5f9",
  fontWeight: "700",
};

const gradient = {
  background: "linear-gradient(90deg, #14b8a6, #6366f1, #a855f7)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const subtitle = {
  maxWidth: "600px",
  margin: "0 auto 30px",
  color: "#cbd5e1",
  fontSize: "18px",
  textAlign: "center",
  lineHeight: "1.6",
};

const buttonRow = {
  display: "flex",
  justifyContent: "center",
  gap: "16px",
  marginBottom: "50px",
  flexWrap: "wrap",
};

const primaryBtn = {
  background: "linear-gradient(90deg, #14b8a6, #6366f1)",
  color: "white",
  padding: "12px 24px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: 600,
  display: "inline-block",
};

const secondaryBtn = {
  border: "1px solid rgba(203, 213, 245, 0.3)",
  padding: "12px 24px",
  borderRadius: "8px",
  textDecoration: "none",
  color: "#e2e8f0",
  display: "inline-block",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s ease",
};

const stats = {
  display: "flex",
  justifyContent: "center",
  gap: "60px",
  flexWrap: "wrap",
};

const howSection = {
  padding: "120px 20px 80px",
  background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
  borderTop: "1px solid rgba(255,255,255,0.08)",
};

const howTitle = {
  fontSize: "36px",
  marginBottom: "10px",
  textAlign: "center",
  color: "#f1f5f9",
  fontWeight: "700",
};

const howSubtitle = {
  maxWidth: "600px",
  margin: "0 auto 50px",
  color: "#cbd5e1",
  fontSize: "16px",
  textAlign: "center",
  lineHeight: "1.6",
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "30px",
  maxWidth: "1200px",
  margin: "0 auto",
};

const infoCard = {
  background: "rgba(30, 41, 59, 0.6)",
  padding: "30px 20px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  color: "#f1f5f9",
  textAlign: "center",
  border: "1px solid rgba(148, 163, 184, 0.1)",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s ease",
};

const icon = {
  fontSize: "32px",
  marginBottom: "15px",
};

// New styles for glowing effect
const contentWrapper = {
  position: "relative",
  zIndex: 1,
};

const glowOrb1 = {
  position: "absolute",
  width: "500px",
  height: "500px",
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0) 70%)",
  top: "-100px",
  left: "-100px",
  filter: "blur(80px)",
  animation: "float 8s ease-in-out infinite",
  zIndex: 0,
};

const glowOrb2 = {
  position: "absolute",
  width: "400px",
  height: "400px",
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, rgba(20, 184, 166, 0) 70%)",
  top: "50%",
  right: "-100px",
  filter: "blur(80px)",
  animation: "float 10s ease-in-out infinite reverse",
  zIndex: 0,
};

const glowOrb3 = {
  position: "absolute",
  width: "350px",
  height: "350px",
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0) 70%)",
  bottom: "100px",
  left: "50%",
  transform: "translateX(-50%)",
  filter: "blur(80px)",
  animation: "float 12s ease-in-out infinite",
  zIndex: 0,
};

const statNumber = {
  color: "#f1f5f9",
  margin: "0 0 5px 0",
};

const statLabel = {
  color: "#94a3b8",
  margin: 0,
};
