import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Featured(props) {
  const [featuredImage, setFeaturedImage] = useState(null);
  const featuredArticle = props.featured[0];
  const minWidth = 769;

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);

    if (mediaQuery.matches) {
      return setFeaturedImage(featuredArticle.imageDesktop);
    }

    return setFeaturedImage(featuredArticle.imageMobile);;
  }, [])

  function handleFeaturedImageToggle() {
    let windowWidth = window.innerWidth;

    if (windowWidth < minWidth) {
      return setFeaturedImage(featuredArticle.imageMobile);
    }

    return setFeaturedImage(featuredArticle.imageDesktop);
  }

  addEventListener("resize" , handleFeaturedImageToggle);

  return (
    <div className='featured'>
      <div className='featured_image-container'>
        <img src={featuredImage} />
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