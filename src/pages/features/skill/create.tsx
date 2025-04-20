import React from "react";
import SkillOrganism from "../../../components/organisms/skill";
import styles from "../../../style/ski.module.css";

const SkillFeature: React.FC = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>My Skill Set</h1>
            <SkillOrganism />
        </div>
    );
};

export default SkillFeature;