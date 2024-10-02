// import React from 'react'

// function Navbar() {
//   return (
//     <nav className='h-14 w-full bg-indigo-400 flex justify-between px-4 md:px-4 items-center'>
//         <div className='text-2xl font-bold text-black font-serif'>HN Skill</div>

//         <ul className='md:flex hidden font-semibold'>
//             <li className='mx-3 cursor-pointer hover:border-b-2 hover:border-black'>Home</li>
//             <li className='mx-3 cursor-pointer hover:border-b-2 hover:border-black'>About Us</li>
//             <li className='mx-3 cursor-pointer hover:border-b-2 hover:border-black'>Contact Us</li>
//         </ul>

//         <div className='hidden md:block bg-indigo-700 p-2 text-white rounded font-bold cursor-pointer'>Login/SignUp</div>

//         <div className='md:hidden'>
//             <a href="#" className='text-3xl'>&#8801;</a>
//         </div>
//     </nav>
//   )
// }

// export default Navbar



import React, { useState } from 'react';

const Navbar = () => {
    // Step 1: Use state to track whether the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle menu open/close state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='h-14 w-full bg-indigo-400 flex justify-between px-4 md:px-4 items-center fixed'>
            <div className='text-2xl font-bold text-black font-serif'>HN Skill</div>

            {/* Desktop Menu */}
            <ul className='md:flex hidden font-semibold'>
                <li className='mx-3 cursor-pointer hover:border-b-2 hover:border-black'>Home</li>
                <li className='mx-3 cursor-pointer hover:border-b-2 hover:border-black'>About Us</li>
                <li className='mx-3 cursor-pointer hover:border-b-2 hover:border-black'>Contact Us</li>
            </ul>

            <div className='hidden md:block bg-indigo-700 p-2 text-white rounded font-bold cursor-pointer hover:bg-white border-2 border-indigo-700 hover:text-indigo-700'>
                Login/SignUp
            </div>

            {/* Hamburger Menu Icon */}
            <div className='md:hidden'>
                <a href="#" className='text-3xl' onClick={toggleMenu}>
                    &#8801;
                </a>
            </div>

            {/* Mobile Menu - Conditionally rendered */}
            {isMenuOpen && (
                <ul className='absolute top-14 left-0 w-full bg-indigo-400 text-white flex flex-col items-center font-semibold md:hidden'>
                    <li className='p-2 cursor-pointer hover:bg-indigo-500 w-full text-center'>Home</li>
                    <li className='p-2 cursor-pointer hover:bg-indigo-500 w-full text-center'>About Us</li>
                    <li className='p-2 cursor-pointer hover:bg-indigo-500 w-full text-center'>Contact Us</li>
                    <li className='p-2 cursor-pointer bg-indigo-700 w-full text-center'>Login/SignUp</li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
