import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';


export default class Submit extends React.Component {
    static propTypes = {
        buttonText: PropTypes.string.isRequired,
        buttonProps: PropTypes.object,
        onClick: PropTypes.func,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
    };

    static defaultProps = {
        buttonProps: {},
        onClick: () => {
        },
        children: null,
    };


    constructor(props) {
        super(props);

        this.state = { isSending: false };
    }

    onSubmit = (e) => {
        const { onClick } = this.props;
        const { isSending } = this.state;

        if (isSending) {
            e.preventDefault();
            e.stopPropagation();

            return;
        }

        this.setState({ isSending: true });

        onClick(e, () => this.setState({ isSending: false }));
    };

    render() {
        const { children, buttonText, buttonProps } = this.props;
        const { isSending } = this.state;

        const {
            inputBlocked, onClick, inProgress, ...otherButtonProps
        } = buttonProps;

        return (
            <div className="p-submit fixed">
                <Button
                    inputBlocked={isSending || inputBlocked}
                    inProgress={isSending || inProgress}
                    onClick={this.onSubmit}
                    {...otherButtonProps}
                >
                    {buttonText}
                </Button>
                {children}
            </div>
        );
    }
}