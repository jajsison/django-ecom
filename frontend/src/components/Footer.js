import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
        <div>
            <Container>
                <Row>
           <Col className="text-center py-3">Copyright &copy; Dogshop</Col> 
                </Row>
            </Container>
        </div>
        </footer>
    )
}

export default Footer
