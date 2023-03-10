import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""

  })

  function handleChange(e) {
    e.preventDefault()
    const {name, value} = e.target
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }))
}


  const sendEmail = (e) => {
    e.preventDefault();
    setFormData(prevData => ({
        name: "",
        email: "",
        message: ""

    }))
    
    emailjs.sendForm('v-school-portfolio', 'template_vwsqje2', form.current, '4mPpzylwN9A6vjNBD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='message-container'>
        <form ref={form} onSubmit={sendEmail}>
      <label className='label form-input' htmlFor="name">name:</label>
      <input 
        required
        className='form-input'
        type="text" 
        name="name"
        value={formData.name}
        onChange={handleChange}/>
      <label className='label form-input' htmlFor="email">email:</label>
      <input 
        required
        className="form-input"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}/>
      <label className='label form-input' htmlFor="message">message:</label>
      <textarea 
        className='form-text form-input'
        name="message" 
        value={formData.message}
        onChange={handleChange}/>
      <input 
        className='form-button'
        type="submit" 
        value="send message" />
    </form>
    </div>
  );
};