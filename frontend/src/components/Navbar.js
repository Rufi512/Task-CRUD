import React from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
export const Navbar = () =>{
  let history = useHistory()
  return(
    <nav>
      <h2 onClick={(e)=>{history.push('/')}}>Task List</h2>
        <ul>
          <Link className="link" to="/create"> <li>Create Task</li> </Link>
        </ul>
      </nav>
  )
}
