import React from 'react';
import {API_URL} from '../../shared/constants';
import axios from "axios";

function getAnswer() {
    axios({
        method: 'get',
        url: 'http://2c36ee71.ngrok.io/photos/upload',
    })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}


var singleUploadForm = document.querySelector('#singleUploadForm');
var singleFileUploadInput = document.querySelector('#singleFileUploadInput');
var singleFileUploadError = document.querySelector('#singleFileUploadError');
var singleFileUploadSuccess = document.querySelector('#singleFileUploadSuccess');

function uploadSingleFile(file) {
    const photoObject = getAnswer().response.data;

    console.log(photoObject);
    console.log(file);

    var formData = new FormData();
    formData.append("file", file);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", API_URL + "/photos/upload");

    xhr.onload = function () {
        console.log(xhr.responseText);
        var response = JSON.parse(xhr.responseText);
        if (xhr.status == 200) {
            singleFileUploadError.style.display = "none";
            singleFileUploadSuccess.innerHTML = "<p>File Uploaded Successfully.</p><p>DownloadUrl : <a href='" + response.fileDownloadUri + "' target='_blank'>" + response.fileDownloadUri + "</a></p>";
            singleFileUploadSuccess.style.display = "block";
        } else {
            singleFileUploadSuccess.style.display = "none";
            singleFileUploadError.innerHTML = (response && response.message) || "Some Error Occurred";
        }
    };
    xhr.send(formData);
}

if (singleUploadForm) {
    singleUploadForm.addEventListener('submit', function (event) {
        var files = singleFileUploadInput.files;
        // if (files.length === 0) {
        //     singleFileUploadError.innerHTML = "Please select a file";
        //     singleFileUploadError.style.display = "block";
        // }
        uploadSingleFile(files[0]);
        event.preventDefault();
    }, true);
}

const test = props => (
    <div>
        <button onClick={getAnswer}>response</button>

            <div className="single-upload">
                <h3>Upload Single File</h3>
                <form id="singleUploadForm" name="singleUploadForm">
                    <input id="singleFileUploadInput" type="file" name="file" className="file-input" required/>
                    <button type="submit" className="primary submit-btn">Submit</button>
                </form>
                <div className="upload-response">
                    <div id="singleFileUploadError"></div>
                    <div id="singleFileUploadSuccess"></div>
                </div>
            </div>

    </div>
);

export default test;