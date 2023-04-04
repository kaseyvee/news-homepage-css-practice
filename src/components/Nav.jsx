import { useEffect } from "react";
import { useState } from "react";

function Nav(props) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    setOpenNav(false);
  }, [])

  function handleToggleNav() {
    if (openNav) {
      return setOpenNav(false);
    }

    return setOpenNav(true);
  }
  
  return (
    <div className="nav">

      <div className="nav-main">
        <img src="/assets/logo.svg" alt="logo"/>
        <img
          src="/assets/icon-menu.svg"
          alt="menu icon"
          className="menu-icon"
          onClick={handleToggleNav}
        />
        <div className="nav-items">
          <div className="nav-item">Home</div>
          <div className="nav-item">New</div>
          <div className="nav-item">Popular</div>
          <div className="nav-item">Trending</div>
          <div className="nav-item">Categories</div>
        </div>
      </div>

      { openNav && <div className="nav-mobile-open">
        <div className="nav-mobile-open-overlay"></div>
        <div className="nav-mobile-open-main">
          <img
            src="/assets/icon-menu-close.svg"
            alt="close menu icon"
            className="close-menu-icon"
            onClick={handleToggleNav}
          />
          <div className="nav-items">
            <div className="nav-item">Home</div>
            <div className="nav-item">New</div>
            <div className="nav-item"> Popular</div>
            <div className="nav-item">Trending</div>
            <div className="nav-item">Categories</div>
          </div>
        </div>
      </div>}

    </div>
  );
}

export default Nav;