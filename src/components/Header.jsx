import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header id='header'>
      <h1 id='site-name'><Link to="/">Open Trivia Database</Link></h1>
    </header>
  )
}