import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ posts }) => {
  // hook to get access to entire redux store for the state
  // post refers to how it's declared in the reducers
  const classes = useStyles();

  return (
    <>
      <CircularProgress />
        <h1>Posts</h1>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {/* {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={6}>
              <Post post={post}/>
            </Grid>
          ))} */}
          <Post />
        </Grid>
    </>
  )
};


export default Posts;
