import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Sidebar from '../components/Sidebar';
import Top from '../components/Top';
import Activities from './mainpages/Activities';
import Dashboard from './mainpages/Dashboard';
import Department from './mainpages/Department';
import Employee from './mainpages/Employee';
import Events from './mainpages/Events';
import User from './mainpages/User';
import Holidays from './mainpages/Holidays'
import Accounts from './mainpages/Accounts';

const Home = () => {
  return (
    <div className="container">
        <div className="row">
            <Sidebar />
        </div>
        <div className="row">
            <div className="col">
                <Top/>
            </div>
            <div className="col">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/users" element={<User />} />
                    <Route path="/departments" element={<Department />} />
                    <Route path="/employee" element={<Employee />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/holidays" element={<Holidays />} />
                    <Route path="/accounts" element={<Accounts />} />
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default Home