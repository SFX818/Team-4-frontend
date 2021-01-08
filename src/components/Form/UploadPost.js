import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

// create and update actions imported
import { createPost, updatePost } from '../../actions/posts';

const UploadPost = ({ postId, setPostId }) => {
    const [postData, setPostData] = useState({ 
        username: '', 
        description: '', 
        image: '' 
    });
    const post = useSelector((state) => (postId ? state.posts.find((post) => post._id === postId) : null));

    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setPostId(0);
        setPostData({ username: '', description: '', image: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (postId === 0) {
          dispatch(createPost(postData));
          clear();
        } else {
          dispatch(updatePost(postId, postData));
          clear();
        }
    };

    return (
        <div>
        <Paper>
            <form onSubmit={handleSubmit}>
                <Typography variant="h6">{postId ? `Editing Post:"${post._id}"` : 'Make a Post'}</h2>        
                <TextField name="username" label="Username" value={postData.username} onChange={(e) => setPostData({ ...postData, username: e.target.value })} />
                <TextField name="description" label="Description" value={postData.message} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
                <div>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, image: base64 })} />
                </div>
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
        </div>
    );
}

export default UploadPost;