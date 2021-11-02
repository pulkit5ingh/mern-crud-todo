import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const TodoAdd = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

//   const onSubmit = (data) => console.log(data);

  //   console.log(watch("title"));

  const onSubmit = async (data) => {
    console.log("FORM DATA ADDED =>>> ", data);
    try {
      const response = await axios.post(`http://localhost:5000/add_todo/`, {
        title: data.title,
        description: data.description,
      });
      history.push("/todos");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div style={{ padding: "1em 0", marginTop: "10%" }}>
        <>
          <div className="row">
            <div className="col col-md-6 col-sm-12 mx-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                  <label class="form-label">Title</label>
                  <input
                    {...register("title", { required: true, maxLength: 20 })}
                    type="text"
                    className="form-control form-control-lg"
                  />
                </div>
                {/* // * ===================== ALERT ================== */}

                {errors.title?.type === "required" ? (
                  <>
                    <div
                      className="alert alert-danger d-flex align-items-center p-2"
                      role="alert"
                    >
                      <div className="alert-text">Title is required</div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {/* // * ===================== ALERT ================== */}

                <div className="form-group mb-3">
                  <label class="form-label">Description</label>

                  <input
                    {...register("description", {
                      required: true,
                      maxLength: 20,
                    })}
                    type="text"
                    className="form-control form-control-lg"
                  />
                </div>

                {/* // * ===================== ALERT ================== */}

                {errors.description?.type === "required" ? (
                  <>
                    <div
                      className="alert alert-danger d-flex align-items-center p-2"
                      role="alert"
                    >
                      <div className="alert-text">Description is required</div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {/* // * ===================== ALERT ================== */}

                <div class="d-grid gap-2">
                  <input type="submit" className="btn add-btn" value="ADD" />
                </div>
              </form>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default TodoAdd;
