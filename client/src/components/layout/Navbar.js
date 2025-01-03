import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'


export const Navbar = ({auth: {isAuthenticated, loading}, logout }) => {

  //Navbar for authenticated users
  const authLinks = (
    <ul>
      <li>
        <Link to ="/profiles">People</Link>
      </li>
      <li>
        <Link to ="/posts">Posts</Link>
      </li>
      <li><Link to ="/dashboard">
      <i className="fas fa-user"/>{''}
      <span className='hide-sm'>Dashboard</span></Link>
      </li>
      <li>
        <a onClick = {logout} href ='#!'>
        <i className="fas fa-sign-out-alt"/>{''}
        <span className='hide-sm'>Logout</span></a>
      </li>

    </ul>
  );


  //Navbar for guests
  const guestLinks = (
    <ul>
      <li><Link to ="/profiles">
      People
      </Link>
      </li>
      <li><Link to ="/posts">Posts</Link></li>
      <li><Link to ="/register">Register</Link></li>
      <li><Link to ="/login">Login</Link></li>
      
    </ul>);
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to = '/'><i className="fas fa-code"></i> Bluebird 
        </Link>
      </h1>
      { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks}</Fragment>) }
    </nav>
  )
}
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, {logout})(Navbar);