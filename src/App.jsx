import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from './components/Table';
import ViewData from './components/ViewData';
import EditForm from './components/EditForm';

function App() {
  const [data, setData] = useState([]);

  const handleFormSubmit = (formData) => {
    setData([...data, formData]);
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Table data={data} />} />
        <Route path='/form' element={<Form onSubmit={handleFormSubmit} />} />
        <Route path='/viewData/:id' element={<ViewData />} />
        <Route path='/edit/:id' element={<EditForm />} />
      </Routes>
    </Router>
  );
}

export default App;