import { Modal } from 'react-bootstrap'

export default ({ show, handleClose, starship }) => {
    return (
        <Modal centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{starship.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <p><b>Crew: </b> {starship.crew}</p>
                <p><b>Passengers:</b> {starship.passengers}</p>
                <p><b>Cargo capacity:</b>{starship.cargo_capacity}</p>
            </Modal.Body>
        </Modal>
    );
}