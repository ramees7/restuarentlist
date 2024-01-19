import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Restcard from '../component/Restcard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/storeSlice'


function Home() {

    const dispatch = useDispatch()
    const allRestuarant = useSelector((state) => state.storeSlice.allRestuarants)

    useEffect(() => {
        dispatch(fetchRestaurant())
        console.log(allRestuarant);
    },[])

    return (
        <div>
            <h2 className='text-center py-5'>Available Restuarents</h2>
            <Row className='m-5'>
                {
                    allRestuarant ?
                    allRestuarant.map(item => (
                            <Col sm={12} md={4} lg={3}>
                                <Restcard restuarant={item}/>
                            </Col>
                        )):
                        null
                }

            </Row>
        </div>
    )
}

export default Home