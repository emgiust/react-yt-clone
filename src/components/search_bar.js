import React, { Component } from 'react';
//needs state since we want to watch what users are typing in and update the dom

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render () {
		return ( 
			<div className="search-bar">
				<input 
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	} 

	//sets state
	//fires off callback function onSearchTermChange
	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
}


export default SearchBar;