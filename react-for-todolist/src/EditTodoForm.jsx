import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditTodoForm = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState({ titre: '', description: '', status: '' });

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(`/api/Mytodoes/${id}`);
        setTodo(response.data);
      } catch (error) {
        console.error('Error fetching todo:', error);
      }
    };

    fetchTodo();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/Mytodoes/${id}`, todo);
      // Rediriger vers la page principale ou faire toute autre action nécessaire après l'édition
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <div className="edit-todo-form">
      <h2>Edit Todo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <textarea type="text" name="titre" value={todo.titre} onChange={handleChange} className="form-input" />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={todo.description} onChange={handleChange} className="form-textarea" />
        </label>
        <label>
          Status:
          <textarea name="Status" value={todo.status} onChange={handleChange} className="form-textarea" />
        </label>
        <br />
        <button type="submit" className="form-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditTodoForm;
