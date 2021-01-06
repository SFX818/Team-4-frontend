import React, { useEffect, useState } from 'react';

import Posts from './Posts/Posts'

const Home = () => {
  const [currentId, setCurrentId] = useState(0);

  return (
      <div>
          <h1 className="title">Welcome to Petflix</h1>
          <div className="gallery">
            <Posts setCurrentId={setCurrentId} />
          </div>
      </div>
  );
  
};

export default Home;
