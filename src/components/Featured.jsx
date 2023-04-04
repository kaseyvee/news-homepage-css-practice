import React from 'react';

function Featured(props) {
  return (
    <div className='featured'>
      <div className='featured_image-container'>
        <img src='/assets/image-web-3-mobile.jpg' />
      </div>

      <h1 className='featured_title'>
        The Bright Future of Web 3.0?
      </h1>

      <div className='featured_article-preview'>
        <p className='featured_article-preview_content'>
          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
        </p>
        <button className='featured_article-preview_button'>READ MORE</button>
      </div>
    </div>
  );
}

export default Featured;