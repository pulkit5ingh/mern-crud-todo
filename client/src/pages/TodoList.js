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
            console.log("ALL TODOS =====> ", res.data)
            // set res to state
            setPost(res.data)
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })

    }, [])

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
                                <div className="card-header">{postItem.title} {postItem.createdAt}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{postItem.description}</h5>
                                </div>
                                <div className="card-footer bg-transparent">
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
