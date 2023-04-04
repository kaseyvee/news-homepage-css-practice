import React from 'react';

function New(props) {
  const newArticles = props.new;

  const newArticlesList = newArticles.map((newArticle) => {
    return (
      <div className='new_article-container_item'>
        <h2 className='new_article-container_item_header'>
          {newArticle.header}
        </h2>
        <p className='new_article-container_item_preview'>
          {newArticle.preview}
        </p>
      </div>
    )
  })

  return (
    <div className='new'>
      <h1 className='new_header'>New</h1>
      {newArticlesList}
    </div>
  );
}

export default New;