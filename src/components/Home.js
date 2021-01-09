import React, { useEffect, useState } from 'react';
// hook from redux to get actions
import { useDispatch } from 'react-redux';

import { findAll } from '../services/post.service'
import Posts from './Posts/Posts'

const Home = () => {
  const [postId, setPostId] = useState(0);
  const dispatch = useDispatch();
  
  // successful dispatch
  useEffect(() => {
    dispatch(findAll());
  }, [postId, dispatch]);

  return (
      <div>
          <h1 className="title">Welcome to Petflix</h1>
          <div className="gallery">
            <Posts setPostId={setPostId} />
          </div>
      </div>
  );
};

export default Home;