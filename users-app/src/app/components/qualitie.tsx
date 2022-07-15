import React from "react";

interface Props {
    color: string,
    name: string,
}

const Qualitie = ({ color, name }: Props) => {
    return (
        <span className={"badge m-1 bg-" + color}>
            {name}
        </span>
    );
};

export default Qualitie;
