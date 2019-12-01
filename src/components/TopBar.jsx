import React, { Component } from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu';
import Search from './Search';


class TopBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			menuVisible: false
		};
		this.toggleMenu = this.toggleMenu.bind(this);
		this.toggleMenuButton = this.toggleMenuButton.bind(this);

	}

	toggleMenu(e) {
		if (!e.target.id || e.target.id === "flyoutMenu") {
			this.setState({ menuVisible: !this.state.menuVisible });
		}
	}

	toggleMenuButton() {
		this.setState({ menuVisible: !this.state.menuVisible });
	}

	render() {
		return (
			<div className="top-bar">
				<a href="/" className="top-bar-heading">
					<h2>Urho Matti v3.0</h2>
				</a>
				<MenuButton
					onClick={this.toggleMenuButton}
					menuVisible={this.state.menuVisible}
				/>
				<Menu
					onClick={this.toggleMenu}
					menuVisible={this.state.menuVisible}
				/>
				<Search />
			</div>
		);
	}
}

export default TopBar;
