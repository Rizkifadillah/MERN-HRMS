import React from 'react'
import { FaCalendar, FaHotel, FaIdCardAlt, FaUserAlt} from 'react-icons/fa'
import GrowthChart from '../../components/GrowthChart'
import Projects from '../../components/Projects'
import RevenueChart from '../../components/RevenueChart'
import SalaryChart from '../../components/SalaryChart'


const Dashboard = () => {
  return (
    <div className='d-container'>
      <div className="d-row">
        <h1 className="d-title">Welcome RizkHR</h1>
      </div>
      <div className="d-row">
        <div className="d-groups">
          <div className="d-group">
              <div className="d-badge">0</div>
            <div className="d-content">
              <FaUserAlt/>
              <span className="d-subtitle">Users</span>
            </div>
          </div>
          <div className="d-group">
            <div className="d-badge">0</div>
            <div className="d-content">
              <FaHotel />
              <span className="d-subtitle">Holidays</span>
            </div>
          </div>
          <div className="d-group">
            <div className="d-badge">0</div>
            <div className="d-content">
              <FaCalendar/>
              <span className="d-subtitle">Events</span>
            </div>
          </div>
          <div className="d-group">
            <div className="d-badge">0</div>
            <div className="d-content">
              <FaIdCardAlt/>
              <span className="d-subtitle">Accounts</span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-row">
        <div className="d-charts">
          <div className="d-chart">
            <SalaryChart />
          </div>
          <div className="d-chart">
            <RevenueChart />
          </div>
          {/* <div className="d-chart">
            <GrowthChart />
          </div>
          <div className="d-chart">

          </div> */}
        </div>
        <div className="d-projects">
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default Dashboard