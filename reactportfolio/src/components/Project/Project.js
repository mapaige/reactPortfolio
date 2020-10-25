import React from 'react';
import Row from '../Row/Row';
import Col from '../Col/Col';
import Header from '../Header/Header';
import images from '../images/images';
import Links from '../Links/Links';
import './style.css';

function Project(props) {
	return (
		<Row classes="justify-content-center mt-3 project">
			<Col>
				<Header head={props.head} />
				<Row classes="mt-2">
					<Col classes="col-lg-6">
						<Row>
							<Col classes="d-flex mt-3 justify-content-center">
								<images images={props.image} alt={props.alt} />
							</Col>
						</Row>
						<Row>
							<Col classes="d-flex justify-content-center">
								<Links to={props.torepo} text={props.textrepo} />
							</Col>
						</Row>
					</Col>
					<Col classes="col-lg-6 mt-2">
						<p className="tab">{props.content}</p>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

export default Project;
