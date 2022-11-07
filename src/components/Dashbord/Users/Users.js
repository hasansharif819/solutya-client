import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import User from './User';

const Users = () => {
    
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('https://sleepy-hamlet-35110.herokuapp.com/user')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [users])
    return (
        <div>
            <h2 className="text-2xl">All Users: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>INDEX</th>
                            <th>EMAIL</th>
                            <th>MAKE ADMIN</th>
                            <th>MAKE EDITOR</th>
                            <th>REMOVE USER</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users?.map((user, index)=><User
                           key={user._id}
                           user={user}
                           index={index}
                           ></User>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;