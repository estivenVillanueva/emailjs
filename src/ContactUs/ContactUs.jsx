import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

export const ContactUs = () => {
   const refForm = useRef();

   const handleSubmit = (e) => {
    e.preventDefault();
   
    const serviceId = "service_bby8nvc";
    const templateId = "template_r2bgnbq";
    const publicKey = "8DvWGB2ZA7o8-uIH3";

    emailjs.sendForm(serviceId, templateId, refForm.current, publicKey)
    .then(result => console.log(result.text))
    .catch(error => console.log(error.text))
}

return (
    <form ref={refForm} className="contact-form" onSubmit={handleSubmit}>
        <div className='header-contact'>
            <h1>Contact Us</h1>
            <p>Please fill out the form below to contact us</p>
        </div>
        <fieldset className='field-name'>
            <label className='symbol-required' htmlFor=''>Name</label>
            <input type='text'name='username' placeholder='Enter your name' required/>
        </fieldset>

        <fieldset className='field-email'>
            <label className='symbol-required' name='email'>Email</label>
            <input type='email' name='email' id='email' placeholder='Enter your email' required/>
        </fieldset>

        <fieldset className='field-message'>
            <label className='symbol-required' >Message</label>
            <textarea maxLength='500' name='message' id=''cols='30' rows='10' placeholder='Enter your message' required></textarea>
        </fieldset>

        <button className='btn-send'>Send</button>
    </form>
 
    ) 
}
