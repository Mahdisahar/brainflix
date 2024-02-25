import './Comments.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import commentIcon from '../../assets/Icons/add_comment.svg';

function Comments(props) {

const date = new Date();
  const formatedDate = `${('0' + (date.getMonth() + 1)).slice(-2)}/${(
    '0' + date.getDate()
  ).slice(-2)}/${date.getFullYear()}`;
  return (
    <div className='comments'>
      <h4 className='comments__title'>3 Commnets</h4>

      <form className='comments__form'>
        <h4 className='comments__title2'>JOIN THE CONVERSATION</h4>

        <div className='comments__flexcontainer'>
          <div className='comments__container'>
            <img className='comments__avatar' src={avatar} alt='avatar img' />
            <textarea
              className='comments__text'
              name='comment'
              id='comment'
              cols='30'
              rows='10'
              placeholder='Add a new comment'
            ></textarea>
          </div>

          <div className='comments__btncontainer'>
            <img
              className='comments__icon'
              src={commentIcon}
              alt='comment icon'
            />
            <button className='comments__btn'>COMMENT</button>
          </div>
        </div>
      </form>

      <ul className='comments__list'>
		{props.selectComment.map(comment => (
			 <li key={comment.id} className='comments__item'>
		
          <div className='comments__itemcontainer'>
            <div className='comments__item--shape'></div>
			<div className='comments__showstime'>
				 <h2 className='comments__item--title'>{comment.name}</h2>
            <p className='comments__item--time'>{formatedDate}</p>
			</div>
           
          </div>

          <p className='comments__para'>
         {comment.comment}
          </p>
        </li>
		))}
       
      </ul>
    </div>
  );
}

export default Comments;
