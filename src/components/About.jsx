import React from 'react';
import './css/About.css';
import image from './img/img1.jpeg';

function About(){
   return(
      <div className="about">
         <section class="about" id = "about">
         <div class="heading">
            <h2>About Me</h2>
         </div>
         <div class="content">
            <div class="contentBx w50">
               <h3>I'm  a Front End Web Developer.</h3>
               <p>Passionate Master's student, capable of applying industry knowledge to theoretical subjects and vice-versa. Interested in Analytics and Development. I can able to analyze and implement advanced algorithms. Value Offered: Big Data Analytics, Data Mining, Data Modelling, Analysis Tools such as SQL, Artificial Intelligence, Machine Learning.</p>
            </div>
            <div class="w50">
               <img src={image} class="img"/>
            </div>
         </div>
         </section>
      </div>
   );
}

export default About;