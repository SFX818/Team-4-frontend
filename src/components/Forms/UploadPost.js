import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

// create and update actions imported
import { createPost, updatePost } from '../../actions/posts';

// css 
import useStyles from './formStyles';

const UploadPost = ({ postId, setPostId }) => {
    const [postData, setPostData] = useState({ 
        username: '', 
        description: '', 
        image: '' 
    });
    // ternary for updating = if there's a postId, loop over state.posts (calling find method to find post id )
    const post = useSelector((state) => (postId ? state.posts.find((post) => post._id === postId) : null));    
    
    const dispatch = useDispatch();

    const style = useStyles();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    // const clear = () => {
    //     setPostId(0);
    //     setPostData({ username: '', description: '', image: '' });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!postId) {
          dispatch(createPost(postData));
        //   clear();
        } else {
          dispatch(updatePost(postId, postData));
        //   clear();
        }
    };

    // if (!user?.result?.id) {
    //     return (
    //         <h1>Please sign in to share your pet pics!</h1>
    //     )
    // }

    return (
        <div>
        <Paper className={style.paper}>
            <form onSubmit={handleSubmit} noValidate className={`${style.root} ${style.form}`}>
                <Typography 
                    variant="h6">{postId ? `Editing Post:"${post._id}"` : 'Share your pet pic!'}
                </Typography>        
                <TextField 
                    name="username" 
                    label="Username" 
                    value={postData.username} 
                    onChange={(e) => setPostData({ ...postData, username: e.target.value })} />
                <TextField 
                    name="description" 
                    label="Description" 
                    value={postData.message} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
                <div>
                    <FileBase 
                        className={style.fileInput}
                        type="file" 
                        multiple={false} 
                        onDone={({ base64 }) => setPostData({ ...postData, image: base64 })} />
                </div>
                <Button className={style.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> */}
            </form>
        </Paper>
        </div>
    );
}

export default UploadPost;