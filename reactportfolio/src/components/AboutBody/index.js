import React from "react";
import Container from "../Container"

function AboutBody(){
  return(
    <Container>
      	<h1>About Me</h1>
			<hr />
			<div className="row" className="card-img-top embed-responsive-item">
				<img src="images\curly-top.jpg"  />

				<div className="col">
					<p>
						My name is Marcia Paige. I am often called Marcia Angelique. I am
						currently enrolled in University of Richmond Boot Camp for Coding.
						My ultimate goal is to specialize in front-end  development to curate 
						functional and visually appealing web applications. 
					</p>

					<p>
						I ran an organization called "Chief in Stilettos". It held an annual
						event called "Little Black Dress Night", a networking event for
						women in business to have fun and potentially meet other business
						owners to build relationships to increase their network and
						networth.
					</p>
					<p>
						To explore my professional endeavors, please click here:
						<a href="mPaigeResume.pdf">Resume</a>
					</p>
					<div className="container">
				
						<link
							rel="stylesheet"
							href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
						/>
			
						<a href="https://www.facebook.com/marcia.a.paige/" className="fa fa-facebook"></a>
					
						<a href="https://www.linkedin.com/in/marcia-paige-04ba13167/" className="fa fa-linkedin"></a>
					</div>
		
				</div>
        </div>
    </Container>
  )


  
}
export default AboutBody;