import React, {Component} from 'react';
import Select from 'react-select';
import db from '../db.json';

class Search extends Component {
    
	render() {
		const content = db['songs'].concat(db['categories']);
		console.log(db);
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