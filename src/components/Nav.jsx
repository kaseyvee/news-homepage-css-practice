function Nav(props) {
  return (
    <div className="nav">

      <div className="nav-mobile-closed">
        <img src="/assets/logo.svg" alt="logo"/>
        <img src="/assets/icon-menu.svg" alt="menu icon"/>
      </div>

      <div className="nav-mobile-open">
        <div className="nav-mobile-open-overlay"></div>
        <div className="nav-mobile-open-main">
          <img
            src="/assets/icon-menu-close.svg"
            alt="close menu icon"
            className="close-menu-icon"
          />
          <div className="nav-items">
            <div>Home</div>
            <div>New</div>
            <div>Popular</div>
            <div>Trending</div>
            <div>Categories</div>
          </div>
        </div>
      </div>

      <div className="nav-desktop">
      </div>

    </div>
  );
}

export default Nav;