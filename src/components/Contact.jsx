import { useState } from 'react';
import Reveal from './Reveal';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) newErrors.name = "Name is required";

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters long";
        } else if (formData.message.length > 500) {
            newErrors.message = "Message cannot exceed 500 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const { name, email, message } = formData;

            // Structured WhatsApp Message Template
            // Using template literals which preserve newlines
            const whatsappMessage =
                `Hi Mewar Treats! 🍧

I was browsing your website and wanted to get in touch.

*My Query:*
"${message}"

*My Details:*
👤 *Name:* ${name}
📧 *Email:* ${email}

Looking forward to your response!`;

            // Encode the message properly for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/917747870418?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <Reveal>
                    <div className="section-header text-center">
                        <span className="subtitle">DISTRIBUTORSHIP ENQUIRY</span>
                        <h2>Apply for Mewar Treats Distributorship</h2>
                    </div>
                </Reveal>

                <div className="contact-content">
                    <Reveal animation="slide-right">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className={errors.name ? 'error' : ''}
                                />
                                {errors.name && <span className="error-text">{errors.name}</span>}
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className={errors.email ? 'error' : ''}
                                />
                                {errors.email && <span className="error-text">{errors.email}</span>}
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us what you think..."
                                    className={errors.message ? 'error' : ''}
                                ></textarea>
                                {errors.message && <span className="error-text">{errors.message}</span>}
                                <span className="char-count" style={{ fontSize: '0.8rem', color: '#888', display: 'block', textAlign: 'right', marginTop: '5px' }}>
                                    {formData.message.length}/500
                                </span>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">Send via WhatsApp</button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
