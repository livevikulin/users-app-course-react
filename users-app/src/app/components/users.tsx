import React, { useState } from "react";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../../utils/paginate";

interface Props {
    users: any;
    onDelete: (param: string) => void;
    onToggleBookMark: (param: string) => void;
}

const Users = ({ users: allUsers, ...rest }: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const count = allUsers.length;
    const pageSize = 4;

    const handlePageChange = (pageIndex: number) => {
        setCurrentPage(pageIndex);
    };

    const users = paginate(allUsers, currentPage, pageSize);

    return (
        <>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Провфессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: any) => (
                            <User key={user._id} {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
            />
        </>
    );
};

export default Users;
