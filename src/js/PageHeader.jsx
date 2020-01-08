import React from 'react';
import PropTypes from 'prop-types';

import Spinner from './Spinner';

import ArrowBack from '../img/arrow-back.svg';


const PageHeader = (props) => {
    const {
        title, backUrl, loading, quantity, pages, onBackClick,
    } = props;

    return (
        <div className="p-page-header p-font-normal">
            {Boolean(backUrl) && (
                <a href={backUrl} onClick={onBackClick} className="btn-back">
                    <img src={ArrowBack} alt="Back" />
                </a>
            )}

            <h2 className="p-ib">
                {title}
                <span className="quantity">{loading ? <Spinner small /> : quantity}</span>
            </h2>

            <ul className="page-tabs">
                {pages.map(page => (
                    <li key={page.url + page.name} className={` ${page.active ? 'active' : ''}`}>
                        <a href={page.url}>{page.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number,

    backUrl: PropTypes.string,
    onBackClick: PropTypes.func,

    loading: PropTypes.bool,
    pages: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        active: PropTypes.bool,
        name: PropTypes.string,
    })),

};

PageHeader.defaultProps = {
    backUrl: '',
    onBackClick: () => {},

    loading: false,
    pages: [],
    quantity: null,
};

export default PageHeader;
