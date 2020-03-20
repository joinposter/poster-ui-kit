/** @module */


import React from 'react';
import PropTypes from 'prop-types';


/**
 * Segmented select
 */
export default class SegmentRadio extends React.Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
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
        disabled: false,
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

    componentWillReceiveProps(nextProps) {
        const { publicSet, selectedValue } = this.state;

        if (publicSet) {
            // если контрол в режиме внешнего управления - оно в приоритете
            // предполагается, что параметр будет меняться в state родителя по onChange
            // в случае внешней инициативы - onChange не запускается
            if (nextProps.value !== selectedValue) {
                this.setState({ selectedValue: nextProps.value });
            }
        }
    }

    onChangeValue = (e) => {
        const { onChange } = this.props;

        if (e.target.checked) {
            this.setState({ selectedValue: e.target.value });
            onChange({ value: e.target.value, name: e.target.name, e });
        }
    };

    render() {
        const { selectedValue } = this.state;
        const { segments } = this.props;

        const disabledControl = this.props.disabled
            // если все сегменты disabled - контрол тоже disabled
            || segments.every(s => s.disabled);

        return (
            <div className={`p-font-normal p-segment-radio ${disabledControl ? 'p-segment-radio-disabled' : ''}`}>
                {segments.map((segment, i) => {
                    const { name, id, disabled, ...otherProps } = segment;
                    const inputValue = segment.value;

                    // если контрол disabled, выключаем все его опции
                    const disabledSegment = disabled || disabledControl;
                    const selectedSegment = selectedValue === inputValue;

                    // собираем css-class сегмента
                    let segmentClass = 'p-segment-label ';
                    segmentClass += selectedSegment ? 'p-segment-label-active ' : '';
                    segmentClass += disabledSegment ? 'p-segment-label-disabled ' : '';

                    return (
                        <label htmlFor={`${id || i}${name}`} key={`${id || i}${name}`} className={segmentClass}>
                            {segment.title}
                            <input
                                type="radio"
                                id={`${id || i}${name}`}
                                key={`${id || i}${name}`}
                                name={name}
                                value={inputValue}
                                disabled={disabledSegment}
                                checked={selectedSegment}
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
