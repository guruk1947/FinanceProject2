import React from 'react'
import { Link } from 'react-router-dom'

const LoginHome = () => {
  return (
    <div>
      <Link to="/catBar" className="nav-link">Login</Link>
    </div>
  )
}

export default LoginHome
