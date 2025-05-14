import React  from 'react'
import { Link } from 'react-router-dom'

function FooterLink(props) {
  const detail = props.details.map((el, index) => 
    <li key={index} className="hover:text-indigo-400 transition duration-200 mb-1">
        <Link  to={el.to}>{el.link}</Link>
    </li>
  )
  return (
    <div>
      <h1 className='text-white text-xl'>{props.title}</h1>
      <ul className="mt-4">
          {detail}
      </ul>
    </div>
  )
}

export default FooterLink
