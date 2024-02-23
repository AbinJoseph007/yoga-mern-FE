import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addClassAPI } from '../services/allAPI';
import { addClassResponseContext } from '../context/ContextShare';
import Swal from 'sweetalert2';

function Addclass() {

    //image url
    const [preview, setPreview] = useState("")

    const {addClassResponse , setAddClassResponse} = useContext(addClassResponseContext)

    const [classdetails, setClassDetails] = useState({
        classname: "",
        classtype: "",
        agelimit: "",
        link: "",
        classImage: ""

    })

    const [show, setShow] = useState(false);

    //thold 
    const [tokens, setTokens] = useState("")

    const handleClose = () => {
        setShow(false);
        handleclose1()
    };
    const handleShow = () => setShow(true);

    console.log(classdetails);

    const handleclose1 = () => {
        setClassDetails({
            classname: "",
            classtype: "",
            agelimit: "",
            link: "",
            classImage: ""
        })
    }
    useEffect(() => {
        if (classdetails.classImage) {
            (setPreview(URL.createObjectURL(classdetails.classImage)))
        }
        else {
            setPreview("")
        }
    }, [classdetails.classImage])

    useEffect(() => {
        if (sessionStorage.getItem("tokens")) {
            setTokens(sessionStorage.getItem("tokens"))
        }
        else {
            setTokens("")
        }
    }, [])

    console.log(preview);

    //add class
    const handleAdd = async (e) => {
        e.preventDefault()

        const { classname, classtype, agelimit, link, classImage } = classdetails

        if (!classname || !classtype || !agelimit || !link || !classImage) {
            Swal.fire({
                title: "🚫",
                icon: "info",
                text: "please fill the form completely"
            });
        
        } else {
            //reqbody
            const reqBody = new FormData()
            reqBody.append("classname", classname)
            reqBody.append("classtype", classtype)
            reqBody.append("agelimit", agelimit)
            reqBody.append("link", link)
            reqBody.append("classImage", classImage)

            if (tokens) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${tokens}`
                }


                const result = await addClassAPI(reqBody, reqHeader)
                console.log(result);

                if (result.status === 200) {
                    console.log(result.data);
                    Swal.fire({
                        title: "✅",
                        icon: "success",
                        text: "class Added successfully"
                    });
                    handleClose()
                    setAddClassResponse(result.data)
                }
                else {
                    console.log(result.response.data);
                }

            }
        }
    }
    return (
        <>
            <div className='ms-auto'>
                <Button variant="success" onClick={handleShow}>
                    Add your Classes

                </Button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>class details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <label htmlFor="imagess" className=''>
                                <input id='imagess' type="file" style={{ display: "none" }} onChange={(e) => setClassDetails({ ...classdetails, classImage: e.target.files[0] })} />
                                <img src={preview ? preview : ""} alt="no image" width={'100%'} />
                            </label>
                        </Col>
                        <Col md={6}> 
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='class title' value={classdetails.className} onChange={(e) => setClassDetails({ ...classdetails, classname: e.target.value })} />
                            </div>
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='class type' value={classdetails.classtype} onChange={(e) => setClassDetails({ ...classdetails, classtype: e.target.value })} />
                            </div>
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='age limit' value={classdetails.agelimit} onChange={(e) => setClassDetails({ ...classdetails, agelimit: e.target.value })} />
                            </div>
                            <div className='mb-3'>
                                <textarea type="text" className='form-control' placeholder='class link' value={classdetails.link} onChange={(e) => setClassDetails({ ...classdetails, link: e.target.value })} />
                            </div>

                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleclose1}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleAdd} >Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Addclass