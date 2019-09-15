import React, {Component} from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
		return (
			<div>
				
			</div>
		)
	}
}

export default Search;