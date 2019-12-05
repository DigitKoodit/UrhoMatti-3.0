import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class Song extends Component {

	render() {
		const song = this.props.song;
		if (typeof song !== 'undefined') {
            return (
				<>
					<div className="page song-page">
						<p className="song-header">
							{song.id}. {song.title}
						</p>
						<p className="song-melody">
							{song.melody}
						</p>
						<p className="song-lyrics">
							{song.lyrics.join('\n')}
						</p>
					</div>
					<div className="song-footer">
						<a
							href={song.categoryId}
							className="song-footer-category"
						>
							{song.categoryId}{song.categoryId.includes("40")&&" %"}
						</a>
					</div>
				</>
			);
		} else {
			return (
				<Redirect to="/" />
			)
		}
	}
}

export default Song;