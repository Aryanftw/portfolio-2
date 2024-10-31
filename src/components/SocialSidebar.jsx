// SocialSidebar.js
import React, { useState } from 'react';
import './SocialSidebar.css'; // Ensure you have this CSS file

const SocialSidebar = () => {
    const [isVisible, setIsVisible] = useState(false); // State to manage visibility

    const toggleSidebar = () => {
        setIsVisible(!isVisible); // Toggle visibility
    };

    return (
        <div>
            {!isVisible && (
                <button className="toggle-button" onClick={toggleSidebar}>
                    Show Sidebar
                </button>
            )}
            {isVisible && (
                <div className="sidebar font-custom text-xl">
                    <button className="close-button" onClick={toggleSidebar}>
                        Hide Sidebar
                    </button>
                    <h2>Reach Out</h2>
                    <ul>
                        
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                 Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                 Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                 LinkedIn
                            </a>
                        </li>
                        
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SocialSidebar;
