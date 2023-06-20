import React, { useReducer, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";
import Topbar from "../Topbar/Topbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact(){
    AOS.init({duration:1000})
    const form = useRef();
    const resetForm = () => {dispatch({type: 'Reset'})};
    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
              alert("Email has been sent successfully")
          }, (error) => {
              console.log(error.text);
              alert("Email could not be sent. Please enter the details carefully")
          });
        resetForm();
      };
    const[formState, dispatch] = useReducer(reducer, {name : "", email : "", message : ""});
    function reducer(state, action){
        switch(action.type){
            case "Name" :
                return {...state, name : action.payload};
            case "Email" :
                return {...state, email : action.payload};
            case "Message" :
                return {...state, message : action.payload};
            case "Reset" : 
                return{name : "", email : "", message : ""}; 
            default : return state;
        }
    }
    return(
        <div className="contact-container">
            <div className="contact-topbar">
                <Topbar />
            </div>
            <div className="contact-us-container" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                <div className="contact-desc">
                    <h1 className="contact-desc-title">Contact Us</h1>
                    <h2 className="contact-desc-desc">Have question about Physics & Astronomy Club, or interested in joining? Please reach out - we're happy to help</h2>
                </div>
                <form ref={form} onSubmit={handleSubmit} className="contact-form">
                    <label>Name </label>
                    <input 
                    required
                    name = "form-name"
                    type = "text"
                    value = {formState.name}
                    onChange = {(event) => {dispatch({type : "Name", payload : event.target.value})}}/>
                    <label>Email </label>
                    <input 
                    required
                    name = "form-email"
                    type = "text"
                    value = {formState.email}
                    onChange = {(event) => {dispatch({type : "Email", payload : event.target.value})}}/>
                    <label>Message</label>
                    <textarea 
                    required
                    rows={5}
                    name = "form-message"
                    value = {formState.message}
                    onChange = {(event) => {dispatch({type : "Message", payload : event.target.value})}}/>
                    <div className="form-submit">
                        <button className="form-submit-btn">Send</button>
                    </div> 
                </form>
            </div>
        </div>
    )
}