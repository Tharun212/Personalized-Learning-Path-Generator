import { useEffect, useState, useRef } from "react";
import Layout from "../components/Layout";
import { getAssessments } from "../api/assessmentApi";
import RoadmapD3 from "../components/roadmap/RoadmapD3";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/* ---------------- RULE BASED ROADMAP ---------------- */

const generateRoadmap = (assessments) => {
  if (!assessments || assessments.length === 0) return null;

  const latest = assessments[0];

  let level = "Beginner";
  let topics = [];

  if (latest.percentage >= 70) {
    level = "Advanced";
    topics = [
      { id: 1, label: "Advanced Concepts" },
      { id: 2, label: "Performance Optimization" },
      { id: 3, label: "Best Practices" },
      { id: 4, label: "Real-World Projects" },
    ];
  } else if (latest.percentage >= 40) {
    level = "Intermediate";
    topics = [
      { id: 1, label: "Core Fundamentals" },
      { id: 2, label: "Common Patterns" },
      { id: 3, label: "Hands-on Practice" },
      { id: 4, label: "Mini Projects" },
    ];
  } else {
    level = "Beginner";
    topics = [
      { id: 1, label: "Basics & Syntax" },
      { id: 2, label: "Key Concepts" },
      { id: 3, label: "Simple Examples" },
      { id: 4, label: "Practice Exercises" },
    ];
  }

  return {
    subject: latest.subject,
    level,
    topics,
  };
};

/* ---------------- COMPONENT ---------------- */

const Roadmap = () => {
  const [roadmap, setRoadmap] = useState(null);
  const [completed, setCompleted] = useState([]);
  const roadmapRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const assessments = await getAssessments();
      const generatedRoadmap = generateRoadmap(assessments);
      setRoadmap(generatedRoadmap);
    };

    fetchData();
  }, []);

  const toggleTopic = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  /* ---------------- EXPORT PDF ---------------- */

  const exportPDF = async () => {
    if (!roadmapRef.current) return;

    const canvas = await html2canvas(roadmapRef.current, {
      scale: 2,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${roadmap.subject}-roadmap.pdf`);
  };

  if (!roadmap) {
    return (
      <Layout>
        <p style={{ padding: "20px", color: "#6b7280" }}>
          Take an assessment to generate your roadmap.
        </p>
      </Layout>
    );
  }

  const progress =
    roadmap.topics.length > 0
      ? Math.round((completed.length / roadmap.topics.length) * 100)
      : 0;

  return (
    <Layout>
      {/* EXPORT BUTTON */}
      <div style={{ textAlign: "right", marginBottom: "16px" }}>
        <button style={styles.exportBtn} onClick={exportPDF}>
          📄 Export Roadmap as PDF
        </button>
      </div>

      {/* CONTENT TO EXPORT */}
      <div ref={roadmapRef}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>{roadmap.subject} Roadmap</h1>
          <p style={styles.subtitle}>Level: {roadmap.level}</p>
        </div>

        {/* Progress */}
        <div style={styles.progressBox}>
          <div style={styles.progressTop}>
            <span>Overall Progress</span>
            <strong>{progress}%</strong>
          </div>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: `${progress}%`,
              }}
            />
          </div>
          <p style={styles.progressText}>
            {completed.length} of {roadmap.topics.length} topics completed
          </p>
        </div>

        {/* Roadmap Graph */}
        <div style={styles.graphBox}>
          <RoadmapD3
            topics={roadmap.topics}
            completed={completed}
            onToggle={toggleTopic}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Roadmap;

/* ---------------- STYLES ---------------- */

const styles = {
  header: {
    marginBottom: "24px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "6px",
  },
  subtitle: {
    color: "#6b7280",
  },
  exportBtn: {
    padding: "10px 18px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
  },
  progressBox: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "32px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  },
  progressTop: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    fontWeight: "600",
  },
  progressBar: {
    height: "10px",
    background: "#e5e7eb",
    borderRadius: "999px",
    overflow: "hidden",
    marginBottom: "8px",
  },
  progressFill: {
    height: "100%",
    background: "#22c55e",
    transition: "width 0.4s ease",
  },
  progressText: {
    fontSize: "14px",
    color: "#6b7280",
  },
  graphBox: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  },
};
