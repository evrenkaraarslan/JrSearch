import React, { useEffect, useState } from "react";
import './Pagination.scss';

const Pagination = ({ data, Component, title, pageLimit, dataLimit }) => {

    const [pages] = useState(Math.ceil(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo({ top: '0px', behavior: 'smooth' });
    }, [currentPage]);

    const changePage = (event) => {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, index) => start + index + 1);
    };

    return (
        <div>
            <h3>{title}</h3>
            <div>
                {getPaginatedData().map((result, index) => (
                    <Component key={index} results={result} />
                ))}
            </div>

            <div className="pagination">

                {getPaginationGroup().map((item, index) => (
                    item <= Math.ceil(data.length / dataLimit) && <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : ''}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}

            </div>
        </div>
    );
}

export default Pagination;