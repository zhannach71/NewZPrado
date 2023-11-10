import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/user/1">User 1 (route params)</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
        <h1>React Optimization Examples</h1>
        <ul>
          <li>
            <Link to="/react-memo">React.memo</Link>
          </li>
          <li>
            <Link to="/use-callback">useCallback</Link>
          </li>
          <li>
            <Link to="/use-memo">useMemo</Link>
          </li>
          <li>
            <Link to="/use-transition">useTransition</Link>
          </li>
        </ul>
      </div>
    
  )
}

export default Home