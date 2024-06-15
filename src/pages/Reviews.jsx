import React from 'react'
import Card from 'react-bootstrap/Card';
import Header from '../components/Header';


function Reviews() {
  return (
    <>
    <Header/>
    <div className='mt-5' style={{alignItems:"center",padding:"30px" }}>
    <div className="id">
      <Card style={{ width: '18rem',marginTop:"150px",alignItems:"center",padding:"30px"}}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
         
          
        </Card.Body>
      </Card>
    </div>
    </div>  
    </>
  )
}

export default Reviews