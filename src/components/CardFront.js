import React from "react";
class CardFront extends React.Component {
	render() {
		return (
			<div className="card-side side-front">
				<div className="ui segment">
					<div className="ui two column very relaxed grid">
						<div className="column">
							<img
								src="https://images.pexels.com/photos/2409629/pexels-photo-2409629.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
								alt="front card"
							/>
						</div>

						<div className="column side-front-content">
							<h2>Brian Espinosa</h2>
							<h1>Web Developer</h1>
							<p className="card-content">
								Greetings! I am a Chicago based developer who
								graduated from Aurora University with my
								Bachelor in Business Administration.
							</p>
							<p className="card-content">
								During my time at the University I filled my
								extra curriculars with CS courses and attended a
								few MLH hackathons. My team was fortunate enough
								to be awarded for{" "}
								<i>Best Use of Cloud Computing</i> at the Iowa
								State University Hackaton (Spring '17).
							</p>
							<p className="card-content">
								My passion for building and solving problems
								through tech only grew from there.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CardFront;
