import React from 'react';
import PropTypes from 'prop-types';

const BlockTitle = (props) => {
    const { title, hint } = props;

    return (
        <div className="p-block-title">
            <p className="p-title">{title}</p>
            {Boolean(hint) && (<p className="p-hint">{hint}</p>)}
        </div>
    );
};

BlockTitle.propTypes = {
    title: PropTypes.string.isRequired,
    hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

BlockTitle.defaultProps = {
    hint: '',
};

export default BlockTitle;
