import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import Books from './Books';
import Editbook from './Editbook';
import Singlebook from './Singlebook';

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Books/>} />
        <Route path="/books/:id" element={<Singlebook />}/>
        <Route path="/books/:id/edit" element={<Editbook />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="*" element={<h1>Page not found</h1>}/>
    </Routes>
  )
}

export default Mainroutes;