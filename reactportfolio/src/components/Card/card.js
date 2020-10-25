import React from "react";
import Container from "../Container"

function Card(){
  return(
    <Container>
      <div className="container-fluid">
				<div className="row">
					<div className="card" className="col-lg-6" style="width:600px;">
						<img
							className="card-img-top"
							src="images\new-form3.jpg"
							alt="form to enter sneaker info"
						/>
						<div className="card-body">
								<h4 className="card-title">Hypebeast</h4>
									<p className="card-text">Sell your Sneakers!</p>
										<a href="https://grpprjct2.herokuapp.com/" className="btn btn-primary stretched-link">See Demo</a>
						</div>		
					</div>			
										
					<div className="card" className="col-lg-6" className="container-fluid" style="width: 600px;">
							<img
								className="card-img-top"
								src="images\weather-dash.jpg"
								alt="weather dashboard pic"
							/>
							<div className="card-body">
								<h4 className="card-title">Weather Dashboard</h4>
								<p className="card-text">5 Day Forecast</p>
								<a href="https://mapaige.github.io/weather-dashboard/"
								className="btn btn-primary stretched-link">See Demo</a>
							</div>	
					</div>
				</div>
				
				
				<div className="row">
					<div className="card" className="col-lg-6"  className="container-fluid" style="width: 600px;">
						<img
							className="card-img-top"
							src="images\procasti.jpg"
							alt="weather dashboard pic"
						/>
						<div className="card-body">
							<h4 className="card-title">Procati-Dater</h4>
							<p className="card-text">Plan a date on-the-fly!</p>
							<a href="https://purilisa.github.io/Dinner-And-A-Movie/"
							className="btn btn-primary stretched-link">See Demo</a>
						</div>
					</div>

					<div className="card" className="col-lg-6" className="container-fluid" style="width: 600px;">									
								<img
									className="card-img-top"
									src="images\notes-taker2.jpg"
									alt="notes taker pic"
								/>
								<div className="card-body">
									<h4 className="card-title">Notes Taker</h4>
									<p className="card-text">Application that can be used to write, save, and delete notes.</p>
									<a
										href="https://enigmatic-journey-49100.herokuapp.com/"
										className="btn btn-primary stretched-link"
										>See Demo</a
									>
								</div>
					</div>
				</div>
				
						
					<div className="card"  className="container-fluid" style="width:600px;">
								<img
								className="card-img-top"
									src="images\scheduler.png"
									alt="planner"
								/>
								<div className="card-body">
									<h4 className="card-title">Daily Grind Diary</h4>
									<p className="card-text">Work day time management tool</p>

									<a
										href="https://mapaige.github.io/work-day-scheduler/"
										className="btn btn-primary stretched-link"
										>See Demo</a
									>
								</div>	
					</div>
				</div>
	   </Container>
  )
  }

  export default Card;  		
	