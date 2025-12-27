import { roadmaps } from "../data/roadmaps";

export const generateRoadmap = (assessments) => {
  const roadmap = {};

  assessments.forEach(({ subject, percentage }) => {
    let level = "beginner";

    if (percentage > 70) level = "advanced";
    else if (percentage > 40) level = "intermediate";

    roadmap[subject] = {
      level,
      topics: roadmaps[subject][level],
    };
  });

  return roadmap;
};
