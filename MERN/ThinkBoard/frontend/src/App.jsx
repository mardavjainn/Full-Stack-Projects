import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CreatePage from './Pages/createPage';
import NoteDetail from './Pages/NoteDetail';
import toast from 'react-hot-toast';
import './index.css';

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetail />} />
      </Routes>
    </div>
  )
}
export default App
