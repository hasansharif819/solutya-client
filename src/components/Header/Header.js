import React from 'react';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import logo from '../../image/logo.png';
 
const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }
    const menu = <>
        <li><Link to='/'>PRODUCTS</Link></li>
        <li><Link to='/dashboard'>DASHBORD</Link></li>
        {!user && <li><Link to="/login">LOGIN</Link></li>}
        {!user && <li><Link to="/signup">SIGNUP</Link></li>}

    </>
    return (
        <div>
            <div className='navbar font-bold text-black  bg-slate-400' id='navHeader'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <label tabIndex='0' className='btn btn-ghost lg:hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-start menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    
                    <Link to='/' className='text-2xl'>
                    <img height={60} width={200} src={logo} alt=""  className='rounded mr-3 bg-slate-400'/>
                    </Link>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>

                <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

                <div className="navbar-end">
                {user && 
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {user ?
                                     user.photoURL ? <img height={30} width={30} className='rounded-full' src={user?.photoURL} alt="" /> : <div className="avatar online placeholder">
                                       <img height={30} width={30} className='rounded-full' src="https://i.ibb.co/48vFpdg/avatar.png" alt="" />
                                     </div>
                                    : <Link to='/login'>Sign</Link>}
                                </div>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-white">
                                <li>
                                    <button className='btn bg-gray-400'>
                                        <h2>
                                            {user?.displayName ? user.displayName : 'User name'}
                                            </h2>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn bg-gray-400 text-white' onClick={logout}>Logout</button>
                                </li>

                            </ul>
                        </div>
                    </div>
                }
</div>
            </div>
        </div>
    );
};

export default Header;
