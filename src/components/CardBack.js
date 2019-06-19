import React from "react";

import CardInput from "./CardInput";
import CardTextArea from "./CardTextArea";
import CardBtn from "./CardBtn";
import CardProfileLinks from "./CardProfileLinks";

class CardBack extends React.Component {
	render() {
		return (
			<div className="card-side side-back">
				<div className="ui segment">
					<form formAction="" className="ui mini form">
						<h4 className="ui dividing header">Let's Talk</h4>

						<div className="ui two column very relaxed grid">
							<div className="column">
								<CardInput
									name="contactFirstName"
									id="contactFirstName"
									type="text"
									placeholder="Your first name"
								/>
							</div>

							<div className="column">
								<CardInput
									name="contactLastName"
									id="contactLastName"
									type="text"
									placeholder="Your last name"
								/>
							</div>
						</div>
						<div className="ui two column very relaxed grid">
							<div className="column">
								<CardInput
									name="contactEmail"
									id="contactEmail"
									type="email"
									placeholder="Your email address"
								/>
							</div>

							<div className="column">
								<CardInput
									name="contactSubject"
									id="contactSubject"
									type="text"
									placeholder="Subject"
								/>
							</div>
						</div>
						<div className="ui one column very relaxed grid">
							<div className="column">
								<CardTextArea
									name="contactMessage"
									id="contactMessage"
									placeholder="Your message"
								/>
								<CardBtn
									className="ui blue button"
									type="submit"
									value="Submit"
								/>
							</div>
						</div>
					</form>
				</div>
				<CardProfileLinks />
			</div>
		);
	}
}
export default CardBack;
