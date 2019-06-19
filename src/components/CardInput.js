import React from "react";
class CardInput extends React.Component {
	render() {
		return (
			<div className="field">
				<input
					name={this.props.name}
					id={this.props.id}
					type={this.props.type || "text"}
					placeholder={this.props.placeholder}
					required
				/>
			</div>
		);
	}
}
export default CardInput;
