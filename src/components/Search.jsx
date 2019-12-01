import React, {Component} from 'react';
import Select from 'react-select';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songs: [],
			categories: []
        };
    }
    
    componentDidMount() {
        fetch(`http://localhost:3001/songs`)
			.then(res => res.json())
			.then(json => {
				this.setState({
					songs: json
				});
			});
		fetch(`http://localhost:3001/categories`)
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
			content.map((song) => {
				return {
					value: `${song.id}`,
					label: `${song.id}. ${song.title}`
				};
			}),
		];
		return (
			<div id="search-bar">
				<Select options={options[0]} />
			</div>
		)
	}
}

export default Search;