import React, {Component} from 'react';

class Song extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded : false,
		};
	}
    
    componentDidMount() {
        fetch(`http://localhost:3001/songs/${this.props.match.params.id}`)
			.then(res => res.json())
			.then(json => {
				this.setState({
					song: json,
					isLoaded: true
				});
			});
    }

	render() {
        if (!this.state.isLoaded){
			return <div>Loading...</div>
		}
            let song = this.state.song
            console.log(song)
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
							{song.categoryId}
						</a>
					</div>
				</>
			);
	}
}

export default Song;