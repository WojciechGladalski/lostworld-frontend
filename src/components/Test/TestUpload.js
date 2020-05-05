import React from 'react';
import {API_URL} from '../../shared/constants';
import axios from "axios";
import Button from "react-bootstrap/Button";

const inputObject = React.createRef()

function fileHandler(event) {

    event.preventDefault();
    console.log(inputObject)
    console.log(inputObject.current.files[0])

    const formData = new FormData()
    formData.append("photo", inputObject.current.files[0]);

    axios({
        method: 'post',
        url: API_URL + '/photos/upload',
        data: formData
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error.response.data);
        });
};

const TestUpload = props => {
    return (
        <div>
            <div className="single-upload">
                <h3>Upload Single File</h3>
                <form>
                    <input type="file" name="file" ref={inputObject}/>
                    <Button variant="success" onClick={fileHandler}>Submit</Button>
                </form>
            </div>
        </div>
    )
};

export default TestUpload;