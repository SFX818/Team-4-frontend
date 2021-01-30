import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom'

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

    let history = useHistory();

    useEffect(() => {
        setPostData(props.post)
    }, [props.post])

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!props.postId) {
            console.log("post data on line 34:", postData)
            console.log("testing the type of image", typeof(postData.image))
            createPost(postData).then(
                (response) => { 
                    // console.log(response)
                    setTimeout(() => {
                        history.push("/home")
                        window.location.reload(false)
                    }, 2000)
                },
                (err) => {
                    console.log(err)
                }
            )
        } else {
            console.log(props.postId)
            updatePost(props.postId, postData).then(
                (response) => {
                    // console.log(response)
                    setTimeout(() => {
                        history.push("/home")
                        window.location.reload(false)
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
            {console.log(`this is the post data before upload:`, postData)}
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
                                ...postData, user: currentUser.id, image: base64 
                            })} 
                        />
                    </div>

                    <TextField 
                        name="description" 
                        label="description" 
                        value={postData ? postData.description : "Type in a description!"}
                        onChange={(e) => setPostData({ 
                            ...postData, user: currentUser.id, description: e.target.value 
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