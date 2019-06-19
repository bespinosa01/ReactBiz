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

							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</p>

							<p>
								Duis aute irure dolor in reprehenderit in
								voluptate velit esse cillum dolore eu fugiat
								nulla pariatur.
							</p>

							<p>
								Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim
								id est laborum.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CardFront;
