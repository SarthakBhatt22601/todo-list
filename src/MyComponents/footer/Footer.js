import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';

export const Footer = (props) => {
    return (
        <div>
            <div className="details">  
                <p>Made By {props.developer} | <a href="https://github.com/SarthakBhatt22601/todo-list">GitHub Repo</a></p>
            </div> 
        </div>
    )
}

Footer.propTypes = {
    developer: PropTypes.string.isRequired
}