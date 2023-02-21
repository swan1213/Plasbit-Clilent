import React from 'react';

import './preLoader.css';

export const PreLoader = () => {
  return (
    <div className="preLoader">
      <div className="preLoaderStatus">
          <div className="spinner">
              <img src="https://img.plasbit.com/LogoB_400.png" className="preLoaderLogo" alt="Preloader" />
          </div>
      </div>
    </div>
  )
}
