import { Link, useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import '../CSS/Navbar.css';
import { useRef, useState } from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HdIcon from '@mui/icons-material/Hd';
const Navbar = () => {
  const [inputValue, setInputValue] = useState('');
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const genres = ['Action', 'Comedy', 'Drama', 'Thriller', 'Adventure', 'Thriller', 'Science Fiction'];
  const actors = [
    'Tom Hanks',
    'Leonardo DeCaprio',
    'Brad Pitt',
    'Robert De Nitro',];


  const handleSearchBtn = () => {
    if (searchInputRef.current) {
      searchInputRef.current.style.display =
        searchInputRef.current.style.display == 'none' ? 'block' : 'none';
      console.log(searchInputRef.current.display);
      inputRef.current && inputRef.current.focus();
    }
  };

  const handleSeachKeyDown = (event: { key: string }) => {

    if (event.key == 'Enter') {
      console.log(inputValue);
      navigate('/all', { state: { value: inputValue } })
      setInputValue('');
      if (searchInputRef.current) searchInputRef.current.style.display = 'none';
    }
  };
  const handleSearchChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (<>
    <div id="navbar" >
      <div className="nav-main" >
        <div className="nav-left">
          <Link to={'/'}>
            <div className="nav-logo">
              <img
                src="https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/09/logo_c.png"
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="nav-right">
          <div className="nav-items">
            <div className="nav-link">

              <p>
                <Link to={'/home'}> <span>Movie picker</span></Link>
              </p>

            </div>
            <div className="nav-link genres">
              <p>
                <span>
                  Top Genres <i className="ri-arrow-drop-down-line"></i>
                </span>
              </p>
              <div className="top-genres-hover">
                {genres.map((genre, index) => (

                  <Link to={`/${genre}`} ><span>{genre}</span></Link>

                ))}
              </div>
            </div>
            <div className="nav-link actors">
              <p>
                <span>
                  Top Actors <i className="ri-arrow-drop-down-line"></i>
                </span>
              </p>
              <div className="top-actors-hover">
                {actors.map((actor, index) => (

                  <Link to={'/home'}>   <span>{actor}</span></Link>

                ))}
              </div>
            </div>
            <div className="nav-link">

              <p>
                <Link to={'/blogs'}> <span>Blog</span></Link>
              </p>

            </div>
          </div>
          <div className="nav-icons">
            <button className="search-btn nav-link">
              <i className="ri-search-line" onClick={handleSearchBtn}></i>
              <div className="search-input" ref={searchInputRef}>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  placeholder="Search"
                  onChange={handleSearchChange}
                  onKeyDown={handleSeachKeyDown}
                />
              </div>
            </button>
            <a href={'https://www.facebook.com'}>
              <button className="fb-btn nav-link">
                <i className="ri-facebook-circle-fill"></i>
              </button>
            </a>
            <a href={'https://www.instagram.com'}>
              <button className="insta-btn nav-link">
                <i className="ri-instagram-line"></i>
              </button>
            </a>
            <a href={'https://www.youtube.com'}>
              <button className="yt-btn nav-link">
                <i className="ri-youtube-fill"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Navbar;