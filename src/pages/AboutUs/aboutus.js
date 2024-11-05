import React from 'react';
import styles from './aboutus.module.css'; 
import NavBar from '../../modules/navbar/navbar'
import Footer from '../../modules/footer/footer';

const AboutUs = () => {
    return (
        <div>
          <NavBar/>
          <div className={styles.aboutUsContainer}>
              <h1 className={styles.sectionTitle}>About Us</h1>
              <p className={styles.introText}>
                  Welcome to <span className={styles.storeName}>My Supplement Store</span> – Your Partner in Health and Wellness!
              </p>
              <p className={styles.text}>
                  At <span className={styles.storeName}>My Supplement Store</span>, we believe that a balanced lifestyle, fueled by high-quality supplements, can help you reach your full potential. Founded on a passion for health and fitness, we aim to empower our customers by providing premium supplements that support their wellness goals.
              </p>
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <p className={styles.text}>
                  Our mission is to enhance the health, performance, and overall well-being of our customers. Whether you're aiming to boost your energy, improve your athletic performance, or simply maintain a balanced and healthy lifestyle, we offer a wide range of products to help you on your journey.
              </p>
              <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
              <p className={styles.text}>
                  <strong>Quality You Can Trust:</strong> We work with reputable brands known for their rigorous quality standards, ensuring that each product is safe, effective, and made with the best ingredients.
              </p>
              <p className={styles.text}>
                  <strong>Wide Selection:</strong> From vitamins and minerals to protein powders, pre-workouts, and recovery supplements, we provide a comprehensive range of products for every health need.
              </p>
              <p className={styles.text}>
                  <strong>Expert Guidance:</strong> Our team is passionate about fitness and wellness. We’re here to help you make informed decisions and choose the products that best fit your needs.
              </p>
              <p className={styles.text}>
                  <strong>Customer Satisfaction:</strong> Your health and happiness are our top priorities. Our support team is always ready to assist with any questions, and we strive to ensure a smooth, seamless shopping experience.
              </p>
              <h2 className={styles.sectionTitle}>Our Promise to You</h2>
              <p className={styles.text}>
                  <span className={styles.storeName}>My Supplement Store</span> is more than just a store – we’re your partners in achieving a healthier, happier life. We are committed to offering you high-quality products at fair prices, with the convenience of shopping from home. Every supplement we stock is carefully selected to meet our standards, so you can shop with confidence.
              </p>
              <h2 className={styles.sectionTitle}>Join Our Community</h2>
              <p className={styles.text}>
                  We’re here to support you in every step of your fitness journey. Follow us on social media for tips, updates on new arrivals, and community stories. Let's work together toward a healthier future!
              </p>
              <p className={styles.text}>
                  **Thank you for choosing <span className={styles.storeName}>My Supplement Store</span>. Here’s to your health!**
              </p>
          </div>
          <Footer style={{marginTop:'0'}}/>
      </div>
    );
};

export default AboutUs;
