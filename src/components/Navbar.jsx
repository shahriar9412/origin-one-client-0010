
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthContext";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() => console.log('user logged out successfully'))
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/items">All Items</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        { user && <>
            <li><NavLink to="/additem">Add Item</NavLink></li>
            <li><NavLink to="/mylist">My List</NavLink></li>
        </>}
    </>

    return (
        <div className="navbar bg-base-100 my-5 pl-5 pr-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-purple-950 font-extrabold text-3xl">RX Estates</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="flex">
                            <h1><img className="h-10 w-10 rounded-full mr-2" src={user.photoURL} alt="DP" /></h1>
                        <button className="btn hover:text-black text-white bg-purple-950" onClick={handleLogOut}>Log Out</button>
                        </div>
                    </>
                    : <Link to="/login">
                        <button className="btn hover:text-black text-white bg-purple-950">Log In</button>
                    </Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;