import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Aux from '../../hoc/AuxComponent/AuxComponent'

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
                        <input id="singleFileUploadInput" type="file" name="file" className="file-input" required/>
                        {/*<button type="submit" className="primary submit-btn">Submit</button>*/}
                        <Button type="submit" variant="success">Dodaj</Button>
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