import './Youtube.scss';

function Youtube(props) {
  return (
    <div className='youtube'>
      <h4 className='youtube__title'>NEXT VIDEOS</h4>

      {props.selectYoutube.map((youtubeWatch) => (
        <div className='youtube__container' key={youtubeWatch.id} onClick={() => props.onVideoSelect(youtubeWatch)}>
          <img className='youtube__image' src={youtubeWatch.image} alt='imge' />

          <div className='youtube__subcontainer'>
            <h4 className='youtube__subtitle'>{youtubeWatch.title}</h4>
            <p className='youtube__para'>{youtubeWatch.channel}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Youtube;
