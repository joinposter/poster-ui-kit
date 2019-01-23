import React from 'react';
import PropTypes from 'prop-types';


export default class Button extends React.Component {
    render() {
        let { className, children, outline } = this.props;

        return (
            <button className={`p-btn ${outline ? 'p-btn-outline' : ''} ${className || ''}`} {...this.props}>
                {children}
            </button>
        )
    }
}

// Button.propTypes = {
//     btnText: PropTypes.string,
//     sendingData: PropTypes.bool,
//     onSubmit: PropTypes.func,
//     noOffset: PropTypes.bool,
//     disabled: PropTypes.bool,
// };
