import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";
import { SkillData } from "../../types";
import CustomAngleTick from "./CustomAngleTick";
import styles from "../../style/skill.module.css";

type RadarProps = {
    title: string;
    color: string;
    data: SkillData[];
};

const RadarChartBlock: React.FC<RadarProps> = ({ title, color, data }) => {
    return (
        <div className={styles.chartBlock}>
            <h3 className={styles.chartTitle}>{title}</h3>
            <ResponsiveContainer width="100%" aspect={1}>
                <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" tick={CustomAngleTick} />
                    <PolarRadiusAxis angle={90} domain={[0, 5]} tickCount={6} />
                    <Radar name={title} dataKey="value" stroke={color} fill={color} fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RadarChartBlock;
