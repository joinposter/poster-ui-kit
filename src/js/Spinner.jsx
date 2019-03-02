import React from 'react';
import PropTypes from 'prop-types';


/**
 * Preloader
 *
 * @param className
 * @param color
 * @returns {*}
 * @constructor
 */
const Spinner = ({ className, color }) => {
    const blades = [];

    for (let i = 0; i < 12; i += 1) {
        blades.push(i);
    }

    return (
        <div className={`p-spinner ${color} animating ${className}`}>
            {blades.map(item => <div key={item} className="p-spinner-blade" />)}
        </div>
    );
};

Spinner.defaultProps = {
    className: '',
    color: 'gray',
};

Spinner.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(['white, gray']),
};

export default Spinner;
