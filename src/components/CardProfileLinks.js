import React from "react";
class CardProfileLinks extends React.Component {
	render() {
		const profileLinks = ["twitter", "linkedin", "facebook", "github"];

		const linkList = profileLinks.map((link, index) => (
			<div key={index} className="item">
				<button className={`mini ui icon ${link} button`}>
					<i className={`${link} icon`} />
				</button>
			</div>
		));
		return (
			<div className="card-social-links">
				<div className="ui horizontal list">{linkList}</div>
			</div>
		);
	}
}
export default CardProfileLinks;
