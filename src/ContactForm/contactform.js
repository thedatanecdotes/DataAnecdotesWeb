import React from "react";
import '../CSS/ContactForm.css';
import Footer from "../StorySection/Footer";
import emailjs from 'emailjs-com';
import Navbarteam from "../NavBar";
import  BackgroundParticle from '../background';

require('dotenv').config()

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, e.target, process.env.REACT_APP_YOUR_USER_ID)
      .then((result) => {
          alert("Your message was sent!");
      }, (error) => {
          alert("Sorry! There has been an error!");
          console.log(process.env)
      });
  }
export default function ContactUs() {
    return (
        <>

      <BackgroundParticle/>
            <div style={{position: "absolute",top: 0,left: 0,width: "100vw",height: "100vh"}} >
            <Navbarteam/>
			<div className="wrapper">
				<div className="inner">
					<form action="" onSubmit={sendEmail}>
						<h3 className="customh3">Contact Us</h3>
						<p className="customp">Liked our work and want to collaborate? Get your hands on any dataset we worked on or drop in your feedback maybe ? We would like to extend our warm reach to you. 
						Leave us a message and we promise to get back to you soon.</p>
						<label className="form-group">
						<input type="text" name="from_name" className="form-control"  required/>
							<span>Your Name</span>
							<span className="border"></span>
						</label>
						<label className="form-group">
						<input type="email" name="user_email" className="form-control"  required/>
							<span for="">Your Mail</span>
							<span className="border"></span>
						</label>
						<label className="form-group" >
							<textarea name="message" id="" className="form-control" required></textarea>
							<span for="">Your Message</span>
							<span className="border"></span>
						</label>
						<input type="submit" value="Send" className="button2"/>
					</form>
				</div>
			</div>
			<Footer/>
      </div>
       </>
    );
}
