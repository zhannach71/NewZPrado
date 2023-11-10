// src/pages/Dashboard.js
import { Outlet, Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to="/dashboard/profile">Profile</Link>
        </li>
        <li>
          <Link to="/dashboard/settings">Settings</Link>
        </li>
      </ul>
      <Outlet />
      <Link to="/">Home</Link>
    </div>
  )
}

export default Dashboard