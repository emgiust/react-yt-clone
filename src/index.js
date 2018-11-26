import React, { Component } from 'react';
import ReactDOM from 'react-DOM';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY = 'AIzaSyCsnrPdoThVcyHNzfQIjUdk_deZgPzPmIM';



class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null 
		};

		this.videoSearch('overwatch');
	}

	videoSearch(term) {
		//as soon as the app is rendered it will kick off with a search
		//so that the page isn't empty
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			})
		});
	}

	//SearchBar and Video list both utilize callback functions
	render(){
		//throttling the search frequency using debounce from the lodash imported library
		//can only call it every 300ms
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300 );

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
					videos={this.state.videos} 
				/>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.querySelector('.container'));