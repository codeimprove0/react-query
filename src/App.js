import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import Home from './components/Home'
import UserList from './components/UserList'
import UserDetail from './components/UserDetail'
import UserAdd from './components/UserAdd'
import PostList from './components/PostList'

import { QueryClientProvider, QueryClient } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient();
function App() {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Router>

          <NavLink to="/user-list">User List</NavLink> &nbsp;&nbsp;&nbsp;
          <NavLink to="/user-detail/1">User Detail</NavLink> &nbsp;&nbsp;&nbsp;
          <NavLink to="/user-add">User Add</NavLink> &nbsp;&nbsp;&nbsp;
          <NavLink to="/post-list">Post List</NavLink> &nbsp;&nbsp;&nbsp;
          <NavLink to="/home">Home</NavLink><br /><br />

          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path="/user-add" element={<UserAdd />} />
            <Route path="/post-list" element={<PostList />} />
            <Route path="/user-detail/:id" element={<UserDetail />} />
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
