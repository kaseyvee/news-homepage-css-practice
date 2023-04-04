import React from 'react';

function Trending(props) {
  const trendingArticles = props.trending;

  const trendingArticlesList = trendingArticles.map((trendingArticle) => {
    const rank = trendingArticles.indexOf(trendingArticle) + 1;

    return (
      <div className='trending_item'>
        <div className='trending_item_image-container'>
          <img src={trendingArticle.image} alt="retro pc" />
        </div>

        <h1 className='trending_item_rank'>
          0{rank}
        </h1>

        <h2 className='trending_item_header'>
          {trendingArticle.header}
        </h2>

        <p className='trending_item_preview'>
          {trendingArticle.preview}
        </p>
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