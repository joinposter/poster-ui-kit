import React from 'react';
import PropTypes from 'prop-types';


const FormGroup = (props) => {
    const {
        children, error, id, label, className,
    } = props;

    let htmlFor = id;

    // We will automatically bind id to input
    if (!id && children && children.type === 'input' && children.props && children.props.id) {
        htmlFor = children.props.id;
    }

    return (
        <div className={`p-form-group ${Boolean(error) && 'has-error'} ${className || ''}`}>
            <label className="p-control-label" htmlFor={htmlFor}>
                {label}
            </label>
            <div className="p-control-wrapper">
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
};

FormGroup.propTypes = {
    children: PropTypes.any,
    label: PropTypes.string,
    error: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
};

export default FormGroup;
