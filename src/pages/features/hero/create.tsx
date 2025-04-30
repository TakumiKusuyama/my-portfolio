import { Button } from 'react-bootstrap';
import '../../../style/top.css';

const HeroFeature = () => {
    return (
        <section className="hero-section d-flex align-items-center justify-content-center text-white text-center" data-aos="fade-up">
            <div>
                <h1 className="display-3 fw-bold">Welcome to Koo Winter Folio</h1>
                <p className="lead">スキーとスノーボードを愛するフルスタックエンジニア</p>
                <Button variant="light" href="#about">もっと知る</Button>
            </div>
        </section>
    );
};

export default HeroFeature;
