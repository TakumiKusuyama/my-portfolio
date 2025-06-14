import React from "react";
import RadarChartBlock from "../../../components/common/RadarChartBlock";
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
    { subject: "Spring Boot3", value: 2 },
    { subject: "MySQL", value: 3 },
    { subject: "PostgreSQL", value: 1 },
    { subject: "Python", value: 1 },
];

const devOpsData: SkillData[] = [
    { subject: "Linux", value: 3 },
    { subject: "Git/GitHub", value: 3 },
    { subject: "AWS", value: 2 },
    { subject: "Agile Development", value: 2 },
    { subject: "Docker", value: 1 },
    { subject: "GA4/GTM", value: 2 },
];

const SkillChart: React.FC = () => {
    return (
        <div className={styles.container}>
            <RadarChartBlock title="Front-And-Design" color="#f78ca2" data={frontAndDesignData} />
            <RadarChartBlock title="Back-End" color="#80cbc4" data={backEndData} />
            <RadarChartBlock title="DevOps" color="#ffd180" data={devOpsData} />
        </div>
    );
};


export default SkillChart;
