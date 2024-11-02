import React, { useState } from 'react';
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";

const SocialSidebar = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const toggleSidebar = () => {
        setIsVisible(!isVisible);
    };
    
    return (
        <>
            {/* Toggle button - with gradient */}
            <div className={`fixed top-1/3 left-5 z-50 ${isVisible ? 'hidden' : 'block'}`}>
                <button 
                    className="p-3 bg-black text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg w-full h-full flex items-center justify-center cursor-pointer"
                    onClick={toggleSidebar}
                    aria-label="Open sidebar"
                >
                    <GoSidebarCollapse className="text-2xl" />
                </button>
            </div>
            
            {/* Sidebar - with gradient background */}
            <aside className={`fixed top-1/4 left-0 h-3/4 w-52 bg-gradient-to-b from-purple-600/90 to-blue-600/90 backdrop-blur-sm text-white p-5 shadow-lg transition-transform duration-300 ease-in-out z-40 rounded-r-xl ${
                isVisible ? 'translate-x-0' : '-translate-x-full'
            }`}>
                {/* Close button container */}
                <div className="w-full mb-5">
                    <button 
                        className="w-full p-2 bg-black text-white rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                        onClick={toggleSidebar}
                        aria-label="Close sidebar"
                    >
                        <GoSidebarExpand className="text-2xl mx-auto" />
                    </button>
                </div>
                
                <h2 className="text-2xl font-bold text-center text-white mb-5">Reach Out</h2>
                
                <nav>
                    <ul className="space-y-3 font-semibold">
                        <li>
                            <a 
                                href="https://x.com/KageAy31039" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                            >
                                <RiTwitterXLine className="mr-3 text-xl" /> X
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.instagram.com/aryan._.ftw/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                            >
                                <SiInstagram className="mr-3 text-xl" /> Instagram
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.linkedin.com/in/aryan-parmar-90b10a324/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                            >
                                <SiLinkedin className="mr-3 text-xl" /> LinkedIn
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://github.com/Aryanftw" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                            >
                                <SiGithub className="mr-3 text-xl" /> Github
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://github.com/Aryanftw/portfolio" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                            >
                                <SiGithub className="mr-3 text-xl" /> Source Code
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default SocialSidebar;