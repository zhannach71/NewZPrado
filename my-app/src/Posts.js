// src/pages/Posts.js
import { useEffect, useState } from "react"

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10&_expand=user")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((post) => {
          post.title = post.title.split(' ').slice(0,3).join(' ')
        })

        setPosts(data)
      })
  }, [])

  return (
    <div>
      <h2>Posts</h2>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            <div className="card">
              <div className="card__title">
                {post.title}
              </div>
              <div className="card__author">
                by: {post.user.name}
              </div>
              <div className="card__body">
                {post.body}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts