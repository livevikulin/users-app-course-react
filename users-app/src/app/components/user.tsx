import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

interface Props {
    _id: string,
    name: string,
    qualities: any,
    profession: any,
    completedMeetings: string,
    rate: string,
    onDelete: (param: any) => void,
    bookmark: boolean,
    onToggleBookMark: (param: any) => void,
}

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    bookmark,
    onToggleBookMark,
}: Props) => {
    return (
        <tr>
            <td>{name}</td>
            <td>
                {qualities.map((qualitie: any) => (
                    <Qualitie key={qualitie._id} {...qualitie} />
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate} / 5</td>
            <td>
                <BookMark
                    status={bookmark}
                    onClick={() => onToggleBookMark(_id)}
                />
            </td>
            <td>
                <button
                    onClick={() => onDelete(_id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

export default User;
