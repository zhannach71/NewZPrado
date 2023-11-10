import { useParams, Link } from 'react-router-dom'

function User() {
  const { id } = useParams()

  return (
    <div>
      <h1>User</h1>
      <p>User ID: {id}</p>
      <Link to="/">Home</Link>
    </div>
  )
}

export default User