import React from 'react'


import {
    FormControl,
    FormLabel,
    Button,
    Input,
    Container,
    Textarea,
    FormErrorMessage
} from "@chakra-ui/react"


import { useForm, Controller } from "react-hook-form";

const PostManage = ({ onSubmit }) => {

    const { control, handleSubmit, errors } = useForm();

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

export default PostManage
