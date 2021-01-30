import React from 'react';
import { useHistory } from 'react-router-dom'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import { likePost, deletePost } from "../../../services/post.service"
import useStyles from './styles';

// grab currentuser info
import { getCurrentUser } from "../../../services/auth.service"

const Post = ({ post, setPostId }) => {
    const currentUser = getCurrentUser()
    const styles = useStyles();
    const postId = post._id
    const userId = currentUser.id
    console.log("here is the post data on post.js:", post)

    const likePostHandler = () => {
      likePost(postId)
    }

    let history = useHistory();

    const deletePostHandler = () => {
      deletePost(postId, userId)
      setTimeout(() => {
        history.push("/home")
        window.location.reload(false)
      }, 2000)
    }


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
            onClick={() => setPostId(postId)}><MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.description}</Typography>
        </CardContent>
        <CardActions className={styles.cardActions}>
          <Button size="small" color="primary" onClick={likePostHandler}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
          <Button size="small" color="primary" onClick={deletePostHandler}><DeleteIcon fontSize="small" /> Delete</Button>
        </CardActions>
      </Card>
    );
};


export default Post; 