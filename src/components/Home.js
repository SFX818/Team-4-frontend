import React from 'react';
// hook from redux to get actions

import { findAll } from "../services/post.service"
import Posts from './Posts/Posts'

const Home = (props) => {

  const posts = findAll()
  console.log(posts)

  return (
      <div>
          <h1 className="title">Welcome to Petflix</h1>
          <div className="gallery">
            <Posts posts={props.posts} />
          </div>
      </div>
  );
};

export default Home;
