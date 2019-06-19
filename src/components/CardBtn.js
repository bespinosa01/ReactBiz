import React from "react";
class CardBtn extends React.Component {
	render() {
		return (
			<button className={this.props.className} type={this.props.type}>
				{this.props.value}
			</button>
		);
	}
}
export default CardBtn;
