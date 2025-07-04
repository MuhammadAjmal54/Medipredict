

import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const navigate = useNavigate();
    const [ShowMenu, setShowMenu] = useState(false);
    const {token,setToken,userData} = useContext(AppContext)
    // const [token, settoken] = useState(true);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const logout = () =>{
        setToken(false)
        localStorage.removeItem('token')
    }

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5  bg-[#5F6FFF]  w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='doctors'>
                    <li className='py-1'>All Doctors</li>
                    <hr className='border-none outline-none h-0.5  bg-[#5F6FFF]  w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='about'>
                    <li className='py-1'>About</li>
                    <hr className='border-none outline-none h-0.5 bg-[#5F6FFF]  w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>Contact</li>
                    <hr className='border-none outline-none h-0.5  bg-[#5F6FFF]  w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token && userData
                        ? <div className='relative group'>
                            <div className='flex items-center gap-2 cursor-pointer' onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
                                <img className='w-8 rounded-full' src={userData.image} alt="" />
                                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                            </div>
                            <div className={`absolute top-full right-0 mt-2 text-base font-medium text-gray-600 z-20 bg-stone-100 rounded flex flex-col gap-4 p-4 min-w-48 ${showProfileDropdown ? 'block' : 'hidden'}`}>
                                <p onClick={() => { navigate('/my-profile'); setShowProfileDropdown(false); }} className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={() => { navigate('/my-appointments'); setShowProfileDropdown(false); }} className='hover:text-black cursor-pointer'>My Appointments</p>
                                <p onClick={() => { logout(); setShowProfileDropdown(false); }} className='hover:text-black  cursor-pointer'>Logout</p>
                            </div>
                        </div>
                        : <button onClick={() => navigate('/login')} className=' bg-[#5F6FFF]  text-white px-8 py-3 rounded-full font-light hidden md:block'>create account</button>
                }
                <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
                {/* mobile menu */}
                <div className={` ${ShowMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36' src={assets.logo} alt="" />
                        <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar