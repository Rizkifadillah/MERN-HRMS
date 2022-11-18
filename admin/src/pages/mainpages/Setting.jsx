import React from 'react'

const Setting = () => {
  return (
    <div className="l-container">
      <div className="l-row">
        <form action="">
          <div className="l-groups">
            <h2 className="l-title"></h2>
            <div className="l-group">
              <label htmlFor="ID">Admin ID</label>
              <input type="text" id="ID" required spellCheck="false"/>
            </div>
            <div className="l-group">
              <label htmlFor="o_pass">Admin Old Password</label>
              <input type="password" id="o_pass" required />
            </div>
            <div className="l-group">
              <label htmlFor="n_pass">Admin New Password</label>
              <input type="password" id="n_pass" required />
            </div>
            <div className="l-group">
              <label htmlFor="r_pass">Admin Retype New Password</label>
              <input type="password" id="r_pass" required />
            </div>
            <div className="l-group">
              <button className='l-btn'>Update</button>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Setting