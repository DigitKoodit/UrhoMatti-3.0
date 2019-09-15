import React, { Component } from 'react';
import MenuSongs from './MenuSongs';

class MenuCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false
		};
	}

	componentDidMount() {
		fetch(`http://localhost:3001/categories`)
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
						<div>
							<a href={category.title}>{category.title}</a>
							<MenuSongs
								category={category.title}
								key={category.id}
							/>
						</div>
				)}
			</div>
		)
	}
}

export default MenuCategory;
