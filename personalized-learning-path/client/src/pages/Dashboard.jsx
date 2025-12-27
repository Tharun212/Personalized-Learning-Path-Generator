import { useEffect, useState } from "react";
import { getAssessments } from "../api/assessmentApi";
import Layout from "../components/Layout";

const Dashboard = () => {
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    const fetchAssessments = async () => {
      const data = await getAssessments();
      setAssessments(data);
    };
    fetchAssessments();
  }, []);

  const latest = assessments[0];
  const averageScore =
    assessments.length > 0
      ? Math.round(
          assessments.reduce((sum, a) => sum + a.percentage, 0) /
            assessments.length
        )
      : 0;

  return (
    <Layout>
      {/* Header */}
      <div style={header}>
        <h1 style={title}>Dashboard</h1>
        <p style={subtitle}>Track your assessment performance</p>
      </div>

      {/* Summary Cards */}
      <div style={cardGrid}>
        <SummaryCard
          label="Total Attempts"
          value={assessments.length}
          gradient="linear-gradient(135deg, #3b82f6, #2563eb)"
        />
        <SummaryCard
          label="Latest Score"
          value={latest ? `${latest.percentage}%` : "-"}
          gradient="linear-gradient(135deg, #8b5cf6, #7c3aed)"
        />
        <SummaryCard
          label="Average Score"
          value={`${averageScore}%`}
          gradient="linear-gradient(135deg, #10b981, #059669)"
        />
      </div>

      {/* Assessment History */}
      <div style={tableCard}>
        <h2 style={sectionTitle}>Assessment History</h2>

        {assessments.length === 0 ? (
          <p style={emptyText}>No assessments found</p>
        ) : (
          <table style={table}>
            <thead>
              <tr>
                <Th>Subject</Th>
                <Th>Score</Th>
                <Th>Date</Th>
                <Th>Performance</Th>
              </tr>
            </thead>
            <tbody>
              {assessments.map((a) => (
                <tr key={a._id}>
                  <Td>{a.subject}</Td>
                  <Td>{a.percentage}%</Td>
                  <Td>{new Date(a.createdAt).toLocaleString()}</Td>
                  <Td>
                    <PerformanceBadge score={a.percentage} />
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;

const SummaryCard = ({ label, value, gradient }) => (
  <div style={{ ...cardBase, background: gradient }}>
    <p style={cardLabel}>{label}</p>
    <h3 style={cardValue}>{value}</h3>
  </div>
);

const Th = ({ children }) => <th style={th}>{children}</th>;
const Td = ({ children }) => <td style={td}>{children}</td>;

const PerformanceBadge = ({ score }) => {
  let text = "Needs Work";
  let bg = "#fee2e2";
  let color = "#dc2626";

  if (score >= 90) {
    text = "Excellent";
    bg = "#dcfce7";
    color = "#16a34a";
  } else if (score >= 75) {
    text = "Good";
    bg = "#dbeafe";
    color = "#2563eb";
  } else if (score >= 60) {
    text = "Fair";
    bg = "#fef3c7";
    color = "#d97706";
  }

  return <span style={{ ...badge, background: bg, color }}>{text}</span>;
};

const header = {
  marginBottom: "32px",
};

const title = {
  fontSize: "36px",
  fontWeight: "bold",
};

const subtitle = {
  color: "#6b7280",
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "20px",
  marginBottom: "40px",
};

const cardBase = {
  borderRadius: "14px",
  padding: "24px",
  color: "white",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
};

const cardLabel = {
  fontSize: "14px",
  opacity: 0.9,
};

const cardValue = {
  fontSize: "36px",
  fontWeight: "bold",
  marginTop: "8px",
};

const tableCard = {
  background: "white",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
};

const sectionTitle = {
  fontSize: "24px",
  marginBottom: "16px",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const th = {
  textAlign: "left",
  padding: "12px",
  borderBottom: "1px solid #e5e7eb",
  color: "#6b7280",
  fontSize: "12px",
  textTransform: "uppercase",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #e5e7eb",
};

const badge = {
  padding: "4px 10px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: 600,
};

const emptyText = {
  color: "#6b7280",
};
