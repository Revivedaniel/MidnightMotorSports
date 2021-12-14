
// header (Black) - with logo, socials, login/sign up
// nav - Home, Products, Contact Us
// body - Contact form to input email address, message, etc.
// footer - Business Info (address, phone number), GoogleMaps?, Copyright, socials   
import React from 'react'

export default function Contact() {
    return (
        <div>
            <form className="formEntrie">
                <div className='formcontainer'>
                    <label for="first_name">Full Name</label>
                    <input type="text" id="fname" name="fullName" placeholder="Full Name"></input>

                    <label for="last_name">Email</label>
                    <input type="text" id="lname" name="lastname" placeholder="Email"></input>

                    <label for="answer">Choose Category</label>
                    <select id="question" name="question">
                        <option value="looking for part">Looking For A Part</option>
                        <option value="looking for suggestion">Looking For A Suggestion</option>
                        <option value="looking for a custom part or job">Looking For A Custom Part Or Job</option>
                    </select>

                    <label for="subject">Message</label>
                    <textarea id="subject" name="subject" placeholder="Send A Message" ></textarea>

                    <button className='submitBtn' type="submit" value="Submit">Submit</button>
                </div>
            </form>


        </div>
    )
}
