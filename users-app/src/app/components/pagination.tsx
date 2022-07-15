import React from "react";
import _ from "lodash";

interface Props {
    itemsCount: number;
    pageSize: number;
    onPageChange: (page: number) => void;
    currentPage: number;
}

const Pagination = ({
    itemsCount,
    pageSize,
    onPageChange,
    currentPage
}: Props) => {
    const pageCount = Math.ceil(itemsCount / pageSize);

    if (pageCount === 1) return null;

    const pages = _.range(1, pageCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page: number) => (
                    <li
                        key={page}
                        className={`page-item ${
                            page === currentPage ? "active" : ""
                        }`}
                    >
                        <a
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
