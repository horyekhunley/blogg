import React, { useState, useEffect } from 'react'
import { ListGroup, Row, Col, Card, CardTitle } from 'reactstrap'
import Blog from './Blog.js'
import {Link} from 'react-router-dom'
import axios from 'axios'
import base_url from "../service/serviceapi";
import {toast} from 'react-toastify'

const AllBlogs = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(()=> {
        getAllBlogsFromServer()
    }, [])

    const updateBlogs = (blogId) => {
        setBlogs(blogs.filter((blog) => blog.blogId !== blogId))
    }

    const getAllBlogsFromServer = () => {
        axios.get(`${base_url}/all`).then(
            (response)=>{
                setBlogs(response.data)
                toast.success("All Blogs loaded from server", {position: 'top-center'})
            },
            (error) => {
                toast.error("Blogs not loaded from server")
            }
        )
    }
    return (
        <Card body inverse color="info">
            <CardTitle className="display-2">
                All Blogs
            </CardTitle>
            {
                blogs.length>0?
                    blogs.map((blog) => {
                        <Blog key={blog.blogId} blog = {blog} update={updateBlogs}/>
                    })
                    :
                    "No Blogs Here!"
            }


        </Card>
    )
    
}

export default AllBlogs