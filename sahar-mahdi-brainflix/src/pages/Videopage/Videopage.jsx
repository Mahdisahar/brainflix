import { useState } from 'react';
import './Videopage.scss';
// import { NavLink } from 'react-router-dom';
import publishIcon from '../../assets/Icons/publish.svg';
import axios from 'axios';

const uploadVideoPriviewUrl =
  'http://localhost:8085/images/Upload-video-preview.jpg';
const Base_URL = 'http://localhost:8085';

function Videopage() {
  const [addnewVideo, setAddNewVideo] = useState({
    title: '',
    description: '',
  });

  const handleInput = (event) => {
    setAddNewVideo({ ...addnewVideo, [event.target.name]: event.target.value });
  };

  async function handleForm(event) {
    event.preventDefault();

    try {
      const response = await axios.post(`${Base_URL}/videos`, addnewVideo);
      const postData = response.data;
      console.log('response is', postData);
      setAddNewVideo(postData);
    } catch (error) {
      console.log(error);
    }
  }

  //   const handleCancelClick = () => {
  //     <link to='/' />;
  //   };

  return (
    <section className='upload'>
      <h2 className='upload__title'>Upload Video</h2>
      <p className='upload__para'>VIDEO THUMBNAIL</p>
      <div className='upload__flex'>
        <img
          className='upload__image'
          src={`${uploadVideoPriviewUrl}`}
          alt='thumbnail'
        />
        <form className='upload__detail' onSubmit={handleForm}>
          <div className='upload__info'>
            <label className='upload__label' htmlFor='text'>
              TITLE YOUR VIDEO
            </label>
            <input
              className='upload__input'
              type='text'
              name='title'
              id='title'
              value={addnewVideo.title}
              //   onChange={(e) => handleForm(e)}
              onChange={handleInput}
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
              name='description'
              id='description'
              placeholder='Add a description to your video'
              value={addnewVideo.description}
              //   onChange={(e) => handle(e)}
              onChange={handleInput}
            />
          </div>
		  <div className='upload__button'>
        <div className='upload__published'>
          <img
            className='upload__publishedicon'
            src={publishIcon}
            alt='publish icon'
          />
          <button
            className='upload__publish'
            // onClick={handlePublishClick}>
            // onChange={addnewVideo}>
          >
            PUBLISH
          </button>
        </div>
        <button className='upload__cancel'>CANCEL</button>
      </div>
          {/* <button>Published</button> */}
        </form>
      </div>

      {/* <div className='upload__button'>
        <div className='upload__published'>
          <img
            className='upload__publishedicon'
            src={publishIcon}
            alt='publish icon'
          />
          <button
            className='upload__publish'
            // onClick={handlePublishClick}>
            // onChange={addnewVideo}>
          >
            PUBLISH
          </button>
        </div>
        <button className='upload__cancel'>CANCEL</button>
      </div> */}
    </section>
  );
}
export default Videopage;
