import React from 'react'
import { Link } from 'react-router-dom'


export default function NotFound() {
  return (
    <div>
      Path not found
      <Link to='/'></Link>
    </div>
  )
}
