import React from 'react';
import PropTypes from 'prop-types';


export default class Dropdown extends React.Component {
    static defaultProps = {
        className: '',
        padding: '',
        origin: 'top-left',
        onHide: () => {},
    };

    static propTypes = {
        show: PropTypes.bool.isRequired,
        className: PropTypes.string,
        origin: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
        padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        onHide: PropTypes.func,
        children: PropTypes.any,
    };

    componentWillReceiveProps(props) {
        if (props.show) {
            document.addEventListener('click', this.handleClickOutside, true);
            document.addEventListener('touch', this.handleClickOutside, true);
        } else {
            document.removeEventListener('click', this.handleClickOutside, true);
            document.removeEventListener('touch', this.handleClickOutside, true);
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
        document.removeEventListener('touch', this.handleClickOutside, true);
    }

    handleClickOutside = (event) => {
        const domNode = document.getElementsByClassName('p-dropdown-container')[0];

        if (!domNode || !domNode.contains(event.target)) {
            document.removeEventListener('click', this.handleClickOutside, true);
            document.removeEventListener('touch', this.handleClickOutside, true);

            this.props.onHide();
        }
    };

    render() {
        const { children, show, className, origin, padding } = this.props;

        if (!show) return null;

        return (
            <div className={`p-dropdown ${className} ${origin}`} style={{ padding }}>
                <div style={{ zIndex: 1, position: 'relative' }}>
                    {children}
                </div>
            </div>
        );
    }
}
