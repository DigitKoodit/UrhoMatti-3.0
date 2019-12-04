import React, { Component } from 'react';
import MenuSongs from './MenuSongs';
import db from '../db.json';

class MenuCategory extends Component {

	render() {
		return (
			<div className="menu-song-list">
				{db.categories.map(category => (
					<div key={category.id}>
						<a className="menu-category" href={category.title}>
							{category.title}
						</a>
						<MenuSongs
							category={category.title}
							songs={db['songs'].filter(
								song => song.categoryId === category.title
							)}
						/>
					</div>
				))}
			</div>
		);
	}
}

export default MenuCategory;
