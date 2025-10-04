import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <h3>This is header jakria</h3>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Mobiles">Mobiles</Link>
                <Link to="/Laptop">Laptop</Link>
                <Link to="/"></Link>
            </nav>
        </div>
    );
};

export default Header;