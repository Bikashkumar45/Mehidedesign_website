import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Mehedi Design</h2>

      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>

        <li>
          <a href="#service">Services</a>
        </li>

        <li>
          <a href="#Gallery">Gallery</a>
        </li>

        <li>
          <a href="#Contact">Contact</a>
        </li>

        <li>
          <a href="#About">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
