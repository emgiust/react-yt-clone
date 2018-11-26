import React from 'react';
import VideoListItem from './video_list_items';
//can be a functional component bc we aren't "listening" for changes from the user

//this component will update due to changes elsewhere in the app, but will just
//update itself -- doesn't need state

//this component holds the list of videos and video_list_items is each individual
//video component



const VideoList = (props) => {
	//mapping over the props.videos we receive from the parent index.js/app.js
	//returning a videolistitem component including each video
	//using the etag which comes with the youtube IP data for each vid
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag} 
				video={video} />
		);
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;