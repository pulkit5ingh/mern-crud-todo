import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

const PostList = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);

  let getTodos = async () => {
    let response = await axios("http://localhost:5000/all_todos");
    let todos = response.data.todos;
    setTodo(todos);
    setLoading(false);
    console.log(todos);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div style={{ padding: "1em 0" }}>
      <div className="container">
        <h1 p={4}>ALL TODOS !</h1>
        {loading ? (
          <>loading....</>
        ) : (
          todo.map((todoItem) => {
            return (
              <div className="card shadow my-4" key={todoItem._id}>
                <div className="card-header">
                  {todoItem.title} {todoItem.createdAt}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{todoItem.description}</h5>
                </div>
                <div className="card-footer bg-transparent">
                  <Link
                    className="btn add-btn btn-md"
                    to={`/todo/${todoItem._id}`}
                  >
                    Read More ...
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PostList;
