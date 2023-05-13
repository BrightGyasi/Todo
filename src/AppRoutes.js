import React from 'react';
import {Routes, Route} from 'react-router-dom';
import FirstPage from './components/FirstPage';
import TodoListApp from './components/TodoListApp';
import TodoListApi from './components/TodoListApi';

const AppRoutes = () => {

  return (
    <Routes>
      <Route path ="/" element = {<FirstPage/>} />
      <Route path ="/todos" element = {<TodoListApp/>} />
      <Route path ="/server" element = {<TodoListApi/>} />
    </Routes>

  );
}


export default AppRoutes;