import React from 'react';
import './Header.css';

export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://fontmeme.com/permalink/200826/a753a2772cccff2ac042e067f9b8ad40.png" alt="netflix"/>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="Usuário"/>
        </a>
      </div>
    </header>
  )
}