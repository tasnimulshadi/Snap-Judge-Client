import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                toast.success('User Logged Out Successfully');
            }).catch((error) => {
                toast.error(error.message);
            });
    }

    //menu li variable
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        {
            !user
                ?
                <li><Link to='/login'>Login</Link></li>
                :
                <>
                    <li><Link to='/myreviews'>My Reviews</Link></li>
                    <li><Link to='/service/add'>Add Service</Link></li>
                </>
        }
        <li><Link to='/blog'>Blog</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 container mx-auto max-w-7xl m-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img className='w-36' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user
                    &&
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL ? user.photoURL : "https://mspgh.unimelb.edu.au/__data/assets/image/0011/3576098/Placeholder.jpg"} alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;