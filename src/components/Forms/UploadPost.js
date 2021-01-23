import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

// grab currentuser info
import { getCurrentUser } from "../../services/auth.service"

// create and update actions imported
import { createPost, updatePost } from '../../services/post.service';

// css 
import useStyles from './formStyles';

const UploadPost = (props) => {
    const currentUser = getCurrentUser()
    const styles = useStyles();
    const [postData, setPostData] = useState({
        description: "",
        image: "",
        user: currentUser.id
    });

    useEffect(() => {
        setPostData(props.post)
    }, [props.post])

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!props.postId) {
            console.log(postData)
            createPost(postData).then(
                (response) => { 
                    // console.log(response)
                    setTimeout(() => {
                        props.history.push("/home")
                    }, 2000)
                },
                (err) => {
                    console.log(err)
                }
            )
        } else {
            updatePost(props.postId, postData).then(
                (response) => {
                    // console.log(response)
                    setTimeout(() => {
                        props.history.push("/home")
                    }, 2000)
                },
                (err) => {
                    console.log(err)
                }
            )
        }
    };

    return (
        <div>
            {console.log(`this is the post data:`, postData)}
            <Paper className={styles.paper}>
                <form onSubmit={handleSubmit} noValidate className={`${styles.root} ${styles.form}`}>
                    <Typography 
                        variant="h6">{'Share your pet pic!'}
                    </Typography>       

                    <div>
                        <FileBase 
                            type="file"
                            label="file" 
                            multiple={false} 
                            onDone={({ base64 }) => setPostData({ 
                                ...postData, image: base64 
                            })} 
                        />
                    </div>

                    <TextField 
                        name="description" 
                        label="description" 
                        value={postData || ""} 
                        onChange={(e) => setPostData({ 
                            ...postData, description: e.target.value 
                        })} 
                    />

                    <Button 
                        className={styles.buttonSubmit} 
                        variant="contained" 
                        color="primary" 
                        size="large" 
                        type="submit" 
                        fullWidth
                        >Submit
                    </Button>
                </form>
            </Paper>
        </div>
    );
}


export default UploadPost;