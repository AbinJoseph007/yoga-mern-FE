import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';
import { editClassAPI } from '../services/allAPI';
import { editClassResponseContext } from '../context/ContextShare';

function Editclass({ classes }) {

    const { editClassResponse, setEditClassResponse } = useContext(editClassResponseContext)

    const [show, setShow] = useState(false);

    const [classdetails, setclassDetails] = useState({
        id: classes._id,
        classname: classes.classname,
        classtype: classes.classtype,
        agelimit: classes.agelimit,
        link: classes.link,
        classImage: ""
    })

    const [preview, setPreview] = useState("")

    const handleClose = () => {
        setShow(false);
        handleClose1()
    }

    const handleShow = () => setShow(true);

    useEffect(() => {
        if (classdetails.classImage) {
            setPreview(URL.createObjectURL(classdetails.classImage))
        }
    }, [classdetails.classImage])

    const handleClose1 = () => {
        setclassDetails({
            id: classes._id,
            classname: classes.classname,
            classtype: classes.classtype,
            agelimit: classes.agelimit,
            link: classes.link,
            classImage: ""
        })

        setPreview("")
    }

    const handleUpdate = async () => {
        const { id, classname, classtype, agelimit, link,classImage } = classdetails

        if (!classname || !classtype || !agelimit || !link ) {
            alert(`please fill the form completly`)
        }
        else {
            const reqBody = new FormData()
            reqBody.append("classname", classname)
            reqBody.append("classtype", classtype)
            reqBody.append("agelimit", agelimit)
            reqBody.append("link", link)
            preview ? reqBody.append("classImage", classImage) : reqBody.append("classImage", classes.classImage)


            const tokens = sessionStorage.getItem("tokens")

            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${tokens}`
                }
                const result = await editClassAPI(id, reqBody, reqHeader)
                console.log(result);
                if (result.status === 200) {
                    alert('updated successfully')
                    handleClose()
                    setEditClassResponse(result.data)
                }
                else {
                    console.log(result.response.data);
                }
            }
            else {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${tokens}`
                }
                const result = await editClassAPI(id, reqBody, reqHeader)
                console.log(result);
                if (result.status === 200) {
                    alert('updated successfully')
                    handleClose()
                    setEditClassResponse(result.data)
                }
                else {
                    console.log(result.response.data);
                }
            }
        }
    }

    return (
        <>
            <button onClick={handleShow} className='btn'>
                <i style={{ color: "white" }} className='fa-solid fa-user-pen'></i>
            </button>

            <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Class Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <label htmlFor='imagess' className=''>
                                <input id='imagess' type='file' style={{ display: 'none' }} onChange={e => setclassDetails({ ...classdetails, classImage: e.target.files[0] })} />
                                <img src={preview ? preview : `${BASE_URL}/uploads/${classes.classImage}`} alt='No image' width={'100%'} />
                            </label>
                        </Col>
                        <Col md={6}>
                            <div className='mb-3'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Class title'
                                    value={classdetails.classname}
                                    onChange={(e) => setclassDetails({ ...classdetails, classname: e.target.value })}
                                />
                            </div>
                            <div className='mb-3'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Class type'
                                    value={classdetails.classtype}
                                    onChange={(e) => setclassDetails({ ...classdetails, classtype: e.target.value })}
                                />
                            </div>
                            <div className='mb-3'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Age limit'
                                    value={classdetails.agelimit}
                                    onChange={(e) => setclassDetails({ ...classdetails, agelimit: e.target.value })}
                                />
                            </div>
                            <div className='mb-3'>
                                <textarea
                                    type='text'
                                    className='form-control'
                                    placeholder='Class link'
                                    value={classdetails.link}
                                    onChange={(e) => setclassDetails({ ...classdetails, link: e.target.value })}
                                />
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={handleClose1}>
                        Cancel
                    </Button>
                    <Button variant='success' onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
           
        </>
    );
}

export default Editclass;
