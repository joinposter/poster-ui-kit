import React from 'react';
import PropTypes from 'prop-types';


const Alert = (props) => {
    const {
        onClose, children, type, className, ...otherProps
    } = props;
    const hasCloseBtn = Boolean(onClose);

    return (
        <div {...otherProps} className={`p-alert p-alert-${type} ${hasCloseBtn ? 'dismissable' : ''} scroll-top ${className}`}>
            {children}
            {Boolean(onClose) && (<button type="button" className="close" aria-hidden="true" onClick={onClose}>×</button>)}
        </div>
    );
};

Alert.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    type: PropTypes.oneOf(['danger', 'success', 'info', 'warning']),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

Alert.defaultProps = {
    className: '',
    onClose: null,
    type: 'danger',
    children: null,
};

export default Alert;
