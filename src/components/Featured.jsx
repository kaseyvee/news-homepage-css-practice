import React from 'react';

function Featured(props) {
  const featuredArticle = props.featured[0];

  return (
    <div className='featured'>
      <div className='featured_image-container'>
        <img src={featuredArticle.imageMobile} />
      </div>

      <h1 className='featured_header'>
        {featuredArticle.header}
      </h1>

      <div className='featured_preview'>
        <p className='featured_preview_content'>
          {featuredArticle.preview}
        </p>
        <button className='featured_preview_button'>READ MORE</button>
      </div>
    </div>
  );
}

export default Featured;