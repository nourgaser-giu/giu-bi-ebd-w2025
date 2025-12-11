import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/logo.svg";
import "./style.css";

function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Website logo" />
      </Link>
      <nav>
        <div className="nav-links">
          <Link to="/">Home</Link> |<Link to="/add">Add Listing</Link>
          {user && user.role === "admin" && (
            <>
              {" | "}
              <Link to="/admin" className="admin-link">
                Admin
              </Link>
            </>
          )}
        </div>

        <div className="nav-auth">
          {user ? (
            <>
              <span className="username">
                Welcome, <strong>{user.username}</strong>
              </span>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="login-link">
                Login
              </Link>
              <Link to="/register" className="register-link">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;