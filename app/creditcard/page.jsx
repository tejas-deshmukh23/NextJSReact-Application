"use client"
import React from 'react'
import FirstPage from '../../components/CreditCard/FirstPage'
// import { UserProvider } from '../../contexts/UserContext';
import { UserProvider } from '../../context/ContextFile'
import { BrowserRouter } from 'react-router-dom';

const page = () => {
  return (
    <BrowserRouter>
    <UserProvider>
    <div>
        
      <FirstPage/>
    </div>
    </UserProvider>
    </BrowserRouter>
  )
}

export default page
