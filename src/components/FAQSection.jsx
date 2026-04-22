import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const isServer = typeof window === 'undefined';

  const faqs = [
    {
      question: "What makes Mewar Treats ice cream special?",
      answer: "Our ice cream is handcrafted using traditional Rajasthani recipes passed down through generations. We use 100% pure vegetarian ingredients, farm-fresh milk, and no preservatives or artificial flavors."
    },
    {
      question: "Are all your products vegetarian?",
      answer: "Yes! All Mewar Treats products are 100% pure vegetarian. We take pride in offering authentic traditional ice creams and kulfis that everyone can enjoy."
    },
    {
      question: "Do you use artificial preservatives?",
      answer: "Never! We believe in purity and authenticity. Our ice creams contain no preservatives, no artificial colors, and no artificial flavors - just natural ingredients and traditional recipes."
    },
    {
      question: "Where do you source your ingredients?",
      answer: "We source our milk from local farms in Rajasthan and use premium ingredients like saffron, pistachios, almonds, and cardamom from trusted suppliers who share our commitment to quality."
    },
    {
      question: "Do you offer distributorship opportunities?",
      answer: "Yes! We're expanding our network of distributors across India. Contact us through our distributorship enquiry form to learn about partnership opportunities."
    },
    {
      question: "What is the shelf life of your products?",
      answer: "Since we use no preservatives, our products have a shorter shelf life than commercial ice creams. We recommend consuming within 7-10 days of purchase for the best taste and quality."
    },
    {
      question: "Do you cater for events and parties?",
      answer: "Absolutely! We provide catering for weddings, corporate events, festivals, and special occasions. Contact us with your requirements and we'll create a custom package for your event."
    },
    {
      question: "Are your products available year-round?",
      answer: "Most of our traditional flavors are available year-round. Some seasonal flavors like mango bar are available during peak season to ensure the freshest ingredients."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-padding" itemScope itemType="https://schema.org/FAQPage">
      <div className="container">
        <motion.header 
          className="section-header text-center"
          initial={isServer ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="subtitle" style={{ color: 'var(--color-secondary)' }}>Got Questions?</span>
          <h2 itemProp="name">Frequently Asked Questions</h2>
          <p itemProp="description">Everything you need to know about Mewar Treats artisanal ice cream</p>
        </motion.header>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.article
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              initial={isServer ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 itemProp="text">{faq.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              
              <motion.div
                id={`faq-answer-${index}`}
                className="faq-answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                itemScope
                itemType="https://schema.org/Answer"
              >
                <div className="answer-content" itemProp="text">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="faq-cta text-center"
          initial={isServer ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p>Still have questions? We're here to help!</p>
          <a href="/#contact" className="btn btn-primary" aria-label="Contact us for more information">
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
