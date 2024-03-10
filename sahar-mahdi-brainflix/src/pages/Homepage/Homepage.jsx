import './Homepage.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Video from '../../components/Video/Video';
import Comments from '../../components/Comments/Comments';
import VideoList from '../../components/VideoList/VideoList';

// const Base_URL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
// const api_key = 'aef692e0-e6ca-4453-ab35-e53daab81af2';
const Base_URL = 'http://localhost:8085';

function Homepage() {
  const [selectedVideo, setSelectedVideo] = useState({});
  const [selectVideoList, setSelectVideoList] = useState([]);
  const [selectComments, setSelectComment] = useState([]);
  const params = useParams();

  const defaultVideoId = '84e96018-4022-434e-80bf-000ce4cd12b8';

  useEffect(() => {
    const getVedios = async () => {
      try {
        // const response = await axios.get(
        //   `${Base_URL}/videos?api_key=${api_key}`
        // );
		const response = await axios.get(`${ Base_URL }/videos`);
        const videosData = response.data;
        setSelectVideoList(videosData);
      } catch (error) {
        console.log('Error fetching videos', error);
      }
    };
    getVedios();
  }, []);

  useEffect(() => {
    const getVideosById = async (id) => {
      try {
        // const secResponse = await axios.get(
        //   `${Base_URL}/videos/${id}?api_key=${api_key}`
        // );

		const secResponse = await axios.get(`${ Base_URL }/videos/${id}`);
        const videoData = secResponse.data;
        setSelectedVideo(videoData);
        setSelectComment(videoData.comments);
      } catch (error) {
        console.log('Error Fetching video', error);
      }
    };
    if (params.id) {
      getVideosById(params.id);
    } else {
      getVideosById(defaultVideoId);
    }
	
  }, [params]);

  return (
    <div className='App'>
      <Video selectVideo={selectedVideo} />
      <Comments selectComment={selectComments} />
      <VideoList
        selectVideoList={selectVideoList}
        onVideoSelect={selectedVideo.id}
      />
    </div>
  );
}

export default Homepage;
