import React, { useState } from 'react';
import './SocialSidebar.css'; 
import { SiInstagram } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";

const SocialSidebar = () => {
    const [isVisible, setIsVisible] = useState(false); 

    const toggleSidebar = () => {
        setIsVisible(!isVisible); 
    };

    return (
        <div>
            {!isVisible && (
                <button className="toggle-button text-xl " onClick={toggleSidebar}>
                    <GoSidebarCollapse className='text-2xl'/>
                </button>
            )}
            {isVisible && (
                <div className="sidebar font-damn text-xl">
                    <button className="close-button" onClick={toggleSidebar}>
                        <GoSidebarExpand className='text-2xl'/>
                    </button>
                    <h2 className='text-black font-bold text-2xl'>Reach Out</h2>
                    <ul className='font-semibold'>
                        
                        <li>
                            <a href="https://x.com/KageAy31039" target="_blank" rel="noopener noreferrer">
                                 <RiTwitterXLine className='mr-3'/> X
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/aryan._.ftw/" target="_blank" rel="noopener noreferrer">
                               <SiInstagram className='mr-3'/>  Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/aryan-parmar-90b10a324/" target="_blank" rel="noopener noreferrer">
                               <SiLinkedin className='mr-3'/>  LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Aryanftw" target="_blank" rel="noopener noreferrer">
                               <SiGithub className='mr-3'/>  Github
                            </a>
                        </li>
                        
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SocialSidebar;
