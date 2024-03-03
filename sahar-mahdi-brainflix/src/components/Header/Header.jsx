import '../Header/Header.scss';
import { NavLink } from 'react-router-dom';
import image from '../../assets/Logo/BrainFlix-logo.svg';
import searchIcon from '../../assets/Icons/search.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import uploadIcon from '../../assets/Icons/upload.svg';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo'>
          <NavLink to='/'>
            <img className='header__logo--brainflix' src={image} alt='logo' />
          </NavLink>
        </div>

        <div className='header__subcontainer'>
          <div className='header__search'>
            <img className='header__icon' src={searchIcon} alt='search icon' />
            <input className='header__input' type='text' placeholder='Search' />
          </div>
          <div className='header__upload'>
            <NavLink to='/video'>
              <img
                className='header__uploadicon'
                src={uploadIcon}
                alt='upload img'
              />
              <button className='header__btn'>UPLOAD </button>
            </NavLink>
          </div>

          <img className='header__avatar' src={avatar} alt='avatar img' />
        </div>
      </div>
    </header>
  );
}

export default Header;
