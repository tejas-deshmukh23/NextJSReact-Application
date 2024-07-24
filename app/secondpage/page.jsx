"use client"

import React from 'react'
import SecondPage from '../../components/CreditCard/SecondFormPage';
import { UserProvider } from '../../context/ContextFile'
import { BrowserRouter } from 'react-router-dom';

const page = () => {
  return (
    <BrowserRouter>
    <UserProvider>
    <div>
      <SecondPage/>
    </div>
    </UserProvider>
    </BrowserRouter>
  )
}

export default page
