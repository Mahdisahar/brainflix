import './App.scss';
// Import the Header section from Header component
import Header from './components/Header/Header';
// import the vedio here 
import Video from './components/Video/Video';
// import videoData from '../src/data/videos.json';
import videoData from '../src/data/video-details.json';
import { useState } from 'react';


function App() {

const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
console.log(setSelectedVideo);

  return (
    <div className="App">
    <Header />
	<Video selectVideo={selectedVideo} />
    </div>
  );
}

export default App;
