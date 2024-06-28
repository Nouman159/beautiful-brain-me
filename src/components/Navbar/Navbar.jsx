import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img
                        src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638e06a715ec69b0876d826e_Logo.svg"
                        alt="Logo"
                        className="h-8"
                    />
                </Link>
                <input type="checkbox" id="check" className="hidden" />
                <ul
                    className={`${navOpen ? 'block' : 'hidden'
                        } lg:flex lg:items-center lg:space-x-8`}
                >

                    <li><Link to="/about" className="text-black hover:text-blue-500 uppercase">About</Link></li>
                    <li><Link to="/building" className="text-black hover:text-blue-500 uppercase">Building</Link></li>
                    <li><Link to="/learning" className="text-black hover:text-blue-500 uppercase">Learning</Link></li>
                    <li><Link to="/coaching" className="text-black hover:text-blue-500 uppercase">Coaching</Link></li>
                    <li><Link to="/advising" className="text-black hover:text-blue-500 uppercase">Advising</Link></li>
                </ul>
                <div className="lg:hidden">
                    <button onClick={() => setNavOpen(!navOpen)} className="text-black text-2xl">
                        {navOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
