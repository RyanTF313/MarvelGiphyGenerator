import { Link } from "react-router-dom";

const navStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: '#518cca',
    color: 'white',
    padding: '15px',
    fontSize: '2em',
  }
  
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  }

export default function Nav() {
  return (
    <div className="nav" style={navStyle}>
      <Link to="/" style={linkStyle}>
        <div>Home</div>
      </Link>
      <Link to="/about" style={linkStyle}>
        <div>About</div>
      </Link>
    </div>
  );
}