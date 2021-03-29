import { Button, Col, Form, Modal } from 'react-bootstrap'
import { useState } from 'react'

export default ({ onInputChange, addPost, show, handleClose }) => {
    const [validate, setValidate] = useState(false)

    const checkAndValidate = async e => {
        setValidate(true)
        try {
            await addPost(e)
            setValidate(false)
            handleClose();
        }
        catch (e) {
            window.alert(e)
        }
    }

    return (
        <Modal size='xl' onHide={handleClose} show={show} centered >
            <Modal.Header closeButton>
                <Modal.Title>Add new Starship</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='Form'>
                    <Form validated={validate} style={{ width: '100%' }}>
                        <Form.Row>
                            <Col>
                                <Form.Control required onChange={onInputChange} name="name" type="text" placeholder="Input Starship Name" />
                                <Form.Control.Feedback type="invalid">
                                    Please input a valid Name
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Col>
                                <Form.Control required onChange={onInputChange} name="manufacturer" type="text" placeholder="Input Starship Manufacturer" />
                                <Form.Control.Feedback type="invalid">
                                    Please input a valid Manufacturer
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Col>
                                <Form.Control required onChange={onInputChange} name="image" type="text" placeholder="Input Starship img link" />
                                <Form.Control.Feedback type="invalid">
                                    Please input a valid Image
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Col>
                                <Form.Control required onChange={onInputChange} name="crew" type="number" placeholder="Input Starship Crew" min={0} />
                                <Form.Control.Feedback type="invalid">
                                    Please input a valid Crew number
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Col>
                                <Form.Control required onChange={onInputChange} name="passengers" type="number" placeholder="Input Starship Passengers" min={0} />
                                <Form.Control.Feedback type="invalid">
                                    Please input a valid number of Passengers
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Col>
                                <Form.Control required onChange={onInputChange} name="cargo_capacity" type="number" placeholder="Input Cargo Capacity" min={0} />
                                <Form.Control.Feedback type="invalid">
                                    Please input a valid Cargo Capacity
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Row>
                        <br />
                        <Button onClick={checkAndValidate} variant="primary" type="submit">Submit</Button>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    )
}