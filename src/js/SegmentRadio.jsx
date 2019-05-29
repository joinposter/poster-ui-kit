import React from 'react';
import PropTypes from 'prop-types';


export default class SegmentRadio extends React.Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
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
    };

    constructor(props) {
        super(props);

        this.state = {
            selectedValue: props.value,
        };
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

        return (
            <div className="p-font-normal p-segment-radio">
                {segments.map((segment, i) => {
                    const {
                        name, id, value, ...otherProps
                    } = segment;

                    return (
                        <label htmlFor={id || i} key={id || i} className={selectedValue === value ? 'p-segment-label-active' : ''}>
                            {segment.title}
                            <input
                                type="radio"
                                id={id || i}
                                name={name}
                                value={value}
                                checked={selectedValue === value}
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
