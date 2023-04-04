import React from 'react';

function New(props) {
  return (
    <div className='new'>
      <h1 className='new_header'>New</h1>

      <div className='new_article-container'>
        <div className='new_article-container_item'>
          <h2 className='new_article-container_item_header'>
            Hydrogen VS Electric Cars
          </h2>
          <p className='new_article-container_item_preview'>
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className='new_article-container_item'>
          <h2 className='new_article-container_item_header'>
            The Downsides of AI Artistry
          </h2>
          <p className='new_article-container_item_preview'>
            What are the possible adverse effects of on-demand AI image generation?
          </p>
        </div>
        <div className='new_article-container_item'>
          <h2 className='new_article-container_item_header'>
          Is VC Funding Drying Up?
          </h2>
          <p className='new_article-container_item_preview'>
            Private funding by VC firms is down 50% YOY. We take a look at what that means.
          </p>
        </div>
      </div>
    </div>
  );
}

export default New;