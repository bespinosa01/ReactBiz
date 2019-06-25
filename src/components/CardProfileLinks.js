import React from "react";
class CardProfileLinks extends React.Component {
	render() {
		const twitter = ["twitter", "https://twitter.com/BrianOurFriend"];
		const linkedin = [
			"linkedin",
			"https://www.linkedin.com/in/brian-espinosa/"
		];
		const github = ["github", "https://github.com/bespinosa01"];
		const profileLinks = [github, linkedin, twitter];

		const linkList = profileLinks.map((link, index) => (
			<div key={index} className="item">
				<a
					className={`mini ui icon ${link[0]} button`}
					href={link[1]}
					target="_blank"
				>
					<i className={`${link[0]} icon`} />
				</a>
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
