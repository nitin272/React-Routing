import { Link } from "react-router-dom";

export default function CustomNavbar() {
  return (
    <nav className="custom-nav">
      <Link to="/" className="custom-site-title">
        Kavlium ❤️
      </Link>
      <ul className="custom-nav-links">
        <Link to="/contacts" className="custom-nav-link">
          Contacts
        </Link>
        <Link to="/about" className="custom-nav-link">
          About
        </Link>
      </ul>
    </nav>
  );
}
