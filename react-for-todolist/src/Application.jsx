// App.jsx
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import EditTodoForm from './EditTodoForm';
import App from './App'; // Renommez App en TodoList

const Application = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/edit/:id" element={<EditTodoForm />} />
      </Routes>
    </Router>
  );
};

export default Application;