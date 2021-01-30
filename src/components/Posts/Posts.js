import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './Post/Post';
import useStyles from './styles';


const Posts = ({ setPostId, posts }) => {
  // help
  const styles = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={styles.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setPostId={setPostId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;





