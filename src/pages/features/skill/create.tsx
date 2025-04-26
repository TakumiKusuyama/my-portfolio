import React from "react";
import SkillOrganism from "./SkillChart";
import SkillLevel from "./SkillLevel";
import styles from "../../../style/ski.module.css";

const SkillFeature: React.FC = () => {
    return (
        <div id="skills">
            <h1 style={{ textAlign: "center" }}>My Skill Set</h1>
            <SkillOrganism />
            <SkillLevel />
        </div>
    );
};

export default SkillFeature;