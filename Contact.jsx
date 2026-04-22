import Reveal from './Reveal';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <Reveal>
                    <div className="section-header text-center">
                        <span className="subtitle">Get In Touch</span>
                        <h2>We'd Love To Hear From You</h2>
                    </div>
                </Reveal>

                <div className="contact-content">
                    <Reveal animation="slide-right">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="Tell us what you think..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
