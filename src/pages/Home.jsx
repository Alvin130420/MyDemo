import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className=''>
      This is the Home Page
      <Outlet/>
    </div>
  )
}
