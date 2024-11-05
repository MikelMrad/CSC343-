import React, { useState } from 'react';
import NavBar from '../../modules/navbar/navbar';
import Footer from '../../modules/footer/footer';
import Styles from './contactus.module.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validate = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        
        alert('Form submitted successfully!');
        
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
      <div>
        <NavBar/>
        <form onSubmit={handleSubmit} className={Styles.formContainer}>
            <label className={Styles.label}>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={Styles.input}
                />
                {errors.name && <p className={Styles.errorMessage}>{errors.name}</p>}
            </label>
            
            <label className={Styles.label}>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={Styles.input}
                />
                {errors.email && <p className={Styles.errorMessage}>{errors.email}</p>}
            </label>
            
            <label className={Styles.label}>
                Subject:
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={Styles.input}
                />
                {errors.subject && <p className={Styles.errorMessage}>{errors.subject}</p>}
            </label>
            
            <label className={Styles.label}>
                Message:
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={Styles.textarea}
                ></textarea>
                {errors.message && <p className={Styles.errorMessage}>{errors.message}</p>}
            </label>
            
            <button type="submit" className={Styles.button}>Submit</button>
        </form>
        <Footer/>
      </div>
    );
};

export default ContactForm;
