import React from "react";

interface Props {
    status: boolean;
    onClick: any;
}

const BookMark = ({ status, ...rest }: Props) => {
    return (
        <button className="btn btn-outline-primary" {...rest}>
            <i className={`bi bi-bookmark-heart${status ? "-fill" : ""}`} />
        </button>
    );
};

export default BookMark;
