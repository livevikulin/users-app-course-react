import React from "react";

interface Props {
    status: boolean,
    onClick: any,
}

const BookMark = ({ status, ...rest }: Props) => {
    return (
        <button {...rest}>
            <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>
        </button>
    );
};

export default BookMark;
