import React, { useEffect, useState } from 'react'

import { useParams, Link, useHistory } from "react-router-dom";

import { useForm, Controller } from "react-hook-form";

import { Get, Post } from '../Util/Axios';

import axios from 'axios'

const PostUpdate = () => {

    const { updateId } = useParams();
    //console.log(updateId)

    const [postdetail, setPostDetail] = useState(null)

    useEffect(() => {

        Get(`http://localhost:5000/post/update/${updateId}`).then((res) => {
            console.log(res.data)
            // set res to state
            setPostDetail(res.data)

        }).catch(() => {
            console.log('error on getting data by id !')
        })
    }, [updateId]);


    const { control, handleSubmit, errors } = useForm();

    const history = useHistory();

    const onSubmit = (data) => {
        console.log(data);
        axios.put(`http://localhost:5000/post/update/${updateId}`, {
            title: data.title,
            description: data.description,
        })

        history.push(`/post/${updateId}`);
    };


    return (
        <div style={{ "padding": "1em 0" }}>
            <div className="container">
                <h1 p={4}>Update Post !</h1>

                {
                    postdetail == null ?
                        <p>
                            Loading.. ..
                        </p>
                        :

                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* <FormControl isInvalid={errors.title}>
                                    <FormLabel>Title</FormLabel>
                                    <Controller
                                        name="title"
                                        as={Input}
                                        control={control}
                                        defaultValue={postdetail.title}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Title is Required !"
                                            },
                                            minLength: {
                                                value: 3,
                                                message: 'Min length is 3 !'
                                            }
                                        }}
                                    />
                                    <FormErrorMessage>
                                        {errors.title && errors.title.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={errors.description}>
                                    <FormLabel>Description</FormLabel>
                                    <Controller
                                        name="description"
                                        as={Textarea}
                                        control={control}
                                        defaultValue={postdetail.description}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Desc is Required !"
                                            },
                                            minLength: {
                                                value: 5,
                                                message: 'Min length is 5 !'
                                            }
                                        }}
                                    />
                                    <FormErrorMessage>
                                        {errors.description && errors.description.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <br />
                                <FormControl>
                                    <Controller
                                        name="id"
                                        as={Input}
                                        control={control}
                                        defaultValue={postdetail._id}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Desc is Required !"
                                            },
                                            minLength: {
                                                value: 5,
                                                message: 'Min length is 5 !'
                                            }
                                        }}
                                    />
                                </FormControl>
                                <FormControl>
                                    <Button colorScheme="blue" type='submit'>Button</Button>
                                </FormControl> */}
                            </form>
                        </div>
                }
            </div>
        </div >
    )
}

export default PostUpdate
