import './App.scss';
// Import the Header section from Header component
import Header from './components/Header/Header';
// import the vedio and other data
import Video from './components/Video/Video';
import videoData from '../src/data/video-details.json';
import Comments from '../src/components/Comments/Comments';

import { useState } from 'react';

function App() {

const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
console.log(setSelectedVideo);

const [selectComments, setSelectComment] = useState(videoData[0].comments.slice(0,3));
console.log(setSelectComment);
console.log('selectComments', selectComments);

  return (
    <div className="App">
    <Header />
	<Video selectVideo={selectedVideo} />
    <Comments selectComment={selectComments} />
	</div>
  );
}

export default App;
