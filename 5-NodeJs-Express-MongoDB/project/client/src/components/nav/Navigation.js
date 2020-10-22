import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
  } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from './nav.module.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return(  
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink exact activeClassName={styles.active} className={styles.navLink + " nav-link"} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName={styles.active} className={styles.navLink + " nav-link"} to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName={styles.active} className={styles.navLink + " nav-link"} to="/contact">Contact</NavLink>
              </NavItem>
            </Nav>        
            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} className={styles.cart}/></Link>
          </Collapse>
        </Navbar>    
    );
};

export default Navigation;