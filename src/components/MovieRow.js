import React from 'react';
import './MovieRow.css';

export default ({title, items}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        {items.results.length > 0 && items.results.map((item,key) =>(
            // eslint-disable-next-line jsx-a11y/alt-text
            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
        ))}
      </div>
    </div>
  )
}