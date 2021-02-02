import React, { useEffect, useState } from 'react'

import { Get } from '../Util/Axios';

import { Link } from "react-router-dom";

const PostList = () => {

    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // api call
        //Get
        Get('http://localhost:5000/all_posts').then((res) => {
            console.log(res.data)
            // set res to state
            setPost(res.data)
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })

    }, [post])

    return (
        <div style={{ "padding": "1em 0" }}>
            <div className="container" >
                <h1 p={4}>ALL TODOS !</h1>
                {loading ?
                    <>
                        loading....
                    </>
                    : post.map((postItem) => {
                        return (
                            <div className="card shadow my-4" key={postItem._id}>
                                <div class="card-header">{postItem.title}</div>
                                <div class="card-body">
                                    <h5 class="card-title">{postItem.description}</h5>
                                </div>
                                <div class="card-footer bg-transparent">
                                    <Link className='btn btn-primary btn-md' to={`/todo/${postItem._id}`}>Read More ...</Link>
                                </div>
                            </div>
                        )
                    })}
            </div >
        </div >
    )
}

export default PostList
