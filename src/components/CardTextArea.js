import React from "react";
class CardTextArea extends React.Component {
	render() {
		return (
			<div className="field">
				<textarea
					rows="2"
					name={this.props.name}
					id={this.props.id}
					placeholder={this.props.placeholder}
					required
				/>
			</div>
		);
	}
}

export default CardTextArea;
