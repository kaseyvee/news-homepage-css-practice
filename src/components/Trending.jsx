import React from 'react';

function Trending(props) {
  return (
    <div className='trending'>
      <div className='trending_item'>
        <div className='trending_item_image-container'>
          <img src="/assets/image-retro-pcs.jpg" alt="retro pc" />
        </div>

        <h1 className='trending_item_rank'>01</h1>

        <h2 className='trending_item_header'>
          Reviving Retro PCs
        </h2>

        <p className='trending_item_preview'>
          What happens when old PCs are given modern upgrades?
        </p>
      </div>
      <div className='trending_item'>
        <div className='trending_item_image-container'>
          <img src="/assets/image-top-laptops.jpg" alt="laptop keys" />
        </div>

        <h1 className='trending_item_rank'>02</h1>

        <h2 className='trending_item_header'>
          Top 10 Laptops of 2022
        </h2>

        <p className='trending_item_preview'>
          Our best picks for various needs and budgets.
        </p>
      </div>
      <div className='trending_item'>
        <div className='trending_item_image-container'>
          <img src="/assets/image-gaming-growth.jpg" alt="playstation controller falling into hand" />
        </div>

        <h1 className='trending_item_rank'>01</h1>

        <h2 className='trending_item_header'>

        </h2>

        <p className='trending_item_preview'>

        </p>
      </div>
    </div>
  );
}

export default Trending;