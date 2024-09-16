import React from 'react'
import { Header } from './Pages/Header'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {

  return (
    <div>
      <Header />
      <Outlet />

    </div>
  )
}
