function Nav(props) {
  return (
    <div className="nav">

      <div className="nav-mobile-closed">
        <img src="/assets/logo.svg" alt="logo"/>
        <img src="/assets/icon-menu.svg" alt="menu icon"/>
      </div>

      <div className="nav-mobile-open">
        <img src="/assets/icon-menu-close.svg" alt="close menu icon"/>
        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>

      <div className="nav-desktop">
      </div>

    </div>
  );
}

export default Nav;