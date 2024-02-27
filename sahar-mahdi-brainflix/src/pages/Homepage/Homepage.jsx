import './Homepage.scss';
import { useState } from 'react';
import Video from '../../components/Video/Video';
import videoData from '../../data/video-details.json';
import Comments from '../../components/Comments/Comments';
import Youtube from '../../components/Youtube/Youtube';

function Homepage () {
	const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
	console.log(setSelectedVideo);
	
	const [selectComments, setSelectComment] = useState(videoData[0].comments.slice(0,3));
	console.log(setSelectComment);
	
	const [selectYoutubeVideo, setSelectYoutubeVideo] = useState(videoData.slice(1));
	console.log(setSelectYoutubeVideo);
	console.log('youtube', selectYoutubeVideo);

	return (
    <div className="App">
	<Video selectVideo={selectedVideo} />
    <Comments selectComment={selectComments} />
	<Youtube selectYoutube={selectYoutubeVideo} />
	</div>
  );
}

export default Homepage; 