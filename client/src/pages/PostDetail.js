import React, { useEffect, useState } from 'react'

import { Heading, Container, Skeleton, Stack, Box } from "@chakra-ui/react";

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
                            <Box bg="tomato" w="100%" p={4} color="white">
                                {postdetail.title}
                            </Box>
                            <Box bg="black" w="100%" p={4} color="white">
                                {postdetail.description}
                            </Box>
                            <Box bg="grey" w="100%" p={4} color="white">
                                <Link to={`/post/update/${postdetail._id}`}>EDIT</Link>
                            </Box>
                        </div>
                }

            </Container>
        </div >
    )
}

export default PostDetail
