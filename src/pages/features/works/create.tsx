import React, { useState, useEffect } from 'react';
import { WorkItem } from "../../../types";
import Modal from 'react-modal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../style/top.css';


const works: WorkItem[] = [
    {
        title: "Koo Winter Folio",
        image: "work-myportfolio.jpg",
        description: "ポートフォリオサイト",
        detail: "本Webページです。ReactとTypescriptを使用し、ランディングページに仕上げました。",
        technologies: ["React", "Typescript", "Vite", "Vercel", "Git", "Github"],
        links: [
            { label: "サイトはこちら", url: "https://koo-winter-folio.vercel.app/" },
            { label: "GitHub", url: "https://github.com/TakumiKusuyama/my-portfolio" },
        ],
    },
    {
        title: "Travel Compass",
        image: "travel-compass.jpg",
        description: "スキー場検索サイト",
        detail: `私のデビュー作品です。スキー場を検索できるサイトとなっており、出発地的からの距離を比較して一覧表示してくれます。¥n
        スキー・スノーボードに関する記事も適宜更新しております。`,
        technologies: ["Spring Boot", "Java", "jQuery", "HTML/CSS", "Linux", "Amazon Lightsail", "Git"],
        links: [
            { label: "サイトはこちら", url: "https://travel-compass.com" },
            { label: "GitHub", url: "https://github.com/TakumiKusuyama/south-tree-app" },
        ],
    },
];

Modal.setAppElement('#root');

const Works: React.FC = () => {
    const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <section className="works-section" id="works">
            <h2 className="works-title">Works</h2>
            <p className="works-description">
                腕によりをかけて制作した、愛すべき成果物たちをご紹介します。
            </p>
            <div className="works-grid">
                {works.map((work, index) => (
                    <div className="work-card" key={index} onClick={() => setSelectedWork(work)} data-aos="fade-up">
                        <img src={`images/${work.image}`} alt={work.title} />
                        <p className="work-title">{work.title}</p>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={selectedWork !== null}
                onRequestClose={() => setSelectedWork(null)}
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                {selectedWork && (
                    <>
                        <h3>{selectedWork.title}</h3>
                        <img src={`images/${selectedWork.image}`} alt={selectedWork.title} style={{ width: '100%' }} />

                        {/* detail（改行処理付き） */}
                        {selectedWork.detail?.split('¥n').map((line, index) => (
                            <p style={{ margin: '5px 0 0 0' }} key={index}>{line}</p>
                        ))}

                        {/* 使用技術 */}
                        {selectedWork.technologies && (
                            <div style={{ marginTop: "1rem" }}>
                                <strong>使用技術:</strong>
                                <ul style={{ paddingLeft: "1.2rem" }}>
                                    {selectedWork.technologies.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* 外部リンク */}
                        {selectedWork?.links && (
                            <div style={{ marginTop: "1rem" }}>
                                <strong>外部リンク:</strong>
                                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                                    {selectedWork.links.map((link, index) => (
                                        <li key={index}>
                                            🔗 <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <button onClick={() => setSelectedWork(null)}>閉じる</button>
                    </>
                )}
            </Modal>

        </section >
    );
};

export default Works;
