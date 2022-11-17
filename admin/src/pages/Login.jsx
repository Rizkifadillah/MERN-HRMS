import React from 'react'

const Login = () => {
  return (
    <div className="l-container">
      <div className="l-row">
        <form action="">
          <div className="l-groups">
            <h2 className="l-title">Login</h2>
            <div className="l-group">
              <label htmlFor="ID">Admin ID</label>
              <input type="text" id="ID" required spellCheck="false"/>
            </div>
            <div className="l-group">
              <label htmlFor="pass">Admin Password</label>
              <input type="password" id="pass" required />
            </div>
            <div className="l-group">
              <button className='l-btn'>Login</button>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Login