import React from "react";
import {
    Form,
    ContactWrapper,
    Image
  } from "./Contact.style";
import emailjs from '@emailjs/browser';
import Fade from 'react-reveal/Fade';
  
import { Link } from "../../components/Button/Button.style";
  
  function Contact() {
    function sendEmail(e){
      e.preventDefault();

      if(e.target.email.value.length <=0 || e.target.msg.value.length <=0 || e.target.name.value.length <=0){
        alert("Os campos não podem ser nulos")
      }else{
        emailjs.sendForm('service_4osk4gu','template_islp4qg',e.target,
        'L2ovCTAi9n2GqgGAa').then((result)=>{
          console.log(result)
          alert("Email enviado com sucesso")
        }, (error)=>{
          console.log(error.text)
          alert("Erro ao enviar email")
        })
      }
      
    }

    return (
      <>
        <ContactWrapper >
          <Fade top>
            
          </Fade>
          <div id="content">
          
          <div>
                      
        
          </div>
          
            <Form onSubmit={sendEmail}>
            <h1>Contact</h1>  
              <label>Name:</label>
              <input type="text" name="name" id="name" placeholder="Name" />
              
              <label>Email:</label>
              <input type="email" name="email" id="email" placeholder="Email" />
              
              <label>Message:</label>
              <textarea rows="4" cols="50" name="msg" id="msg" placeholder="Message"></textarea>
              <Fade top>
                  <button type="submit" value="send">Send</button>
              </Fade>
            </Form>
            </div>
          </ContactWrapper>
      </>
    );
  }
  
  export default Contact;
  