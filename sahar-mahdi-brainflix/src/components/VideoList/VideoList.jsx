import './VideoList.scss';
import { Link } from 'react-router-dom';

const imageUlr = "http://localhost:8085/images/";

function VideoList({ selectVideoList, onVideoSelect }) {
  return (
    <div className='videolist'>
      <h4 className='videolist__title'>NEXT VIDEOS</h4>

      {selectVideoList
        .filter((videoWatch) => videoWatch.id !== onVideoSelect)
        ?.map((videoWatch) => (
          <div key={videoWatch.id} className='videolist__container'>
            <Link to={`/videos/${videoWatch.id}`}>
              <img
                className='videolist__image'
                src={`${imageUlr}/${videoWatch.image}`}
                alt='imge'
              />
            </Link>
            <div className='videolist__subcontainer'>
              <h4 className='videolist__subtitle'>{videoWatch.title}</h4>
              <p className='videolist__para'>{videoWatch.channel}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
export default VideoList;
