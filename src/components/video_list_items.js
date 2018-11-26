import React from 'react';

//these are each individual videos listed out which make up video_list

//these are li elements which are set to populate in video_list under the ul element

//for the arguement of {video}:
//check video_list to see where video was passed as a property for the videolistitem
//component creation -- we can define a variable which holds and pulls of the video 
//putting {video} as the argument is the same as declaring
//const video = props.video; inside the funcitonal component and having props 
//as the argument

//VIDEO LIST ITEM IS A CHILD OF VIDEO LIST

const VideoListItem = ({video, onVideoSelect}) => {
	//response form youtube api
	const imageUrl = video.snippet.thumbnails.default.url;


	return ( 
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl}/>
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;