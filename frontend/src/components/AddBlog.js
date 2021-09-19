import axios from 'axios'
import React, {useState} from 'react'
import { toast } from 'react-toastify'
import { ListGroup, Row, Col, Card, CardBody, CardTitle, Input, Container, Button } from 'reactstrap'
import base_url from '../service/serviceapi'

const AddBlog = () => {

const [blog, setBlog] = useState({})

const handleForm = (param) => {
    postData(blog)
    param.preventDefault()
}
const postData = (data) => {
    axios.post(`${base_url}/create`,data)
    .then((response)=>{
        toast.info.apply('New Blog created successfully :)')
    }, (error) => {
        toast.error("Something went wrong. :(")
    })
}

    return (
        <Card body inverse color="info">
            <CardBody>
                <form onSubmit={handleForm}>
                    <CardTitle className="display-2">
                        New Blog
                    </CardTitle>
                    <Input placeholder="Enter Blog title." onChange={ (e) => {
                        setBlog({...blog, title:e.target.value})
                    }}/>
                    <br />
                    <Input type="textarea" rows="10" 
                        placeholder="Write your thoughts here" 
                        onChange={ (e) => {
                            setBlog({...blog, content:e.target.value})
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

export default AddBlog