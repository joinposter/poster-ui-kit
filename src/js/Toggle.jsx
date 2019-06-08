/** @module */


import React from 'react';
import PropTypes from 'prop-types';

/**
 * Toggle checkbox
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Toggle = (props) => {
    const { className, ...otherProps } = props;

    return (
        <div className={`p-toggle ${className}`}>
            <div className="checkbox checkbox-slider--b-flat">
                <label>
                    <input type="checkbox" {...otherProps} />
                    <span />
                </label>
            </div>
        </div>
    );
};


Toggle.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    id: PropTypes.string,
};

Toggle.defaultProps = {
    className: '',
    id: '',
    checked: undefined,
    onChange: () => ({}),
};


export default Toggle;
