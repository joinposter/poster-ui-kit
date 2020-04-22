import React from 'react';
import PropTypes from 'prop-types';


const FormGroup = (props) => {
    const {
        children, error, id, label, className, vertical, disableInputStyles,
    } = props;

    let htmlFor = id;

    // We will automatically bind id to input
    if (!id && children && children.type === 'input' && children.props && children.props.id) {
        htmlFor = children.props.id;
    }

    return (
        <div className={`p-form-group ${Boolean(error) && 'has-error'} ${className || ''} ${vertical && 'vertical'}`}>
            <label className="p-control-label" htmlFor={htmlFor}>
                {label}
            </label>
            <div className={`p-control-wrapper ${disableInputStyles && 'disable-input-styles'}`}>
                {children}
                {Boolean(error) && <span className="error-msg">{error}</span>}
            </div>
        </div>
    );
};

FormGroup.defaultProps = {
    children: null,
    label: '',
    error: '',
    id: '',
    className: '',
    vertical: false,
    disableInputStyles: false, // Sometimes we need to disable library styles for side libraries
};

FormGroup.propTypes = {
    children: PropTypes.any,
    label: PropTypes.string,
    error: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    vertical: PropTypes.bool,
    disableInputStyles: PropTypes.bool,
};

export default FormGroup;
