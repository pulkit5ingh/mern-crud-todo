import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useParams, Link, useHistory } from "react-router-dom";

const PostDetail = () => {

    const { postId } = useParams();
    let history = useHistory();

    const [postdetail, setPostDetail] = useState(null)

    useEffect(() => {
        getTodo();
    }, []);


    // Want to use async/await? Add the `async` keyword to your outer function/method.
    async function getTodo() {
        try {
            const response = await axios.get(`http://localhost:5000/post/${postId}`);
            console.log("SINGLE -> ", response.data);
            setPostDetail(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteTodo(id) {
        console.log("DELETE")
        console.log(id)
        try {
            const response = await axios.post(`http://localhost:5000/delete_post/`,
                { id }
            );
            console.log("DELETED ", response.data);
            history.push('/todos')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div style={{ "padding": "1em 0" }}>
            <div>
                <h1 >POST LIST !</h1>

                {
                    postdetail == null ?
                        <>
                            <p>Loading ...</p>
                        </>
                        :

                        <div>
                            <div className="card shadow my-4" key={postdetail._id}>
                                <div class="card-header">{postdetail.title}</div>
                                <div class="card-body">
                                    <h5 class="card-title">{postdetail.description}</h5>
                                </div>
                                <div class="card-footer bg-transparent">
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
