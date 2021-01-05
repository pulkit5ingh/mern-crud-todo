import React, { useEffect, useState } from 'react'

import { Get } from '../Util/Axios';

import { Box, Heading, UnorderedList, Container, Skeleton, Stack } from "@chakra-ui/react";

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

    }, [])

    return (
        <div style={{ "padding": "1em 0" }}>
            <Container>
                <Heading p={4}>POST LIST !</Heading>
                {loading ? <Stack>
                    <Skeleton height="60px" />
                </Stack> : post.map((postItem) => {
                    return (
                        <UnorderedList key={postItem._id} mb={4}>
                            <Box bg="tomato" w="100%" p={4} color="white">
                                {postItem.title}
                            </Box>
                            <Box bg="black" w="100%" p={4} color="white">
                                {postItem.description}
                            </Box>
                            <Box bg="grey" w="100%" p={4} color="white">
                                <Link to={`/post/${postItem._id}`}>Read More ...</Link>
                            </Box>
                        </UnorderedList>
                    )
                })}
            </Container>
        </div>
    )
}

export default PostList
