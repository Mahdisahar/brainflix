import './Video.scss';
import viewIcon from '../../assets/Icons/views.svg';
import likeIcon from '../../assets/Icons/likes.svg';

function Video({ selectVideo }) {
  const date = new Date();
  const formatedDate = `${('0' + (date.getMonth() + 1)).slice(-2)}/${(
    '0' + date.getDate()
  ).slice(-2)}/${date.getFullYear()}`;

  return (
    <section className='video'>
      <div className='video__posters'>
        <video
          className='video__poster'
          poster={selectVideo.image}
          controls
        ></video>
      </div>

      <div className='video__container'>
        <h1 className='video__title'>
          <span className='video__span'>Tech Trends:</span> {selectVideo.title}
        </h1>

        <div className='video__info'>
          <div className='video__channel'>
            <p className='video__para'>By {selectVideo.channel}</p>
            <p className='video__date'>{formatedDate}</p>
          </div>

          <div className='video__icon'>
            <div className='video__viewicon'>
              <img className='video__imge' src={viewIcon} alt='view icon' />
              <p className='video__view'>{selectVideo.views}</p>
            </div>

            <div className='video__likeicon'>
              <img className='video__imge' src={likeIcon} alt='like icon' />
              <p>{selectVideo.likes}</p>
            </div>
          </div>
        </div>
        <div className='video__comment'>
          <p>{selectVideo.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Video;
