import React, { Component } from 'react';
import MenuSongs from '../../components/MenuSongs';
import { port } from '../../index';

class Song extends Component {
	constructor(props) {
		super(props);
		this.state = {
            isLoaded: false,
		};
	}

	componentDidMount() {
		fetch(`http://localhost:${port}/categories/?title=${this.props.match.params.title}`)
			.then(res => res.json())
			.then(json => {
				this.setState({
					category: json[0],
					isLoaded: true
				});
            });
	}

	render() {
		if (!this.state.isLoaded) {
			return <div>Loading...</div>;
		}
		let category = this.state.category;
		return (
			<>
				<div className="page song-page">
					<p className="category-header">
						{category.id}. {category.title}
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
					<MenuSongs category={category.title} />
				</div>
				<div className="song-footer">
					<a href={category.title} className="song-footer-category">
						{category.title}
					</a>
				</div>
			</>
		);
	}
}

export default Song;
