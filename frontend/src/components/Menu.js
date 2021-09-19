import React from 'react'
import { ListGroup, Row, Col } from "reactstrap"
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <ListGroup>
            <Row>
                <Col>
                <Link to="/" className="list-group-item" style={{backgroundColor:"gray", color:"white"}}>
                    Home
                </Link>

                </Col>
                <Col>
                <Link to="/add" className="list-group-item" style={{backgroundColor:"gray", color:"white"}}>
                    Write a new blog
                </Link>

                </Col>
            </Row>
        </ListGroup>
    )
}

export default Menu