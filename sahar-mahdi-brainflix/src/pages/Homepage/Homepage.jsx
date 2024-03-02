import './Homepage.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Video from '../../components/Video/Video';
import videoData from '../../data/video-details.json';
import Comments from '../../components/Comments/Comments';
import Youtube from '../../components/Youtube/Youtube';

const Base_URL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
const api_key = '4d84c38d-eed7-4f2e-84cb-cda8f2dbfd81';

function Homepage () {
	const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
	const [selectComments, setSelectComment] = useState(videoData[0].comments.slice(0,3));
	console.log('just console setSelectComment', setSelectComment);
	// const [selectYoutubeVideo, setSelectYoutubeVideo] = useState(videoData.slice(1));
const [selectYoutubeVideo, setSelectYoutubeVideo] = useState([]);
const [videoId, setVideoId] = useState({});

useEffect(() => {
	const getVedios= async () => {
		try {
				const response = await axios.get(`${Base_URL}/videos?api_key=${api_key}`) ;
				const videosData = response.data;
				console.log('videos data', videosData);
				setSelectYoutubeVideo(videosData.slice(1));

		} catch (error) {
			console.log('Error fetching videos', error);

		}
	};
	getVedios();
}, []);


const params = useParams();
console.log(params);

useEffect(() => {

	const getVideosById = async (id) => {
		const response = await axios.get(`${Base_URL}/videos/${id}?api_key=${api_key}`);
		setVideoId(response.data);
	};
	if (params.videoId) {
		console.log(params.videoId);
		getVideosById(params.videoId);
	} else {
		getVideosById('');
	}
}, [params]);


const handleVideoSelect = (video) => {
	setSelectedVideo(video);
	// setSelectComment(video);
	// setSelectYoutubeVideo(selectYoutubeVideo.filter(item => item.id !== video.id));
	setSelectYoutubeVideo(selectYoutubeVideo.filter(video => video.id !== videoId.id));
}
	return (
    <div className="App">
	<Video selectVideo={selectedVideo} />
    <Comments selectComment={selectComments} />
	<Youtube selectYoutube={selectYoutubeVideo} onVideoSelect={handleVideoSelect} />
	</div>
  );
}

export default Homepage; 
