import React from "react";
import {LuPhone} from 'react-icons/lu';
import {TfiEmail} from 'react-icons/tfi';
import '../styles/main.scss';

function Form() {
    return(
        <div className="form-container">
            <div className="container-content">
            <div className="contact-block">
                <div className="text-block">
                <h3>We are here to help</h3>
                <h2>Contact Us</h2>
                <p>Do not hesitate and contact us for any
                    additional information you may need
                </p>
                </div>
                <div className="contact-links">
                    <p><LuPhone className="icon"/> +598/5659-56</p>
                    <p><TfiEmail className="icon"/> info@harmony.com</p>
                </div>
            </div>
            <div className="contact-form-container">
            <form>
            <div className="name-inputs">
            <input type="text" name="firstname" id="firstname" placeholder="First Name"/>
            <input type="text" name="lastname" id="lastname" placeholder="Last Name"/>
            </div>
            <input type="tel" name="phonenum" id="phonenum" placeholder="Phone Number"/>
            <input type="email" name="email" id="email" placeholder="E-mail"/>
            <textarea name="comment" id="comment" /* cols="40" rows="10" */ placeholder="Additional comment..."></textarea>
            <button type="submit" id="submit">Contact Us</button>
        </form>
            </div>
            </div>
        </div>
    )
}

export default Form;