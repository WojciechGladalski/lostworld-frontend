import React from 'react';
import {API_URL} from '../../shared/constants';
import axios from "axios";
import Button from "react-bootstrap/Button";

const inputObject = React.createRef()

function getTemplate() {
    return axios({
        method: 'get',
        url: 'http://2c36ee71.ngrok.io/photos/upload',
        })
        .then(response =>{
            return response.data
        })
        .catch(response => {
            console.log(response)
            return null
        });
}

function fileHandler(event) {
    event.preventDefault();

    // console.log(inputObject)
    // console.log(inputObject.current.files[0])

    const fileBytes = []

    const reader = new FileReader()
    reader.onload = function () {
        let arrayBuffer = reader.result
        let bytes = new Uint8Array(arrayBuffer);
        bytes.forEach(item => fileBytes.push(item))
        //console.log(bytes);
    }
    reader.readAsArrayBuffer(inputObject.current.files[0])

    getTemplate().then(responseObject => {

        responseObject.data = fileBytes
        responseObject.fileName = inputObject.current.files[0].name
        responseObject.fileType = inputObject.current.files[0].type
        responseObject.size = inputObject.current.files[0].size

        axios({
            method: 'post',
            url:'http://2c36ee71.ngrok.io/photos/upload',
            data: responseObject
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (response) {
                console.log(response);
            });
    })
};

const test = props => (
    <div>
        <div className="single-upload">
            <h3>Upload Single File</h3>
            <form>
                <input type="file" name="file" ref={inputObject}/>
                <Button variant="success" onClick={fileHandler}>Submit</Button>
            </form>
        </div>
    </div>
);

export default test;