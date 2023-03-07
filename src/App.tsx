import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Get from './Components/Get';
import Post from './Components/Post';
import Update from './Components/Update';
import Delete from './Components/Delete';

function App() {
  return (
      <div>
          <h1>Crud Operations from Web API</h1>
          <Routes>
              <Route path='/' element={<Get></Get>}></Route>
          </Routes>
          <Routes>
              <Route path='/addUser' element={<Post></Post>}></Route>
          </Routes>
          <Routes>
              <Route path='/updateUserData/:id' element={<Update></Update>}></Route>
          </Routes>
          <Routes>
              <Route path='/deleteUserData/:id' element={<Delete></Delete>}></Route>
          </Routes>
      </div>
  );
}

export default App;
