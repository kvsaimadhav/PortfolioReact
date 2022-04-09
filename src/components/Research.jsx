import React from 'react';
import './css/Research.css';
import image1 from './img/icon1.jpeg';
import image2 from './img/icon2.jpeg';
import image3 from './img/icon3.jpeg';
import image4 from './img/icon4.jpeg';

function Research(){
    return(
	<div className="research">
	    <section class="Research" id = "research">
        	<div class="heading white">
         	   <h2>Research Projects</h2>
         	   <p>The Master's Projects are related to Website Designs created on Front-End Technologies such as HTML, CSS, Javascript, ReactJS and Back-End Technologies such as NodeJS, Django. The projects varies on their application capabilities on various methods used in building up the websites. The algorithms used in projects relates to the overall knowledge of Java based algorithm analysis. The Experience with research oriented outcome is completely satisfied on two major projects one relates to Computer Security and one is the Major Project to be done in Master's Degree.</p>
                </div>
        	<div class="content">
          	   <div class="ResearchBx">
            		<img src={image1} alt =""/>
            			<h2>Covid-19 Cases Predictor</h2>
            			<p>Build a website on COVID-19 cases prediction using prophet algorithm with UI based on HTML, CSS, JavaScript on front-end and Django in back-end. Achieved an accuracy of 95% + for 80% test split data from the dataset downloaded from Covid-Tracking Project conducted by US Officials</p>
          	   </div>
          	   <div class="ResearchBx">
            		<img src={image2} alt=""/>
            			<h2>Client Puzzles and DDoS attack</h2>
            			<p>Built a website for generation of client puzzles to increase the accuracy for resolution of DDOS attack from 85 percent to 91 percent.Designed website consists of Naive-Bayes Algorithm for detecting the accuracy with 85%. Developed the application with an extra layer of security to get the DDOS prediction from the IP by 6 percent increase by eliminating the False Negative Rates.</p>
          	   </div>
          	   <div class="ResearchBx">
            		<img src={image3} alt = ""/>
            			<h2>Credit Card Fraud Detector</h2>
            			<p>Developed an algorithm for Credit Card Fraud Detection using Naïve Bayes and Random Forest approaches. The imbalanced dataset is made balanced by randomly choosing the 50-50 split of data from given fraud cases versus genuine transaction. The Naïve Bayes resulted in 90.46% accuracy for the split test data of 60%. The Random Forest resulted in 99% accuracy for the overall imbalanced dataset.</p>
          	   </div>
          	   <div class="ResearchBx">
            		<img src={image4} alt=""/>
            			<h2>University Database with SQL</h2>
            			<p>Data Analysis done on University Database with technologies embedded in SQL. Used triggers, functions, and packages for analysing the university database.</p>
          	   </div>
       	 	</div>
    	    </section>	
	</div>
    );
}

export default Research;