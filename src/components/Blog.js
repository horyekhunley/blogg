import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle, Container } from 'reactstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
import base_url from '../service/serviceapi'
import { toast } from 'react-toastify'

const Blog = ({ blog, update }) => {

    const deleteblog = (blogId) => {
        axios.delete(`${base_url}/delete/${blogId}`)
        .then(
            (response) => {
                toast.info("Blog " + blogId + " deleted successfully")
                update(blogId)
            },
            (error) => {
                toast.error("Something went wrong. Working on it :)")
            }
        )
    }
    return (
        <Card body inverse color="info">
            <CardBody>
                <CardTitle className="font-weight-bold">
                    {blog.title}

                </CardTitle>
                <CardText>{blog.content}</CardText>
            </CardBody>
            <Container>
                <Link className="btn btn-primary" to={{pathname:'/update', param:blog.blogId}}>
                    Edit
                </Link>
                <Button color="danger" onClick={()=> {
                    deleteblog(blog.blogId)
                }}>
                    Delete
                    </Button>
            </Container>

        </Card>
    )
}

export default Blog