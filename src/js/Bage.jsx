import React from 'react';
import PropTypes from 'prop-types';


const Bage = (props) => {
    const {
        children, text, type, className, ...otherProps
    } = props;

    return (
        <span {...otherProps} className={`p-bage p-bage-${type} ${className}`}>
            {text || children}
        </span>
    );
};


Bage.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['success', 'info', 'warning', 'danger', 'primary', 'default']),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    text: PropTypes.string,
};

Bage.defaultProps = {
    children: '',
    className: '',
    type: 'info',
    text: '',
};

export default Bage;
