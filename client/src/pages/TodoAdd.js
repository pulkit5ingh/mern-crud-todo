import React from 'react';

import { useForm, Controller } from "react-hook-form";

import { useHistory } from "react-router-dom";

import { Post } from '../Util/Axios';

const PostEdit = () => {

    const { control, handleSubmit, errors } = useForm();

    const history = useHistory();

    const onSubmit = (data) => {
        console.log("FORMMMMMMMMMMMMMM", data);
        // Post('http://localhost:5000/add_post', {
        //     title: data.title,
        //     description: data.description,
        // })

        // history.push('/post');
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
        <div className="container">
            <div style={{ padding: "1em 0", marginTop: "10%" }}>
                <>

                    <div className="row">

                        <div className="col col-md-6 col-sm-12 mx-auto">


                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-group">
                                    <input type="text" className="form-control"
                                        name="title"
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
                                </div>

                                <div className="form-group">

                                    <input type="text" className="form-control"
                                        name="description"
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
                                </div>


                                {errors.title && errors.title.message}

                                {errors.description && errors.description.message}

                                <input type="submit" className="btn btn-primary" value="ADD" />

                            </form>

                        </div>

                    </div>

                </>
            </div >
        </div>
    )
}

export default PostEdit
