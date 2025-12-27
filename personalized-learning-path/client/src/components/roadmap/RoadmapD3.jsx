import { useEffect, useRef } from "react";
import * as d3 from "d3";

const RoadmapD3 = ({
  topics = [],
  edges = [],
  completed = [],
  onToggle = () => {},
}) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!topics.length) return;
    if (!Array.isArray(edges)) return;

    const width = 900;
    const height = 350;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    svg.attr("width", width).attr("height", height);

    const nodes = topics.map((t, i) => ({
      ...t,
      x: 120 + i * 180,
      y: height / 2,
    }));

    const isLocked = (id) => {
      const prereqs = edges.filter((e) => e[1] === id).map((e) => e[0]);
      return prereqs.some((p) => !completed.includes(p));
    };

    // Lines
    svg
      .selectAll("line")
      .data(edges)
      .enter()
      .append("line")
      .attr("x1", (d) => nodes.find((n) => n.id === d[0])?.x)
      .attr("y1", (d) => nodes.find((n) => n.id === d[0])?.y)
      .attr("x2", (d) => nodes.find((n) => n.id === d[1])?.x)
      .attr("y2", (d) => nodes.find((n) => n.id === d[1])?.y)
      .attr("stroke", "#9ca3af")
      .attr("stroke-width", 2);

    // Nodes
    svg
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 28)
      .attr("fill", (d) =>
        completed.includes(d.id)
          ? "#22c55e"
          : isLocked(d.id)
          ? "#9ca3af"
          : "#3b82f6"
      )
      .style("cursor", (d) => (isLocked(d.id) ? "not-allowed" : "pointer"))
      .on("click", (_, d) => {
        if (isLocked(d.id)) {
          alert("Complete prerequisites first");
          return;
        }
        onToggle(d.id);
        if (d.resources?.length) {
          alert(`Resources:\n${d.resources.join("\n")}`);
        }
      });

    // Labels
   svg
     .selectAll("text")
     .data(nodes)
     .enter()
     .append("text")
     .attr("x", (d) => d.x)
     .attr("y", (d) => d.y + 50)
     .attr("text-anchor", "middle")
     .attr("fill", "#111827")
     .attr("font-size", "14px")
     .attr("font-weight", "600")
     .style("cursor", "pointer")
     .text((d) => d.label)
     .on("click", (_, d) => {
       onToggle(d.id);
     });
  }, [topics, edges, completed, onToggle]);

  return <svg ref={svgRef} />;
};

export default RoadmapD3;
