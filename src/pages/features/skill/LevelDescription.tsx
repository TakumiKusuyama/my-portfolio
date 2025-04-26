import { LevelBlockProps } from "../../../types";
import "../../../style/common.css";

const LevelDescription: React.FC<LevelBlockProps> = ({ title, levels }) => {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1rem",
            margin: "0.5rem",
            width: "250px",
        }}>
            <h4 style={{ marginBottom: "0.5rem", textAlign: "center" }}>{title}</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {(Object.entries(levels) as [number | string, string][])
                    .sort((a, b) => Number(b[0]) - Number(a[0]))
                    .map(([level, label]) => (
                        <li key={level}>
                            <strong>{level}</strong> - {label}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default LevelDescription;