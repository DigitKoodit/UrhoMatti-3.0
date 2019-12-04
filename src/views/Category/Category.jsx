import React, { Component } from 'react';
import MenuSongs from '../../components/MenuSongs';

class Song extends Component {

	render() {
		return (
			<>
				<div className="page song-page">
					<p className="category-header">
						{this.props.category.id}. {this.props.category.title}
					</p>
					<div className="category-image-container">
						<img
							src={require('../../images/categories/' +
								this.props.category.image +
								'.png')}
							alt={this.props.category.image}
							height="100%"
						/>
					</div>
					<MenuSongs category={this.props.category.title} />
				</div>
				<div className="song-footer">
					<a href={this.props.category.title} className="song-footer-category">
						{this.props.category.title}
					</a>
				</div>
			</>
		);
	}
}

export default Song;
