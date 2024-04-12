import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/Home'


function WebsiteRouter() {
  return (
    <div>
 
        <Routes >
        <Route path="/" element={<Home />} />   
        <Route path="/login" element={<Login />} />   
        </Routes>
 
    </div>
  )
}

export default WebsiteRouter
