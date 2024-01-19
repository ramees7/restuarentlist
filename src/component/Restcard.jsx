import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Restcard({restuarant}) {
    return (
        <div className='d-flex justify-content-center '>
            <Card style={{ width: '18rem',height:"28rem"}} className='m-3'>
                <Card.Img variant="top" src={restuarant?.photograph} height={250}/>
                <Card.Body className='h-100'>
                    <Card.Title className='mb-4 text-center' style={{fontSize:"25px"}}>{restuarant?.name}</Card.Title>
                    <Card.Text >
                        <p><span className='fw-bolder'>Neighbhorhood : </span>{restuarant?.neighborhood}</p>
                        <p><span className='fw-bolder'>Cuisine type : </span>{restuarant?.cuisine_type}</p>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Restcard