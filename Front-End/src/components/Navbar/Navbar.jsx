import "./Navbar.css"
import logo from "../../assets/logo.png";
export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContaniner">
            <img className="logo" src={logo} alt="Logo" />
            <div className="navIteam">
              <button className="navBtn">Login</button>
              <button className="navBtn">Register</button>
            </div>
        </div>
    </div>
  )
}
