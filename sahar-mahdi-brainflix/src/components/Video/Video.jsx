import './Video.scss';
import viewIcon from '../../assets/Icons/views.svg';

function Video(props) {
  return (
    <section className='video'>
      <div className='video__posters'>
        <video
          className='video__poster'
          poster={props.selectVideo.image}
          controls
        ></video>
      </div>

      <div className='video__container'>
        <h1 className='video__title'>Tech Trends: {props.selectVideo.title}</h1>

        <div className='video__info'>
          <p className='video__para'>By {props.selectVideo.channel}</p>
          <img src={viewIcon} alt='view icon' />
        </div>
      </div>
    </section>
  );
}

export default Video;
