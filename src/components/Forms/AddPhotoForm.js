import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Aux from '../../hoc/AuxComponent/AuxComponent'
import axios from "axios";

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

    console.log(inputObject)
    console.log(inputObject.current.files[0])

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
            url:"http://2c36ee71.ngrok.io/photos/upload",
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

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Dodaj zdjęcie
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="single-upload">
                    <h3>Upload Single File</h3>
                    <form id="singleUploadForm" name="singleUploadForm">
                        <input ref={inputObject} id="singleFileUploadInput" type="file" name="file" className="file-input" required/>
                        {/*<button type="submit" className="primary submit-btn">Submit</button>*/}
                        <Button type="submit" variant="success" onClick={fileHandler}>Dodaj</Button>
                    </form>
                    <div className="upload-response">
                        <div id="singleFileUploadError"></div>
                        <div id="singleFileUploadSuccess"></div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

const AddPhotoForm = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Aux>
            <h3 style={{display: 'inline-block', verticalAlign: 'middle'}}>MOJE ALBUMY</h3>
            <Button type="button" variant="secondary" onClick={() => setModalShow(true)}>Dodaj</Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Aux>
    );
};

export default AddPhotoForm;