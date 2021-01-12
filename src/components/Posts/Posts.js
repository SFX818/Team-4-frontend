import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import Post from './Post/Post';
import useStyles from './styles';

import { findAll } from '../../services/post.service';


const Posts = ({ setPostId }) => {
  const [posts, setPosts] = useState("")
  const classes = useStyles();

  useEffect(() => {
    findAll().then((res) => {
      setPosts(res.data.posts)
    })
  })

  return (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setPostId={setPostId} />
          </Grid>
        ))}
      </Grid>
  );
};

export default Posts;
