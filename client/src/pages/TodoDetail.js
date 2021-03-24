import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useParams, Link, useHistory } from "react-router-dom";

const PostDetail = () => {

    const { postId } = useParams();
    let history = useHistory();

    const [loading, setLoading] = useState(true)
    const [postdetail, setPostDetail] = useState(null)

    useEffect(() => {
        getTodo();
    }, []);

    async function getTodo() {
        try {
            const response = await axios.get(`http://localhost:5000/post/${postId}`);
            console.log("SINGLE DATA BY _ID -> ", response.data);
            setPostDetail(response.data)
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    async function updateTodo() {
        try {
            const response = await axios.get(`http://localhost:5000/post/${postId}`);
            console.log("SINGLE DATA BY _ID -> ", response.data);
            setPostDetail(response.data)
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteTodo(postId) {
        console.log("DELETE ============> ", postId)
        try {
            const response = await axios.post(`http://localhost:5000/delete_post/`,
                { id: postId }
            );
            console.log("DELETED ", response.data);
            history.push('/todos')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div style={{ "padding": "1em 0" }}>
            <div className="container">
                <h1 >POST LIST !</h1>
                {loading ?
                    <>
                        <p>Loading ...</p>
                    </>
                    :
                    <div>
                        <div className="card shadow my-4" key={postdetail._id}>
                            <div className="card-header">{postdetail.title}</div>
                            <div className="card-body">
                                <h5 className="card-title">{postdetail.description}</h5>
                            </div>
                            <div className="card-footer bg-transparent">
                                <Link className='btn btn-primary btn-md' to={`/todo/update/${postdetail._id}`}>EDIT</Link>
                                <span className='btn btn-primary btn-md' onClick={() => { deleteTodo(postdetail._id) }}>DELETE</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}

export default PostDetail
