import React, { useState } from 'react';
import NavBar from '../../modules/navbar/navbar'
import Footer from '../../modules/footer/footer';
import Styles from './contactus.module.css'

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
          <form onSubmit={handleSubmit}>
              <label>
                  Name:
                  <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                  />
                  {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
              </label>
              <br />
              <label>
                  Email:
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                  />
                  {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
              </label>
              <br />
              <label>
                  Subject:
                  <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                  />
                  {errors.subject && <p style={{ color: 'red' }}>{errors.subject}</p>}
              </label>
              <br />
              <label>
                  Message:
                  <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                  ></textarea>
                  {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
              </label>
              <br />
              <button type="submit">Submit</button>
          </form>
          <Footer/>
        </div>
    );
};

export default ContactForm;
