import React from "react";

import { Switch, Route, Link } from "react-router-dom";

import { Header } from "./components/Header";
import TodoList from "./pages/TodoList";
import TodoAdd from "./pages/TodoAdd";
import TodoDetail from "./pages/TodoDetail";
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <div>
        <Header />

        <Switch>
          <Route path="/todo/add" component={TodoAdd} exact />
          <Route path="/todo/:postId" component={TodoDetail} exact />
          <Route path="/todos" component={TodoList} exact />
          <Route path='/' component={Home} exact />
        </Switch>
      </div>
    </>
  );
};

export default App;
