import React, { Component } from 'react';

class MenuSongs extends Component {
	constructor(props) {
		super(props);
		this.state = {
            isLoaded: false
        };
	}

	componentDidMount() {
		var categoryId = this.props.category.endsWith("%")  ? this.props.category.slice(0,-2) : this.props.category;
		fetch(`http://localhost:3001/categories/${categoryId}/songs`)
			.then(res => res.json())
			.then(json => {
				this.setState({
                    songs: json,
                    isLoaded: true
				});
			});
	}
	render() {
        if (!this.state.isLoaded) {
			return null;
		}
		return(
            <div>
                {this.state.songs
                    .map(song =>
						<a href={song.id} key={song.id}>{song.id}. {song.title}</a>
					)}
            </div>
        )
	}
}

export default MenuSongs;
