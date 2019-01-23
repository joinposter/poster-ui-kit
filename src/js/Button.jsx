import React from 'react';
// import PropTypes from 'prop-types';


export default class Button extends React.Component {
    render() {
        let { onSubmit, disabled, children } = this.props;

        return (
            <button type="button" className="p-btn" onClick={onSubmit} disabled={disabled}>
                {'Привет Костя!'}
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
