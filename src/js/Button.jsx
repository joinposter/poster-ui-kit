import React from 'react';
import PropTypes from 'prop-types';


/**
 * A button for main action
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Button = (props) => {
    const {
        className, children, outline, inputBlocked, ...otherProps
    } = props;

    return (
        <button
            className={`p-btn ${outline ? 'p-btn-outline' : ''} ${className} ${inputBlocked ? 'p-input-blocked' : ''}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    outline: false,
    className: '',
    inputBlocked: false,
};

Button.propTypes = {
    outline: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
    inputBlocked: PropTypes.bool,
};


export default Button;
