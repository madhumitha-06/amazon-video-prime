// import { faStar } from "@fortawesome/free-regular-svg-icons"
import { faBookmark, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/Sidemenu.css'
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Sidemenu() {

  const [open, setOpen] = useState(false);
  const openSearch = () => {
    setOpen(true);
    setcurrenturl('search')
  };
  const closeSearch = () => {
    setOpen(false);
  };


  const [currenturl, setcurrenturl] = useState('')
  const route = useNavigate()
  const Weburl = useLocation()
  const cururl = () => {
    setcurrenturl(Weburl.pathname.split('/')[1])
  }
  useEffect(() => {
    cururl()
  }, [Weburl])
  const Mynav = (data: any) => {
    if (data == 'categories') {
      route('categories')
      setcurrenturl('categories')
    }
    else if (data == 'prime') {
      route('/')
    }
    else if (data == 'home') {
      route('home')
      setcurrenturl('home')
    }
    else if (data == 'movies') {
      route('movies')
      setcurrenturl('movies')
    }
    else if (data == 'tv') {
      route("tv")
      setcurrenturl('tv')
    }
    else if (data == 'live') {
      route("live")
      setcurrenturl('live')
    }
    else if (data == 'subscription') {
      route('subscription')
      setcurrenturl('subscription')
    }
    else if (data == 'signin') {
      route('signin')
    }
    else if (data == 'join') {
      route('signin')
    }
    else if (data == 'lang') {
      setcurrenturl('lang')
    }
    else if (data == 'watchlist') {
      setcurrenturl('watchlist')
      route('watch')
    }
    else if (data == 'all') {
      setcurrenturl('all')
      route('all')
    }
     else if (data == 'rentals') {
      setcurrenturl('rentals')
      route('rentals')
    }
      else if (data == 'Watchany') {
      setcurrenturl('watchany')
      route('watchany')
    }
       else if (data == 'help') {
      setcurrenturl('help')
      route('help')
    }
    
  }
  return (
    <>
      <div className="Headermenu">
        <div className="head1">
          <p onClick={() => Mynav('prime')} className="prime">prime video</p>

          <button onClick={() => Mynav('home')} className={`button sidemenu ${currenturl === "home" ? "selectedpath1" : ""}`}>Home</button>

          <button onClick={() => Mynav('movies')} className={`button sidemenu ${currenturl === "movies" ? "selectedpath1" : ""}`}>Movie</button>

          <button onClick={() => Mynav('tv')} className={`button sidemenu ${currenturl === "tv" ? "selectedpath1" : ""}`}>TV Shows</button>

          <button onClick={() => Mynav('live')} className={`button sidemenu ${currenturl === "live" ? "selectedpath1" : ""}`}>Live TV</button>

          <button onClick={() => Mynav('subscription')} className={`button sidemenu ${currenturl === "subscription" ? "selectedpath1" : ""}`}> <span className="icn1"><i className="bi bi-grid"></i></span>Subscriptions</button>
        </div>
        <div className="head2">
          <div>
            <p onClick={openSearch} className={`para1 sidemenu ${currenturl === "search" ? "selectedpath" : ""}`}><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
            {open && (
              <div className="overlay">
                {/* <div className="overlay-bg" onClick={closeSearch}></div> */}
                <button className="close-btn" onClick={closeSearch}>
                <FontAwesomeIcon icon={faXmark} />
                </button>
                <div className="search-box" >
                  <input type="text" placeholder="Search..." autoFocus />
                </div>
              </div>
            )}
          </div>
          <div className="profile-container">
            <p className="para1"><FontAwesomeIcon icon={faBookmark} /></p>
            <ul className="profile_menu bookmark">
              <li className="title1" onClick={() => Mynav('all')}>All</li>
              <li  onClick={() => Mynav('watchlist')} className="title1">Watchlist</li>
              <li className="title1" onClick={() => Mynav('rentals')}>Rentals</li>
            </ul>
          </div>


          <p onClick={() => Mynav('categories')} className={`para1 sidemenu ${currenturl === "categories" ? "selectedpath" : ""}`}><i className="bi bi-grid-3x3-gap-fill"></i></p>

          <div className="profile-container">
            <p className="para1"><i className="bi bi-person-circle profile"></i></p>
            <ul className="profile_menu">
              <li className="heading1">Your Account</li>
              <li onClick={() => Mynav('signin')} className="title1">Sign in</li>
              <li className="title1" onClick={() => Mynav('help')} >Help</li>
              <li className="title1" onClick={() => Mynav('Watchany')}>Watch Anywhere</li>
            </ul>
          </div>
          <button onClick={() => Mynav('join')} type="button" className="btn1 py-1">Join Prime</button>
        </div>
      </div>
    </>
  )
}
export default Sidemenu
