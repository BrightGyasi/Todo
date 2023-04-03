import React from 'react';
import {Routes, Route} from 'react-router-dom';
import FirstPage from './components/FirstPage';

import TodoListApp from './components/TodoListApp';

const AppRoutes = () => {

  return (
    <Routes>
      <Route path ="/" element = {<FirstPage/>} />
      <Route path ="/todos" element = {<TodoListApp/>} />
    </Routes>

  );
}


export default AppRoutes;