import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = (props) => {
    const { children, className } = props;

    return (
        <div className={`p-tooltip-wrapper p-font-normal p-ib ${className}`}>
            <span>?</span>
            <div className="tooltip">{children}</div>
        </div>
    );
};

Tooltip.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
};

Tooltip.defaultProps = {
    className: '',
};

export default Tooltip;
