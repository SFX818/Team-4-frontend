import React, { useState } from 'react';
import Alert from '../components/Alert';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

export default function Upload() {
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const handleFileInputChange = (e) => {

    };

    const previewFile = (file) => {

    };

    const handleSubmitFile = (e) => {

    };

    const uploadImage = async (base64EncodedImage) => {

    };
    return (
        <div>
            <h1 className="title">Make a post</h1>
            <Alert msg={errMsg} type="danger" />
            <Alert msg={successMsg} type="success" />
            <Form onSubmit={handleSubmitFile} className="form">
                
            </Form>
            {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
        </div>
    );
}