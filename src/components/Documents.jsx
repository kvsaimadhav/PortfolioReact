import React from 'react';
import './css/Documents.css';
import image1 from './img/product1.jpeg';
import image2 from './img/product2.jpeg';
import image3 from './img/product3.jpeg';
import Resume from './docs/Resume.pdf';
import CV from './docs/CV.pdf';
import AWS from './docs/AWS.pdf';

function Documents(){
    return(
	<div className="documents">
		<section class="Documents" id = "documents">
      		   <div class="heading">
        		<h2>Documents</h2>
        		<p>Attached are the updated documents of the portfolio till date</p>
      		   </div>
      		   <div class="content">
        		<div class="DocumentsBx">
           		   <img src={image1} alt=""/>
          		   <a href={Resume} target = "_blank"  rel="noopener noreferrer">Resume</a>
        		</div>
        		<div class="DocumentsBx">
          		   <img src={image2} alt=""/>
            		   <a href={CV} target = "_blank"  rel="noopener noreferrer">Cover Letter</a>
        		</div>
        	 	<div class="DocumentsBx">
          		   <img src={image3} alt=""/>
            		   <a href={AWS} target = "_blank"  rel="noopener noreferrer">Certificate</a>
        		</div>
      		   </div>
      		   <div class = "heading">
         		<a href="https://kvsaimadhav.github.io/Portfolio-2021/" class="btn" target="_blank"  rel="noopener noreferrer"> View More</a>
      		   </div>
    		</section>
	</div>
    );
}

export default Documents;