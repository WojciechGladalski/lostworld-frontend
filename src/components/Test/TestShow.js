import React from 'react';
import {API_URL} from '../../shared/constants';
import axios from "axios";
import Button from "react-bootstrap/Button";

let id = null

function takePhoto(event) {

    event.preventDefault();

    console.log(id)

    axios({
        method: 'get',
        url: API_URL + '/photos/get/' + id
    })
        .then(function (response) {
            console.log(response);
            console.log(response.data.bytes)
            document.getElementById("PhotoFromBackend").src = "data:image/jpeg;base64," + response.data.bytes;
        })
        .catch(function (error) {
            console.log(error.response.data);
        });
};

function _arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}

const TestShow = props => {

    id = props.match.params.id

    return (
        <div>
            <div className="single-upload">
                <h3>Show Single File</h3>
                <div><button onClick={takePhoto}>Generate!</button></div>
                <div><img id="PhotoFromBackend" src="" style={{height: 500, width: 800}}/></div>
            </div>
        </div>
    )
};

export default TestShow;