// import React from 'react';
// import { FaTwitter, FaLinkedin } from 'react-icons/fa';

// const Footer = () => {
//     return (
//         <footer className="py-16 md:py-24">
//             <div className="container mx-auto px-4 md:pr-24 md:pl-4">
//                 <div className="flex flex-wrap justify-between">
//                     {/* Left Section */}
//                     <div className="w-full md:w-1/3 mb-8 md:mb-0">
//                         <div className="flex items-center mb-4">
//                             <a href="/">
//                                 <img src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638e06a715ec69b0876d826e_Logo.svg" alt="Beautiful Brain" className="h-16 md:h-20 mr-4" />
//                             </a>
//                         </div>
//                         <p className="text-lg">Beautiful Brain is the platform to help humans live their best selves.</p>
//                     </div>


//                     {/* Center Section - Footer Links */}
//                     <div className="w-full md:w-1/6">
//                         <ul className="text-sm md:text-base">
//                             <li className="mb-3 md:mb-4">
//                                 <a href="/" className="text-black hover:text-blue-500 text-2xl font-semibold">HOME</a>
//                             </li>
//                             <li className="mb-3 md:mb-4">
//                                 <a href="/about" className="text-black hover:text-blue-500 text-2xl font-semibold">ABOUT</a>
//                             </li>
//                             <li className="mb-3 md:mb-4">
//                                 <a href="/building" className="text-black hover:text-blue-500 text-2xl font-semibold">BUILDING</a>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Right Section - Footer Links */}
//                     <div className="w-full md:w-1/6">
//                         <ul className="text-sm md:text-base">
//                             <li className="mb-3 md:mb-4">
//                                 <a href="/learning" className="text-black hover:text-blue-500 text-2xl font-semibold">LEARNING</a>
//                             </li>
//                             <li className="mb-3 md:mb-4">
//                                 <a href="/coaching" className="text-black hover:text-blue-500 text-2xl font-semibold">COACHING</a>
//                             </li>
//                             <li className="mb-3 md:mb-4">
//                                 <a href="/advising" className="text-black hover:text-blue-500 text-2xl font-semibold">ADVISING</a>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Contact Section */}
//                     <div className="w-full md:w-1/4">
//                         <div className="flex items-center mb-4">
//                             <p className="text-sm md:text-base mr-4">Follow me at</p>
//                             <div className="flex space-x-4">
//                                 <a href="https://mobile.twitter.com/zemigsan">
//                                     <FaTwitter size={24} className="text-blue-500 hover:text-blue-700" />
//                                 </a>
//                                 <a href="https://www.linkedin.com/in/josemiguelsantos/">
//                                     <FaLinkedin size={24} className="text-blue-500 hover:text-blue-700" />
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="text-sm md:text-base">
//                             <p className="mb-2">© 2022 Beautifulbrain LLC</p>
//                             <p>All Rights Reserved</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;


import React from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:pr-24 md:pl-4">
                <div className="flex flex-wrap justify-between">
                    {/* Left Section */}
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <div className="flex items-center mb-4">
                            <a href="/">
                                <img src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638e06a715ec69b0876d826e_Logo.svg" alt="Beautiful Brain" className="h-16 md:h-20 mr-4" />
                            </a>
                        </div>
                        <p className="text-lg">Beautiful Brain is the platform to help humans live their best selves.</p>
                    </div>

                    {/* Center Section - Footer Links */}
                    <div className="w-full md:w-1/3 mb-8 md:mb-0 flex flex-wrap">
                        <div className="w-1/2">
                            <ul className="text-sm md:text-base">
                                <li className="mb-3 md:mb-4">
                                    <a href="/" className="text-black hover:text-blue-500 text-2xl font-semibold">HOME</a>
                                </li>
                                <li className="mb-3 md:mb-4">
                                    <a href="/about" className="text-black hover:text-blue-500 text-2xl font-semibold">ABOUT</a>
                                </li>
                                <li className="mb-3 md:mb-4">
                                    <a href="/building" className="text-black hover:text-blue-500 text-2xl font-semibold">BUILDING</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2">
                            <ul className="text-sm md:text-base">
                                <li className="mb-3 md:mb-4">
                                    <a href="/learning" className="text-black hover:text-blue-500 text-2xl font-semibold">LEARNING</a>
                                </li>
                                <li className="mb-3 md:mb-4">
                                    <a href="/coaching" className="text-black hover:text-blue-500 text-2xl font-semibold">COACHING</a>
                                </li>
                                <li className="mb-3 md:mb-4">
                                    <a href="/advising" className="text-black hover:text-blue-500 text-2xl font-semibold">ADVISING</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="w-full md:w-1/4">
                        <div className="flex items-center mb-4">
                            <p className="text-sm md:text-base mr-4">Follow me at</p>
                            <div className="flex space-x-4">
                                <a href="https://mobile.twitter.com/zemigsan">
                                    <FaTwitter size={24} className="text-blue-500 hover:text-blue-700" />
                                </a>
                                <a href="https://www.linkedin.com/in/josemiguelsantos/">
                                    <FaLinkedin size={24} className="text-blue-500 hover:text-blue-700" />
                                </a>
                            </div>
                        </div>
                        <div className="text-sm md:text-base">
                            <p className="mb-2">© 2022 Beautifulbrain LLC</p>
                            <p>All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
