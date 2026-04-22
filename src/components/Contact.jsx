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
                `Hi Mewar Treats! 

I was browsing your website and wanted to get in touch.

*My Query:*
"${message}"

*My Details:*
 Name: ${name}
 Email: ${email}

Looking forward to your response!`;

            // Encode the message properly for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/917747870418?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <section id="contact" className="contact-section" itemScope itemType="https://schema.org/ContactPage">
            <div className="container">
                <Reveal>
                    <header className="section-header text-center">
                        <span className="subtitle">DISTRIBUTORSHIP ENQUIRY</span>
                        <h2 itemProp="headline">Apply for Mewar Treats Distributorship</h2>
                        <p itemProp="description">Join our network of distributors and bring authentic Rajasthani ice cream to your region</p>
                    </header>
                </Reveal>

                <div className="contact-content">
                    <Reveal animation="slide-right">
                        <form className="contact-form" onSubmit={handleSubmit} itemScope itemType="https://schema.org/ContactForm">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className={errors.name ? 'error' : ''}
                                    required
                                    aria-required="true"
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                />
                                {errors.name && <span id="name-error" className="error-text">{errors.name}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className={errors.email ? 'error' : ''}
                                    required
                                    aria-required="true"
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                />
                                {errors.email && <span id="email-error" className="error-text">{errors.email}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your distributorship interest..."
                                    className={errors.message ? 'error' : ''}
                                    required
                                    aria-required="true"
                                    aria-describedby={errors.message ? "message-error" : undefined}
                                ></textarea>
                                {errors.message && <span id="message-error" className="error-text">{errors.message}</span>}
                                <span className="char-count" style={{ fontSize: '0.8rem', color: '#888', display: 'block', textAlign: 'right', marginTop: '5px' }}>
                                    {formData.message.length}/500
                                </span>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn" aria-label="Send distributorship enquiry via WhatsApp">Send via WhatsApp</button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
