import React, { useState } from 'react';

import { useForm, Controller } from "react-hook-form";

import { useHistory } from "react-router-dom";

import { Post } from '../Util/Axios';

import {
    FormControl,
    FormLabel,
    Button,
    Input,
    Container,
    Textarea,
    FormErrorMessage
} from "@chakra-ui/react"

const PostEdit = () => {

    const { control, handleSubmit, errors } = useForm();

    const history = useHistory();

    const onSubmit = (data) => {
        console.log(data);
        Post('http://localhost:5000/add_post', {
            title: data.title,
            description: data.description,
        })

        history.push('/post');
    };

    // const onSubmitHandler = (event) => {
    //     event.preventDefault();
    //     Post('http://localhost:5000/add_blog',
    //         {
    //             title, description
    //         }
    //     )
    //         .then(() => {
    //             setTitle("");
    //             setDescription('');
    //         })
    //         .catch(() => { });
    // }

    return (
        <div style={{ "padding": "1em 0" }}>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={errors.title}>
                        <FormLabel>Title</FormLabel>
                        <Controller
                            name="title"
                            as={Input}
                            control={control}
                            defaultValue=""
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
                            defaultValue=""
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
                        <Button colorScheme="blue" type='submit'>Button</Button>
                    </FormControl>
                </form>
            </Container>
        </div >
    )
}

export default PostEdit
