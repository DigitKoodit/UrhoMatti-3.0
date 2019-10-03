import React, { Component } from 'react';
import MenuCategory from './MenuCategory';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: true
		};
	}

	componentDidMount() {
		
	}
	render() {

		let visibility = "hide";

        if (this.props.menuVisible) {
            visibility = "show";
		}
		
		if (!this.state.isLoaded) {
			return null;
		}
		return (
			<div
				id="flyoutMenu"
				onClick={this.props.onClick}
				className={visibility}
			>
				<div className="menu-content">
					<MenuCategory />
				</div>
			</div>
		);
	}
}

export default Menu;
