import React from 'react';
import { WorkItem } from "../../../types";


const works: WorkItem[] = [
    {
        title: "My Winter Portfolio",
        image: "work-myportfolio.jpg",
        description: "ポートフォリオサイト",
        url: "http://localhost:5173/"
    },
    {
        title: "Travel Compass",
        image: "travel-compass.jpg",
        description: "スキー場検索サイト",
        url: "https://travel-compass.com/"
    },
];

const Works: React.FC = () => {
    return (
        <section className="works-section" id="works">
            <h2 className="works-title">Works</h2>
            <p className="works-description">
                腕によりをかけて制作した、愛すべき成果物たちをご紹介します。
            </p>
            <div className="works-grid">
                {works.map((work, index) => (
                    <a href={work.url} target="_blank">
                        <div className="work-card" key={index}>
                            <img src={`images/${work.image}`} alt={work.title} />
                            <p className="work-title">{work.title}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Works;
