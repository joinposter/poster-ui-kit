/** @module */

import React from 'react';
import PropTypes from 'prop-types';

import Spinner from './Spinner';


/**
 * A button for main action
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Button = (props) => {
    const {
        className, children, outline, inputBlocked, inProgress, ...otherProps
    } = props;

    return (
        <button
            className={`p-btn ${outline ? 'p-btn-outline' : ''} ${className} ${inputBlocked ? 'p-input-blocked' : ''}`}
            {...otherProps}
        >
            {inProgress && (<Spinner small className="p-ib p-m-r-8" color={outline ? 'gray' : 'white'} />)}
            {children}
        </button>
    );
};

Button.defaultProps = {
    inProgress: false,
    outline: false,
    className: '',
    inputBlocked: false,
    children: '',
};

Button.propTypes = {
    inProgress: PropTypes.bool,
    outline: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any,
    inputBlocked: PropTypes.bool,
};


export default Button;
