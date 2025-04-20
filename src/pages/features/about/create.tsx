import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../../style/top.css';

const AboutFeature = () => {
    return (
        <section id="about" className="py-5" data-aos="fade-up">
            <Container>
                <h1 className="text-center mb-4">About Me</h1>
                <Row className="align-items-center">
                    <Col md={1}></Col>
                    <Col md={3}>
                        <img src="/images/about.jpg" className="img-fluid rounded" alt="About" />
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text>東京都在住のシステムエンジニア。</Card.Text>
                                <Card.Text>大学で情報工学を学んだのち、外資系ITコンサルティング企業でECサイトの開発に従事。本業の傍ら、個人でサイトやアプリの開発に取り組んでいる。</Card.Text>
                                <Card.Text>インフラからフロントサイド、プロジェクトリーダーまで、幅広く経験してきた。</Card.Text>
                                <Card.Text>趣味は、ウィンタースポーツ。スキーとスノーボード絞ることができず、どちらも嗜んでいる。</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}></Col>

                </Row>
            </Container>
        </section>
    );
};

export default AboutFeature;