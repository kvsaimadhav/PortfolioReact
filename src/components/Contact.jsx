import React from 'react';
import './css/Contact.css';

function Contact(){
   return(
      <div className="contact">
         <section class="Contact" id = "contact">
            <div class="heading white">
               <h2>Contact Us</h2>
               <p>Please Enter your details for further talking about the job opportunity you have.</p>
            </div>
            <div class="content">
               <div class="contactInfo">
                  <h3>Contact Info</h3>
                  <div class="contactInfoBx">
                     <div class="box">
                        <div class="text">
                           <h3>Address</h3>
                           <p>1825 South Crawford Street, Mount Pleasant, Michigan - 48858</p>
                        </div>
                     </div>
                     <div class="box">
                        <div class="text">
                           <h3>Phone</h3>
                           <p>313-438-8709</p>
                        </div>
                     </div>
                     <div class="box">
                        <div class="text">
                           <h3>Email</h3>
                           <p>venkatasaimadhavkaza@gmail.com</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="formBx">
                  <form>
                     <h3>Message Me</h3>
                     <input type="text" name="" placeholder="Full Name"/>
                     <input type="email" name="" placeholder="Email"/>
                     <textarea placeholder="Your Message"></textarea>
                     <input type="submit" value="Send"/>
                  </form>
               </div>
            </div>
         </section>
      </div>
   );
}

export default Contact;