import React from 'react';

//putting {video} as the argument is the same as declaring
//const video = props.video; inside the funcitonal component and having props 
//as the argument

const VideoDetail = ({ video }) => {
	if(!video) {
		return <div>Loading...</div>
	}

	const videoId = video.id.videoId;
	//youtube URLs for embedded vids only change the ending based on
	//the video's id -- which we access from the video props

	//const url = 'https://www.youtube.com/embed/' + videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
}

export default VideoDetail; 