import React, { useEffect, useState } from 'react'

import { Heading, Container, Skeleton, Stack } from "@chakra-ui/react";

import { useParams, Link } from "react-router-dom";

import { Get } from '../Util/Axios';

const PostDetail = () => {

    const { postId } = useParams();

    const [postdetail, setPostDetail] = useState(null)

    useEffect(() => {

        Get(`http://localhost:5000/post/${postId}`).then((res) => {
            console.log(res.data)
            // set res to state
            setPostDetail(res.data)

        }).catch(() => {
            console.log('error on getting data by id !')
        })
    }, [postId])

    return (
        <div style={{ "padding": "1em 0" }}>
            <Container>
                <Heading p={4}>POST LIST !</Heading>

                {
                    postdetail == null ?
                        <Stack>
                            <Skeleton height="60px" />
                        </Stack>
                        :

                        <div>
                            <div className="card shadow my-4" key={postdetail._id}>
                                <div class="card-header">{postdetail.title}</div>
                                <div class="card-body">
                                    <h5 class="card-title">{postdetail.description}</h5>
                                </div>
                                <div class="card-footer bg-transparent">
                                    <Link className='btn btn-primary btn-md' to={`/post/update/${postdetail._id}`}>EDIT</Link>
                                </div>
                            </div>
                        </div>
                }

            </Container>
        </div >
    )
}

export default PostDetail
