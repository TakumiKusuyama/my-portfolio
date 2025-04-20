import React from "react";
import RadarChartBlock from "./RadarChartBlock";
import { SkillData } from "../../../types";
import styles from "../../../style/skill.module.css";

const frontAndDesignData: SkillData[] = [
    { subject: "HTML/CSS", value: 3 },
    { subject: "React", value: 2 },
    { subject: "jQuery", value: 3 },
    { subject: "JavaScript/TypeScript", value: 3 },
    { subject: "Canva", value: 2 },
    { subject: "Figma", value: 1 },
];

const backEndData: SkillData[] = [
    { subject: "Java", value: 3 },
    { subject: "Seaser2", value: 3 },
    { subject: "Spring Boot3", value: 3 },
    { subject: "MySQL", value: 3 },
    { subject: "PostgreSQL", value: 2 },
    { subject: "Python", value: 1 },
];

const devOpsData: SkillData[] = [
    { subject: "Linux", value: 3 },
    { subject: "Git/GitHub", value: 3 },
    { subject: "AWS", value: 2 },
    { subject: "Agile Development", value: 2 },
    { subject: "Docker", value: 2 },
    { subject: "Jenkins", value: 2 },
];

const SkillOrganism: React.FC = () => {
    return (
        <div className={styles.container}>
            <RadarChartBlock title="Front-And-Design" color="#f78ca2" data={frontAndDesignData} />
            <RadarChartBlock title="Back-end" color="#80cbc4" data={backEndData} />
            <RadarChartBlock title="DevOps" color="#ffd180" data={devOpsData} />
        </div>
    );
};

export default SkillOrganism;
