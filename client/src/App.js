import React from 'react'

import { Heading, Container, Skeleton, Stack, Box, MenuItems, Center, SimpleGrid, } from "@chakra-ui/react";

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import PostList from './pages/PostList';
import PostEdit from './pages/PostEdit';
import PostDetail from './pages/PostDetail'
import PostUpdate from './pages/PostUpdate'


const App = () => {
  return (
    <>
      <div>

        <Container>
          <SimpleGrid color='white' columns={2} spacing={10}>
            <Box bg="tomato" my={4} p={4}>
              <Link to='/post'>ALL POST</Link>
            </Box>
            <Box bg="tomato" my={4} p={4}>
              <Link to='/post/edit'>ADD POST</Link>
            </Box>
          </SimpleGrid>
        </Container>

        <Switch>
          {/* <Route path='/' component={PostList} exact /> */}
          <Route path='/post' component={PostList} exact />
          <Route path='/post/edit' component={PostEdit} exact />
          <Route path='/post/:postId' component={PostDetail} exact />
          <Route path='/post/update/:updateId' component={PostUpdate} />

        </Switch>

      </div>
    </>
  )
}

export default App
