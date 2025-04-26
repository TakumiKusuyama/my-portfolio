import { useState } from 'react';
import ContactFeature from '.';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('https://formspree.io/f/xldjzaon', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <>
            <ContactFeature
                name={formData.name}
                email={formData.email}
                message={formData.message}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <div className="text-center mt-3 pb-3">
                {status === 'loading' && <p className="pb-3">送信中です...</p>}
                {status === 'success' && <p className="pb-3" style={{ color: 'green' }}>送信完了！</p>}
                {status === 'error' && <p className="pb-3" style={{ color: 'red' }}>送信失敗</p>}
            </div>
        </>
    );
};

export default ContactPage;