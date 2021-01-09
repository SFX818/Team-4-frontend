import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

// grab currentuser info
import { getCurrentUser } from "../../services/auth.service"

// create and update actions imported
import { createPost } from '../../services/post.service';

// css 
import useStyles from './formStyles';

const UploadPost = () => {
    const currentUser = getCurrentUser()
    const [username, setUsername] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const style = useStyles();

    // const clear = () => {
    //     setPostData({ username: '', description: '', image: '' }); 
    // };

    const onChangeUsername = (e) => {
        const username = e.target.value
        setUsername(username)
    }

    const onChangeDescription = (e) => {
        const description = e.target.value
        setDescription(description)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const comments = []
        const newPost = [{
            comments,
            username,
            description,
            image,
        }]
        createPost(newPost);
        console.log(newPost)
        // clear()
    };

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
                    value={username}
                    onChange={onChangeUsername} />
                <TextField 
                    name="description" 
                    label="Description" 
                    value={description}
                    onChange={onChangeDescription} />
                <div>
                    <FileBase 
                        className={style.fileInput}
                        type="file"
                        multiple={false} 
                        onDone={({ base64 }) => setImage(image: base64)} />
                </div>
                <Button className={style.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> */}
            </form>
        </Paper>
        </div>
    );
}

export default UploadPost;