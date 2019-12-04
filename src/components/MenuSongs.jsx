import React, { Component } from 'react';
import db from '../db.json';

class MenuSongs extends Component {

	render() {
		return (
			<div className="category-songs">
				{db.songs.map(song => (
					<a className="menu-song" href={song.id} key={song.id}>
						{song.id}. {song.title}
					</a>
				))}
			</div>
		);
	}
}

export default MenuSongs;
