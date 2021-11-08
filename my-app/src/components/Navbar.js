import './Navbar.css'
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar">
            <Link to="cart">
                <img className="cart" src="white-shopping-cart-icon-png-19.jpg" alt=""/>
            </Link>
            <Link to="category">
                <img className="category" src="white-folder-icon-24.jpg" alt=""/>
            </Link>
            <Link to="/">
                <img className="logo" src="Luxoriah.png" alt=""/>
            </Link>
            
            
            
        </div>
    );
}

export default Navbar;