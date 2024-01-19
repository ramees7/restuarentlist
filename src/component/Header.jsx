import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar className="py-4" style={{ backgroundColor: "#5b6e70" }}>
                <Container >
                    {/* <Link to={'/'} style={{ textDecoration: "none" }}> */}
                    <Navbar.Brand href="#home"><img alt="" src="https://www.pngall.com/wp-content/uploads/8/Restaurant-Logo-PNG-Photo.png" width="45" height="45" className="d-inline-block " />
                        {' '} <span className='pt-4'>Restuarant List</span>
                    </Navbar.Brand>
                    {/* </Link> */}

                </Container>
            </Navbar>
        </div>
    )
}

export default Header