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
            if (response.status === 202) {
                document.getElementById("answer").innerText = 'One ugly motherfucker... Anyway id is: ' + response.data.id
            }
        })
        .catch(function (error) {
            console.log(error.response.data);
        });
};

const TestUpload = props => {
    return (
        <div>
            <div className="single-upload">
                <h3>Upload Single Photo</h3>
                <form>
                    <input type="file" name="file" ref={inputObject}/>
                    <Button variant="success" onClick={fileHandler}>Submit</Button>
                </form>
                <div id="answer"></div>
            </div>
        </div>
    )
};

export default TestUpload;