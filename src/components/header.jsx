import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          🎰 Lottery Game
        </Link>

        {/* toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* UL NAV */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/how-to-play">
                How to Play
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}