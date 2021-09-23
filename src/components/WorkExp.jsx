import React from 'react';
import './css/WorkExp.css';

function WorkExp(){
    return(
	<div className="workExp">
		<section class="WorkExp" id = "workexp">
      		   <div class="heading">
        		<h2>Work Experience</h2>
        		<p>Dedicated and efficient full stack developer with 3+ years’ experience in application layers, presentation layers, and databases. Certified in both Front-end and Back-end technologies.</p>
      		   </div>
      		   <div class="content">
        		<div class="WorkExpBx">
          			<p>Improved 5% performance of students by organizing content of courses such as Principles of Computer Programming and Data Structures & Algorithms. Conducted Information Sessions for 100 Undergraduate Students of Department of Computer Science. Graded Homework, Labs and Quizzes for 100 Undergraduate Student</p>
          			<h3>Central Michigan University <span>Graduate Assistant</span></h3>
        		</div>
        		<div class="WorkExpBx">
          			<p>Worked on Front-End Technologies such as ReactJS, HTML, CSS, Javascript and Back-End Technologies such as NodeJS, Django. Certified AWS Developer Associate through the knowledge seeked in India from Industrial Experience.</p>
          			<h3>Trigent (India) <span>Full Stack Web Developer</span></h3>
        		</div>
      		   </div>
    		</section>
	</div>
    );
}

export default WorkExp;