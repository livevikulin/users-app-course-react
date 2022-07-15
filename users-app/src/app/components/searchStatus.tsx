import React from "react";

interface Props {
    length: number;
}

const SearchStatus = ({ length }: Props) => {
    const renderPhrase = (number: number) => {
        const lastOne = Number(number.toString().slice(-1));

        if (number > 4 && number < 15) {
            return "Пользователей придут";
        }
        if (lastOne === 1) return "Пользователь придет";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "Пользователя придут";

        return "Пользователей придут";
    };
    return (
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
            >
                {length > 0
                    ? `${length + " " + renderPhrase(length)} сегодня`
                    : "Никто сегодня не придет"}
            </span>
        </h2>
    );
};

export default SearchStatus;
