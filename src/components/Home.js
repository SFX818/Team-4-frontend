import React,{ useState, useEffect } from 'react'

import { findAll } from "../services/post.service"
import Posts from './Posts/Posts'
import UploadPost from './Forms/UploadPost'

// renders posts and comments

const Home = () => {
  const [postId, setPostId] = useState(0);

  useEffect(() => {
    findAll()
  }, [postId])

  return (
      <div>
          <h1 className="title">Welcome to Petflix</h1>
          <div className="gallery">
            <Posts setPostId={setPostId} />
            <UploadPost postId={postId} setPostId={setPostId}  />
          </div>
      </div>
  );
};

export default Home;
