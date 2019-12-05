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
				className={'flyoutMenu ' + visibility}
			>
				<div className="menu-content">
					<a
						className="menu-category menu-category-special"
						href={'hymni'}
					>
						{'Teekkarihymni'}
					</a>
					<a
						className="menu-category menu-category-special"
						href={'saannot'}
					>
						{'Säännöt'}
					</a>
					<MenuCategory />
				</div>
			</div>
		);
	}
}

export default Menu;
