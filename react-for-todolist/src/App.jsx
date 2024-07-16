import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from 'react-router-dom';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState(''); 
  const [searchResult, setSearchResult] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/Mytodoes');
        console.log('Data from API:', response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/Mytodoes/bytitle/${inputText}`);
      console.log('Search TO do by day:', response.data);
      setSearchResult(response.data.description);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };


  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/Mytodoes/${id}`);
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>List of todoes</h1>
      <table className="todo-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.titre}</td>
                <td>{item.description}</td>
                <td>
                  <button className="icon-button edit-button" onClick={() => handleEdit(item.id)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="icon-button delete-button" onClick={() => handleDelete(item.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="search-container">
        <input type="text" value={inputText} onChange={handleChange} placeholder="Enter day" />
        <button className='button-Search' onClick={handleSearch}>Search todo</button>
      </div>
      <h2>Mytodo:</h2>
      <p>{searchResult}</p>
    </div>
  );
}

export default App;
