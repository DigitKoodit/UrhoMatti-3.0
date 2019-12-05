import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class Song extends Component {

	render() {
		if (typeof this.props.song !== 'undefined') {
            return (
				<>
					<div className="page song-page">
						<p className="song-header">
							{this.props.song.id}. {this.props.song.title}
						</p>
						<p className="song-melody">
							{this.props.song.melody}
						</p>
						<p className="song-lyrics">
							{this.props.song.lyrics.join('\n')}
						</p>
					</div>
					<div className="song-footer">
						<a
							href={this.props.song.categoryId}
							className="song-footer-category"
						>
							{this.props.song.categoryId}
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