import React, {Component} from 'react';
import Select from 'react-select';
import { port } from '../index';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songs: [],
			categories: []
        };
    }
    
    componentDidMount() {
        fetch(`http://localhost:${port}/songs`)
			.then(res => res.json())
			.then(json => {
				this.setState({
					songs: json
				});
			});
		fetch(`http://localhost:${port}/categories`)
			.then(res => res.json())
			.then(json => {
				this.setState({
					categories: json
				});
			});
	}
	render() {
		const content = this.state.songs.concat(this.state.categories);
		const options = [
			content.map(song => {
				return {
					value: song.id < 100 ? `${song.title}` : `${song.id}`,
					label: `${song.id}. ${song.title}`
				};
			}),
		];
		return (
			<div id="search-bar">
				<Select
					options={options[0]}
					placeholder="Hae laulua tai kategoriaa"
					noOptionsMessage={() => "Ei tuloksia"}
					onChange={option =>
						(window.location.href = '/' + option.value + '')
					}
				/>
			</div>
		);
	}
}

export default Search;