import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);

  const handleFormSubmit = (formData) => {
    setData([...data, formData]);
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Table data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;