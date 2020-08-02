import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Spinner from './Spinner';

import ArrowBack from '../img/arrow-back.svg';


const PageHeader = (props) => {
    const {
        title, backUrl, loading, quantity, pages, onBackClick,
    } = props;

    return (
        <div className={classNames('p-page-header', 'p-font-normal', { 'p-page-header-with-tabs': pages.length > 0 })}>
            {Boolean(backUrl) && (
                <a href={backUrl} onClick={onBackClick} className="btn-back">
                    <img src={ArrowBack} alt="Back" />
                </a>
            )}

            <div className="p-page-header-title">
                <h2 className="p-ib">
                    {title}
                </h2>
                <span className="quantity">{loading ? <Spinner small /> : quantity}</span>
            </div>

            <ul className="page-tabs">
                {pages.map(page => (
                    <li key={page.url + page.name} className={` ${page.active ? 'active' : ''}`}>
                        <a onClick={page.onClick} href={page.url}>{page.name}</a>
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
        onClick: PropTypes.func,
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
