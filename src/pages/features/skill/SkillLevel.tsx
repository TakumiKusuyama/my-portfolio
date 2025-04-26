import React from "react";
import RadarChartBlock from "./LevelDescription"
import { Description } from "../../../types";
import LevelDescription from "./LevelDescription"

const SkillLevel: React.FC = () => {
    const frontEndLevels: Description = {
        5: "Industry leader",
        4: "Expert leader",
        3: "Full fiedged",
        2: "Use a little",
        1: "Beginner",
    };

    const backEndLevels: Description = {
        5: "Industry leader",
        4: "Expert leader",
        3: "Full fiedged",
        2: "Use a little",
        1: "Beginner",
    };

    const devOpsLevels: Description = {
        5: "Industry leader",
        4: "Expert leader",
        3: "Full fiedged",
        2: "Use a little",
        1: "Beginner",
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            <LevelDescription title="Front-End-Levels" levels={frontEndLevels} />
            <LevelDescription title="Back-End-Levels" levels={backEndLevels} />
            <LevelDescription title="DevOps" levels={devOpsLevels} />
        </div>
    );
};

export default SkillLevel;
