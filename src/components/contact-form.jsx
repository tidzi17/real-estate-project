import React, { useState, useEffect, useRef }  from "react";
import { useFormik } from "formik";
import { formSchema  } from "./formShema";
import {LuPhone} from 'react-icons/lu';
import {TfiEmail} from 'react-icons/tfi';
import { FcCheckmark } from "react-icons/fc";
import '../styles/main.scss';

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
};

const Form = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedValues, setSubmittedValues] = useState(null);
    const messageBoxRef = useRef(null);

    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
        firstName: "",
        lastName: "",
        phonenum: "", 
        email: "",
        comment: "",
    },
        validationSchema: formSchema,
        onSubmit: (formValues, actions) => {
            setSubmittedValues(formValues);
            onSubmit(formValues, actions);
            setIsSubmitted(true);
        },
    });
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await handleSubmit();
        /* setIsSubmitted(true); */
      };

      useEffect(() => {
        const handleClickOutside = (event) => {
          if (messageBoxRef.current && !messageBoxRef.current.contains(event.target)) {
            setIsSubmitted(false);
          }
        };
    
        document.addEventListener("click", handleClickOutside);
    
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);

      useEffect(() => {
        if (isSubmitted) {
          document.body.classList.add("no-scroll");
        } else {
          document.body.classList.remove("no-scroll");
        }
      }, [isSubmitted]);


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
                        <div className="contact-list-item">
                            <i className="icon"><LuPhone/></i>
                            <span className="text">+598/5659-56</span>
                        </div>
                        <div className="contact-list-item">
                            <i className="icon"><TfiEmail/></i>
                            <span className="text"> info@harmony.com</span>
                        </div>
                </div>
            </div>
            {isSubmitted && (
        <div ref={messageBoxRef} className="message-box">
          <div className="message">
            <div className="check"><FcCheckmark className="icon"/></div>
          <h2> Thank you </h2>
          <h3> Contact form has been successfully submitted</h3>
          <h4>Check your email for additional information.</h4>
          </div>
          </div>
               )}
            <div className={`contact-form-container ${isSubmitted ? 'blurred' : ''}`}>
            <form onSubmit={handleFormSubmit} autoComplete="off" >
            <input 
            type="text"
            name="firstName" 
            id="firstName" 
            value={values.firstName} 
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="First Name"
            className={errors.firstName && touched.firstName ? "input-error" : ""}
            />
            {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}

            <input 
            type="text"
            name="lastName"
            id="lastName" 
            value={values.lastName} 
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Last Name"
            className={errors.lastName && touched.lastName ? "input-error" : ""}
              />
            {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}

            <input 
            type="tel" 
            name="phonenum" 
            id="phonenum" 
            value={values.phonenum} 
             onChange={handleChange} 
             onBlur={handleBlur}
            placeholder="Phone Number"
            className={errors.phonenum && touched.phonenum ? "input-error" : ""}
            />
            {errors.phonenum && touched.phonenum && <p className="error">{errors.phonenum}</p>}

            <input 
            type="email" 
            name="email" 
            id="email" 
            value={values.email} 
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="E-mail"
            className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}

            <textarea 
            name="comment" 
            id="comment" 
            value={values.comment}
            onChange={handleChange}
            placeholder="Additional comment..."></textarea>
            <button disabled={isSubmitting} type="submit" id="submit">Contact Us</button>
        </form>
            </div>
            </div>
        </div>
    )
}

export default Form;