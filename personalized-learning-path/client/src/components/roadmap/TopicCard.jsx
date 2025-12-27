const TopicCard = ({ topic, completed, onToggle }) => {
  return (
    <div
      style={{
        border: "1px solid #444",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "12px",
        background: completed ? "#1f2937" : "#111827",
      }}
    >
      <h3>{topic.title}</h3>
      <p style={{ color: "#9ca3af" }}>{topic.description}</p>

      {topic.prerequisites.length > 0 && (
        <p style={{ fontSize: "14px" }}>
          Prerequisites: {topic.prerequisites.join(", ")}
        </p>
      )}

      <button onClick={onToggle} style={{ marginTop: "10px" }}>
        {completed ? "Mark as Incomplete" : "Mark as Completed"}
      </button>
    </div>
  );
};

export default TopicCard;
