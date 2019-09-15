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
				<div className="page">
					<h3 style={{ fontSize: 24 }}>
						{song.id}. {song.title}
					</h3>
					<p>{song.melody}</p>
					<p style={{ whiteSpace: 'pre-wrap' }}>
						{song.lyrics.join('\n')}
					</p>
					<a href={song.categoryId}>{song.categoryId}</a>
				</div>
			);
	}
}

export default Song;