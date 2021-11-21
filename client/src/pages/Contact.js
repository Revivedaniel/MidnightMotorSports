
// header (Black) - with logo, socials, login/sign up
// nav - Home, Products, Contact Us
// body - Contact form to input email address, message, etc.
// footer - Business Info (address, phone number), GoogleMaps?, Copyright, socials   
import React from 'react'

export default function Contact() {
    return (
        <div>
            <form class="formEntrie">
                <label for="first_name">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Enter Your First Name"></input>

                <label for="last_name">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Enter Your Last Name"></input>

                <label for="answer">Choose Option</label>
                <select id="question" name="question">
                    <option value="looking for part">Looking For A Part</option>
                    <option value="looking for suggestion">Looking For A suggestion</option>
                    <option value="looking for a custom part or job">Looking For A Custom Part Or Job</option>
                </select>

                <label for="subject">Question or Comments</label>
                <textarea id="subject" name="subject" placeholder="Enter Your Question or Comment" style="height:200px"></textarea>

                <input type="submit" value="Submit">Submit</input>

            </form>


        </div>
    )
}
