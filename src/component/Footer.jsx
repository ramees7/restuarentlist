import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className='' style={{width:"100%", height:"100%",  backgroundColor:"#5b6e70"}}>
            <Row className='p-5'>
                <Col md='6 ' className='my-4'>
                    <h4 style={{color:"#000"}}>E-Shopping</h4>
                    <p style={{textAlign:'justify', color:"#000"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur non minima repellendus sapiente voluptatem. Reprehenderit voluptates blanditiis iusto error ratione. Ullam, officiis sapiente. Magni corrupti laborum ut atque libero labore.</p>
                </Col>
                
                <Col md='6' sm='6' className='d-flex justify-content-center my-4'>
                    <div className='d-flex flex-column'>
                        <h4 style={{color:"#000"}}>Guides</h4>
                        <Link to={'https://react.dev/'} style={{textDecoration:"none", color:"black"}}>React</Link>
                        <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:"none", color:"black"}}>React Bootstrap</Link>
                        <Link to={'https://fontawesome.com/'} style={{textDecoration:"none" ,color:"black"}}>Font Awsome</Link>
                        <Link to={'https://fonts.google.com/'} style={{textDecoration:"none" ,color:"black"}}>Google font</Link>
                    </div>
                </Col>

            </Row>
            <p className='text-center py-4' style={{marginBottom:"0", color:"#000"}}>Copyright © 2023 Spotify. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer