import { Container, Form, Button } from 'react-bootstrap';

type Props = {
    name: string;
    email: string;
    message: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
};

const ContactFeature = ({ name, email, message, onChange, onSubmit }: Props) => {
    return (
        <section id="contact" className="py-3">
            <Container>
                <h1 className="mb-4 text-center">Contact</h1>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>名前</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={name}
                            onChange={onChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>メールアドレス</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>メッセージ</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name="message"
                            value={message}
                            onChange={onChange}
                            required
                        />
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="primary" type="submit">送信</Button>
                    </div>
                </Form>
            </Container>
        </section>
    );
};

export default ContactFeature;