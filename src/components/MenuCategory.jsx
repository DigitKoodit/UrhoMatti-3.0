import React, { Component } from 'react';
import MenuSongs from './MenuSongs';
import { port } from '../index';

class MenuCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false
		};
	}

	componentDidMount() {
		fetch(`http://localhost:${port}/categories`)
			.then(res => res.json())
			.then(json => {
				this.setState({
					categories: json,
					isLoaded: true
				});
			});
	}
	render() {
		if (!this.state.isLoaded) {
			return null;
		}
		return (
			<div>
				{this.state.categories
					.map(category =>
						<div key={category.id}>
							<a className="menu-category" href={category.title}>{category.title}</a>
							<MenuSongs
								category={category.title}
							/>
						</div>
				)}
			</div>
		)
	}
}

export default MenuCategory;
