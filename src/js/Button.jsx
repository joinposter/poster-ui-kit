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
        className, children, outline, ...otherProps
    } = props;

    return (
        <button className={`p-btn ${outline ? 'p-btn-outline' : ''} ${className}`} {...otherProps}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    outline: false,
    className: '',
};

Button.propTypes = {
    outline: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
};


export default Button;
