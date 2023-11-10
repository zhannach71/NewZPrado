import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>Welcome to the About page!</p>
      <Link to="/">Home</Link>
    <header>
      <h1>Hi! My name is Zhanna Prado. I am a web developer.</h1>
    </header>
    <main>
      <p>Welcome to my new React home page! I am currently working on my first React project. I love German Shepherds. They are loyal and protective.</p>
      <img src="https://picsum.photos/300" alt="Placeholder" />

      
    </main>
  </div>
  )
}

export default About