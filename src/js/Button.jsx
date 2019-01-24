import React from 'react';
import PropTypes from 'prop-types';

import '../css/button.less';


export default class Button extends React.Component {
    static defaultProps = {
        outline: false,
        className: '',
    };

    static propTypes = {
        outline: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.any.isRequired,
    };

    render() {
        const { className, children, outline, ...otherProps } = this.props;

        return (
            <button className={`p-btn ${outline ? 'p-btn-outline' : ''} ${className}`} {...otherProps}>
                {children}
            </button>
        );
    }
}
