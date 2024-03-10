import { Link } from 'react-router-dom';
import './Errorpage.scss';

function Errorpage() {
  return (
    <div className='error'>
      <h1 className='error__title'>
        Something went wrong, please click the link bottom to return to the home
        page
      </h1>
      <p>
        <Link className='error__link' to='/'>Home page</Link>
      </p>
    </div>
  );
}
export default Errorpage;
