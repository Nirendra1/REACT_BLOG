import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
  let  user = localStorage.getItem("userName")

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/')
  }
  return (
    <div>

    <div className="container-fluid" style={{paddingLeft: "0px", paddingRight: "0px"}}>
    <nav>
    <ul className="nav-ul">

       {/* <li><Link to='/' />LogIn</li>
        <li><Link to='/signup' />SignUP</li>*/}
        <li><Link to='/home'>Home</Link></li>
        <li><Link to ="/services">Services</Link></li>
        <li><Link to ="/portfolio">Portfolio</Link></li>
        <li><Link to ="/about">About</Link></li>
        <li><Link to ="/team">Team</Link></li>
        <li><Link to ="/contact">Contact</Link></li>
        {/* <li><Link to ="/blog">Blogs</Link></li> */}
        <li><Link to="/blog">Blogs</Link></li>


        <NavDropdown title={user} style={{marginLeft:'85%', backgroundColor:'snow', borderRadius:'5px', width:"5%"}}>
        <NavDropdown.Item onClick={logout}>LogOut</NavDropdown.Item>
        </NavDropdown>
    </ul>
    </nav>
</div>

    </div>
  );
}

export default Navbar;

