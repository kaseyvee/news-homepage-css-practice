import { useEffect } from "react";
import { useState } from "react";

function Nav() {
  const [mobileNavAnimation, setMobileNavAnimation] = useState("");
  const [openNav, setOpenNav] = useState(false);

  function handleNavToggle() {
    if (mobileNavAnimation === "slideIn") {
      setMobileNavAnimation("slideOut");
      return setTimeout(() => {
        setOpenNav(false);
      }, 300)
    }
    setOpenNav(true);
    return setMobileNavAnimation("slideIn");
  }
  
  return (
    <div className="nav">

      <div className="nav-main">
        <img src="logo.svg" alt="logo"/>
        <img
          src="icon-menu.svg"
          alt="menu icon"
          className="menu-icon"
          onClick={handleNavToggle}
        />
        <div className="nav-items">
          <div className="nav-item">Home</div>
          <div className="nav-item">New</div>
          <div className="nav-item">Popular</div>
          <div className="nav-item">Trending</div>
          <div className="nav-item">Categories</div>
        </div>
      </div>

      {openNav && <div className="nav-mobile-open">
        {mobileNavAnimation === "slideIn" && <div className="nav-mobile-open-overlay"></div>}
        <div
          className="nav-mobile-open-main"
          style={{
            animation: `${mobileNavAnimation} 300ms ease-in-out forwards`
          }}
        >
          <img
            src="icon-menu-close.svg"
            alt="close menu icon"
            className="close-menu-icon"
            onClick={handleNavToggle}
          />
          <div className="nav-items">
            <div className="nav-item">Home</div>
            <div className="nav-item">New</div>
            <div className="nav-item">Popular</div>
            <div className="nav-item">Trending</div>
            <div className="nav-item">Categories</div>
          </div>
        </div>
      </div>}

    </div>
  );
}

export default Nav;