import './Videopage.scss';
import { NavLink } from 'react-router-dom';
import uploadVideoPreview from '../../assets/Images/Upload-video-preview.jpg';
import publishIcon from '../../assets/Icons/publish.svg';


function Videopage() {

	const handlePublishClick = () => {
		alert('You Published successfully');
		<link to='/'/>
	}

	const handleCancelClick = () => {
		<link to='/'/>
	}

  return (
    <section className='upload'>
      <h2 className='upload__title'>Upload Video</h2>
      <p className='upload__para'>VIDEO THUMBNAIL</p>
      <div className='upload__flex'>
        <img
          className='upload__image'
          src={uploadVideoPreview}
          alt='thumbnail'
        />
      <form className='upload__detail'>
        <div className='upload__info'>
          <label className='upload__label' htmlFor='text'>
            TITLE YOUR VIDEO
          </label>
          <input
            className='upload__input'
            type='text'
            placeholder='Add a title to your video'
          />
        </div>

        <div className='upload__info'>
          <label className='upload__label' htmlFor='text'>
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className='upload__textarea'
            type='text'
            placeholder='Add a description to your video'
          />
        </div>
	
      </form>
	  </div>
	 
	  <div className='upload__button'>
          <div className='upload__published'>
            <img
              className='upload__publishedicon'
              src={publishIcon}
              alt='publish icon'
            />
			< NavLink to="/">
            <button className='upload__publish' onClick={handlePublishClick}>PUBLISH</button>
			</ NavLink>
		  </div>
		  <NavLink to='/'>
          <button className='upload__cancel' onClick={handleCancelClick}>CANCEL</button>
		  </NavLink>
        </div>
    </section>
  );
}
export default Videopage;
