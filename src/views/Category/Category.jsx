import React, { Component } from 'react';
import MenuSongs from '../../components/MenuSongs';

class Song extends Component {

	render() {
		var category = this.props.category;
		return (
			<>
				<div className="page song-page">
					<p className="category-header">
						{category.id}. {category.title}{category.title.includes("40")&&" %"}
					</p>
					<div className="category-image-container">
						<img
							src={require('../../images/categories/' +
								category.image +
								'.png')}
							alt={category.image}
							height="100%"
						/>
					</div>
					<MenuSongs
						category={category.title}
						songs={this.props.songs}
					/>
				</div>
				<div className="song-footer">
					<a
						href={category.title}
						className="song-footer-category"
					>
						{category.title}{category.title.includes("40")&&" %"}
					</a>
				</div>
			</>
		);
	}
}

export default Song;
