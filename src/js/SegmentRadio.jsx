/** @module */


import React from 'react';
import PropTypes from 'prop-types';


/**
 * Segmented select
 */
export default class SegmentRadio extends React.Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        publicSet: PropTypes.bool,
        onChange: PropTypes.func,
        segments: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                value: PropTypes.string,
                name: PropTypes.string,
            }),
        ).isRequired,
    };

    static defaultProps = {
        onChange: () => ({}),
        publicSet: false,
    };

    constructor(props) {
        super(props);

        this.state = {
            selectedValue: props.value,
            publicSet: props.publicSet,
        };
    }

    onChangeValue = (e) => {
        const { onChange } = this.props;

        if (e.target.checked) {
            this.setState({ selectedValue: e.target.value });
            onChange({ value: e.target.value, name: e.target.name, e });
        }
    };

    componentWillReceiveProps(nextProps) {
        const { publicSet, selectedValue } = this.state;
        if (publicSet) {
            // если контрол в режиме внешнего управления - оно в приоритете
            // предполагается, что параметр будет меняться в state родителя по onChange
            if ( nextProps.value !== selectedValue ) {
                this.setState({ selectedValue: nextProps.value });
            }
        }
    }

    render() {
        const { selectedValue } = this.state;
        const { segments } = this.props;

        return (
            <div className="p-font-normal p-segment-radio">
                {segments.map((segment, i) => {
                    const { name, id, ...otherProps } = segment;
                    const inputValue = segment.value;
                    return (
                        <label htmlFor={id || i} key={id || i} className={selectedValue === inputValue ? 'p-segment-label-active' : ''}>
                            {segment.title}
                            <input
                                type="radio"
                                id={id || i}
                                name={name}
                                value={inputValue}
                                checked={selectedValue === inputValue}
                                onChange={this.onChangeValue}
                                {...otherProps}
                            />
                        </label>
                    );
                })}
            </div>
        );
    }
}
