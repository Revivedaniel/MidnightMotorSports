
// header (Black) - with logo, socials, login/sign up
// nav - Home, Products, Contact Us
// body - Contact form to input email address, message, etc.
// footer - Business Info (address, phone number), GoogleMaps?, Copyright, socials   
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [contacted, setContacted] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setContacted(true);

        emailjs.sendForm('service_e64f7yn', 'template_7uur8il', form.current, 'user_6NTSPvwgNeDGUGk3fdqAE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        form.current.reset()
    };

    return (
        <div className='formcontainer'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Full Name</label>
                <input type="text" name="fullName" placeholder="Full Name" required></input>

                <label>Email</label>
                <input type="email" name="email" placeholder="Email" required></input>

                <label>Choose Subject</label>
                <select name="subject" required>
                    <option value="Looking For A Part">Looking For A Part</option>
                    <option value="Looking For A Suggestion">Looking For A Suggestion</option>
                    <option value="Looking For A Custom Part Or Job">Looking For A Custom Part Or Job</option>
                </select>

                <label>Message</label>
                <textarea name="message" placeholder="Message"></textarea>

                <button className='submitBtn' type="submit" value="Submit">Submit</button>
                {contacted && <div className="alert alert-success mt-4">Your message has been sent. You will receive a reply within 5 business days. Thank you!</div>}
            </form>
        </div>
    )
}
