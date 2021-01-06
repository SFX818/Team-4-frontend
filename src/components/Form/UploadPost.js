import React, { useState } from 'react';
import { Button } from "reactstrap";
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';

const UploadPost = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ 
        username: '', 
        description: '', 
        image: '' 
    });
    const dispatch = useDispatch();

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>{currentId ? `Editing Post:"${post._id}"` : 'Make a Post'}</h2>        
                <input name="username" label="Username" value={postData.username} onChange={(e) => setPostData({ ...postData, username: e.target.value })} />
                <input name="description" label="Description" value={postData.message} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
                <div>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, image: base64 })} />
                </div>
                <Button type="submit">Submit</Button>
                <Button onClick={clear}>Clear</Button>
        </form>
        </div>
    );
}