import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useEditor from '../../hooks/useEditor';

const Dashbord = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [editor] = useEditor(user);
    return (
        <div className="drawer drawer-mobile bg-base-300">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    
                        <li><Link to="/dashboard/user">USER</Link></li>
                        <li><Link to="/dashboard/addProduct">ADD PRODUCT</Link></li>
                        { admin | editor && <>
                        <li><Link to="/dashboard/manages">MANAGE</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;