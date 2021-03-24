import React from 'react'

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Header } from './components/Header'
import TodoList from './pages/TodoList';
import TodoAdd from './pages/TodoAdd';
import TodoDetail from './pages/TodoDetail'
import TodoUpdate from './pages/TodoUpdate'


const App = () => {
  return (
    <>
      <div>

        <Header />

        <Switch>
          {/* <Route path='/' component={TodoList} exact /> */}
          <Route path='/todos' component={TodoList} exact />
          <Route path='/todo/add' component={TodoAdd} exact />
          <Route path='/todo/:postId' component={TodoDetail} exact />
          <Route path='/todo/update/:updateId' component={TodoUpdate} />

        </Switch>

        <Link to="/todo/add" className="float-btn">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </span>
        </Link>

      </div>
    </>
  )
}

export default App
