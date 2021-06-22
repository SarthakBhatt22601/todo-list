import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import {
    Link
} from "react-router-dom";

export default function Header(props) {
    return (
        <div>
            <nav>
                <Link to="/"><h1>{props.title}</h1></Link>
                <Link to="/about"><p>About</p></Link>
                <Link to="/"><p>Home</p></Link>
            </nav>
        </div>
    )
}

Header.defaultProps = {
    title: "Your Title Here"
}

Header.propTypes = {
    title: PropTypes.string,
}