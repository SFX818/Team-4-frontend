import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import moment from 'moment';

import { likePost, deletePost } from "../../../services/post.service"
import useStyles from './styles';

// grab currentuser info
// import { getCurrentUser } from "../../../services/auth.service"


const Post = ({ post, setPostId }) => {
  // const currentUser = getCurrentUser()
  const styles = useStyles();
  console.log("here is the post data on post.js:", post)

    return (
      <Card className={styles.card}>
        <CardMedia className={styles.media} image={post.image || 'https://i.imgur.com/VQJtZJh.jpg'} />
        <div className={styles.overlay}>
          <Typography variant="h6">{post.user.username}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={styles.overlay2}>
          <Button 
            style={{ color: 'white' }} 
            size="small" 
            onClick={() => setPostId(post.post_id)}>
          </Button>
        </div>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.description}</Typography>
        </CardContent>
        {/* <CardActions className={styles.cardActions}>
          <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
        </CardActions> */}
      </Card>
    );
};


export default Post; 