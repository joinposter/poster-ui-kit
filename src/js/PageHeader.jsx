import React from 'react';
import PropTypes from 'prop-types';

import Spinner from './Spinner';

import ArrowBack from '../img/arrow-back.svg';
import MenuIcon from '../img/menu-icon.svg';


const PageHeader = (props) => {
    const {
        title, backUrl, loading, quantity, pages, onBackClick, actionButton,
    } = props;

    const className = `p-page-header manage-page-header p-font-normal ${pages.length > 0 ? 'p-page-header-with-tabs' : ''}`;

    return (
        <div className={className}>

            {backUrl ? (
                <a href={backUrl} onClick={onBackClick} className="btn-back">
                    <img src={ArrowBack} alt="Back" />
                </a>
            ) : (
                <img className="mobile-side-menu-open" src={MenuIcon} alt="Menu" />
            )}

            <div className="p-page-header-title">
                <h2 className="p-ib">
                    {title}
                </h2>
                <span className="quantity">{loading ? <Spinner small /> : quantity}</span>
            </div>

            <ul className="page-tabs">
                {pages.map(page => (
                    <li onClick={page.onClick} key={page.url + page.name} className={` ${page.active ? 'active' : ''}`}>
                        <a href={page.url}>{page.name}</a>
                    </li>
                ))}
            </ul>

            {Boolean(actionButton) && (
                <div className="p-tabs-button">
                    {actionButton}
                </div>
            )}
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
    actionButton: PropTypes.instanceOf(Object),
};

PageHeader.defaultProps = {
    backUrl: '',
    onBackClick: () => {},

    loading: false,
    pages: [],
    quantity: null,
    actionButton: null,
};

export default PageHeader;
