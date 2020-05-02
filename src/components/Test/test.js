import React from 'react';
import {API_URL} from '../../shared/constants';
import axios from "axios";
import Button from "react-bootstrap/Button";

const inputObject = React.createRef()

function getTemplate() {
    return axios({
        method: 'get',
        url: API_URL + '/photos/upload',
        })
        .then(response =>{
            console.log(response)
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

    let fileBytes = []

    const reader = new FileReader()
    reader.onload = function () {
        let arrayBuffer = reader.result
        let bytes = new Uint8Array(arrayBuffer)
        //bytes.forEach(item => fileBytes.push(item))
        fileBytes = Array.from(bytes)
        console.log(bytes);
        console.log(fileBytes)
    }
    reader.readAsArrayBuffer(inputObject.current.files[0])

    getTemplate().then(responseObject => {

        responseObject.data = fileBytes
        responseObject.fileName = inputObject.current.files[0].name
        responseObject.fileType = inputObject.current.files[0].type
        responseObject.size = inputObject.current.files[0].size

        axios({
            method: 'post',
            url: API_URL + '/photos/upload',
            data: responseObject
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error.response.data);
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