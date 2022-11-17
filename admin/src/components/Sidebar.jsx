import React from 'react'
import { NavLink } from 'react-router-dom'
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from 'cdbreact';


const Sidebar = () => {
  return (
    // <div className='s-container'
    //   style={{  height: '100vh', overflow: 'scroll initial' }}
    // >
    //   <CDBSidebar textColor="#fff" backgroundColor="#333">
    //     <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
    //       <a
    //         href="/"
    //         className=""
    //         style={{ color: 'inherit' }}
    //       >
    //         Sidebar
    //       </a>
    //     </CDBSidebarHeader>

    //     <CDBSidebarContent className="sidebar-content">
    //       <CDBSidebarMenu>
    //         <NavLink exact to="/" activeClassName="activeClicked">
    //           <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
    //         </NavLink>
    //         <NavLink exact to="/tables" activeClassName="activeClicked">
    //           <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
    //         </NavLink>
    //         <NavLink exact to="/profile" activeClassName="activeClicked">
    //           <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
    //         </NavLink>
    //         <NavLink exact to="/analytics" activeClassName="activeClicked">
    //           <CDBSidebarMenuItem icon="chart-line">
    //             Analytics
    //           </CDBSidebarMenuItem>
    //         </NavLink>

    //         <NavLink
    //           exact
    //           to="/hero404"
    //           target="_blank"
    //           activeClassName="activeClicked"
    //         >
    //           <CDBSidebarMenuItem icon="exclamation-circle">
    //             404 page
    //           </CDBSidebarMenuItem>
    //         </NavLink>
    //       </CDBSidebarMenu>
    //     </CDBSidebarContent>

    //     <CDBSidebarFooter style={{ textAlign: 'center' }}>
    //       <div
    //         style={{
    //           padding: '20px 5px',
    //         }}
    //       >
    //         Sidebar Footer
    //       </div>
    //     </CDBSidebarFooter>
    //   </CDBSidebar>
    // </div>
    <div className='s-container'>
        <div className="s-row">
            <h2 className="s-logo">
                HR-Rizk
            </h2>
        </div>
        <div className="s-row">
            <div className="s-groups">
                <div className="s-group">
                    <NavLink to="/dashboard" className='s-link' activeclassname="active">Dashboard</NavLink>
                </div>
                <div className="s-group">
                    <NavLink to="/users" className='s-link' activeclassname="active">Users</NavLink>
                </div>
                <div className="s-group">
                    <NavLink to="/departments" className='s-link' activeclassname="active">Department</NavLink>
                </div>
                <div className="s-group">
                    <NavLink to="/employee" className='s-link' activeclassname="active">Employee</NavLink>
                </div>
                <div className="s-group">
                    <NavLink to="/activities" className='s-link' activeclassname="active">Activities</NavLink>
                </div>
                <div className="s-group">
                    <NavLink to="/events" className='s-link' activeclassname="active">Events</NavLink>
                </div>
                <div className="s-group">
                    <NavLink to="/holidays" className='s-link' activeclassname="active">Holidays</NavLink>
                </div>
                <div className="s-group">
                    <NavLink to="/accounts" className='s-link' activeclassname="active">Accounts</NavLink>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar