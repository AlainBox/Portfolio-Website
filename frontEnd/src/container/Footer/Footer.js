import React, {useState} from 'react';
import {images} from "../../constants";
import {AppWrap, MotionWrap} from "../../wrapper";
import {client} from "../../client";
import "./Footer.scss";

function Footer() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const {fullName, email, message} = formData;

  function handleChangeInput(e){
    const {name, value} = e.target;

    setFormData({...formData, [name]: value})
  };

  function toggleButton(e){
    const eId = e.target;

    if(eId.value.length > 5){
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }

  function handleSubmit(){
    setIsLoading(true);

    const contact = {
      _type: 'contact',
      name: fullName,
      email: email,
      message: message
    }

    client.create(contact)
    .then( () => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    })
  };

  return (
    <>
      <h2 className="head-text"> Chat <span>with</span> me! </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a
            href="mailto:alainkeesbox@gmail.com"
            className="p-text"
            > alainkeesbox@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+31 636013381" className="p-text">+31 636013381</a>
        </div>
      </div>

        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className=" app__footer-input app__flex">
              <input
                name="fullname"    
                className="p-text"
                type="text"
                placeholder="Your Name"
                value={fullName}
                onChange={ e => {handleChangeInput(e); toggleButton(e)}}
                autoComplete="off"
                required="required"
              />

              <input
                name="email"   
                className="p-text"
                type="text"
                placeholder="Your Email"
                value={email}
                onChange={ e => {handleChangeInput(e); toggleButton(e)}}
                autoComplete="off"
                required="required"
              />
            </div>

            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={ e => {handleChangeInput(e); toggleButton(e)}}
                autoComplete="off"
                required="required"
              />
            </div>
              <button
                className="p-text"
                type="submit"
                onClick={handleSubmit}
                disabled={buttonDisabled}
              > Send Message
              </button>
            </div>
          ) : (
            <div>
              <h3 className="head-text app__footer-thanks-message">
              Thank <span>you</span> 
              <br />
              for <span>your</span> message!
              </h3>
            </div>
          )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"  
);