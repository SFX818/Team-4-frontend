import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import moment from 'moment';

import { likePost, deletePost, findOne, updatePost } from "../../../services/post.service"
import useStyles from './styles';

// grab currentuser info
import { getCurrentUser } from "../../../services/auth.service"


const Post = (props) => {
  const [postId, setPostId] = useState("")
  const currentUser = getCurrentUser()
  let postData = props.post
  const styles = useStyles();

    return (
      <Card className={styles.card}>
        <CardMedia className={styles.media} image={postData.image || 'https://i.imgur.com/VQJtZJh.jpg'} />
        <div className={styles.overlay}>
          <Typography variant="h6">{currentUser.username}</Typography>
          <Typography variant="body2">{moment(postData.createdAt).fromNow()}</Typography>
        </div>
        <div className={styles.overlay2}>
          <Button 
            style={{ color: 'white' }} 
            size="small" 
            onClick={() => setPostId(postData._id)}>
          </Button>
        </div>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{postData.description}</Typography>
        </CardContent>
        {/* <CardActions className={styles.cardActions}>
          <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
        </CardActions> */}
      </Card>
    );
};


export default Post; 