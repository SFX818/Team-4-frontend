import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
// grab currentuser info
import { getCurrentUser } from "../../services/auth.service"

// create and update actions imported
import { createPost } from '../../services/post.service';

// css 
import useStyles from './formStyles';

const UploadPost = ( { postId, setpostId }) => {
    const currentUser = getCurrentUser()
    const style = useStyles();
    const [postData, setPostData] = useState({
        user_id: currentUser.id, 
        username: "",
        description: "",
        image: ""
    });

    const post = useSelector((state) => (postId ? state.posts.find((post) => post._id === postId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
        console.log(post)
      }, [post]);

    // const clear = () => {
    //     setPostData({ username: '', description: '', image: '' }); 
    // };



    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (postId === 0) {
          dispatch(createPost(postData));
          console.log(postData)
        // } else {
        //   dispatch(updatePost(postId, postData));
        // }
        };
    }

    return (
        <div>
            <Paper className={style.paper}>
                <form onSubmit={handleSubmit} noValidate className={`${style.root} ${style.form}`}>
                    <Typography 
                        variant="h6">{'Share your pet pic!'}
                    </Typography>        
                    <TextField 
                        name="username" 
                        label="Username" 
                        value={postData.username} 
                        onChange={(e) => setPostData({ ...postData, username: e.target.value })} />
                    <TextField 
                        name="description" 
                        label="Description" 
                        value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
                    <div>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, image: base64 })} />
                    </div>
                    <Button className={style.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> */}
                </form>
            </Paper>
        </div>
    );
}


export default UploadPost;