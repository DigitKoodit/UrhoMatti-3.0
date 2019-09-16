import React, { Component } from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu';


class TopBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			menuVisible: false
		};
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		this.setState({ menuVisible: !this.state.menuVisible });
	}

	render() {
		return (
			<div className="top-bar">
				<a href="/" className="heading">
					<h2>Urho Matti v3.0</h2>
				</a>
				<MenuButton
					onClick={this.toggleMenu}
					menuVisible={this.state.menuVisible}
				/>
				<Menu
					onClick={this.toggleMenu}
					menuVisible={this.state.menuVisible}
				/>
			</div>
		);
	}
}

export default TopBar;
