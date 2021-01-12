import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import Post from './Post/Post';
import useStyles from './styles';

import { findAll } from '../../services/post.service';


const Posts = (props) => {
  const [posts, setPosts] = useState("")
  const styles = useStyles();

  useEffect(() => {
    findAll().then((res) => {
      setPosts(res.data)
    }).catch(err => {
      console.log(err)
    })
  })

  const timeline = posts.map((post, index) => {
    return <Post key={post._id} post={post}/>
  })

  return (

      <Grid className={styles.container} container alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            {timeline}
          </Grid>
      </Grid>
  );
};

export default Posts;


