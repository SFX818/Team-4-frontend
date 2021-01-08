import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

// const Posts = ({ setCurrentId }) => {
//   const posts = useSelector((state) => state.posts);
const Posts = ({ setPostId }) => {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
    <>
      <h1>Posts</h1>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setPostId={setPostId} />
          </Grid>
        ))}
      </Grid>
      {/* <Post /> */}
    </>
    )
  )
};


export default Posts;
