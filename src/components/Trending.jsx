import React from 'react';

function Trending(props) {
  const trendingArticles = props.trending;

  const trendingArticlesList = trendingArticles.map((trendingArticle) => {
    const index = trendingArticles.indexOf(trendingArticle);
    const rank = index + 1;

    return (
      <div className='trending_item' key={index}>
        <div className='trending_item_image-container'>
          <img src={trendingArticle.image} alt="retro pc" />
        </div>

        <div className='trending_item_main'>
          <h1 className='trending_item_main_rank'>
            0{rank}
          </h1>

          <h2 className='trending_item_main_header'>
            {trendingArticle.header}
          </h2>

          <p className='trending_item_main_preview'>
            {trendingArticle.preview}
          </p>
        </div>
      </div>
    )
  })

  return (
    <div className='trending'>
      {trendingArticlesList}
    </div>
  );
}

export default Trending;