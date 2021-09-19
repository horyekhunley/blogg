import React, {useState, useEffect} from "react";
import {ListGroup, Row, Col, Card, CardTitle, Input, Container, Button, CardBody} from 'reactstrap'
import axios from 'axios'
import base_url from "../service/serviceapi";
import {toast} from 'react-toastify'

const UpdateBlog = (props) => {

    const [blog, setBlog] = useState({})

    const getAllBlogFromServerById = () => {
        axios.get(`$(base_url)/id/${props.location.param}`).then(
            (response) => {
                setBlog(response.data)
            }, (error) => {
                toast.error('Something went wrong. :(')
            }
        )
    }
    useEffect(() => {
        getAllBlogFromServerById()

    }, [])


    const handleForm = (param) => {
        putData(blog)
        param.preventDefault()
    }

    const putData = (data) => {
        axios.put(`${base_url}/update`,data)
        .then((response)=>{
            toast.info.apply(`Blog updated successfully :)`)
        }, (error) => {
            toast.error("Something went wrong. :(")
        })
    }

    return(
        <Card>
            <CardBody>
                <form onSubmit={handleForm}>
                    <CardTitle className="display-2">
                        New Blog

                    </CardTitle>
                    <Input placeholder="Enter Blog title." value={blog.title} onChange={(param) => {
                        setBlog({...blog,title:param.target.value})
                    }}/>
                    <br />
                    <Input type="textarea" rows="10"
                           placeholder="Write your thoughts here"
                           value={blog.content}
                           onChange={(param) => {
                            setBlog({...blog,title:param.target.value})
                        }}
                    />
                    <br />
                    <Container>
                        <Button type="submit" color="success"
                                style={{marginRight: 15+"px"}}>
                            Post a Blog
                        </Button>
                        <Button type="reset" color="warning">
                            Clear
                        </Button>
                    </Container>
                </form>
            </CardBody>
        </Card>
    )
}

export default UpdateBlog