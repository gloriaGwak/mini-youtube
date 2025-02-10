import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useDarkMode } from '../context/DarkModeContext';
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";

export default function Footer() {
    const {darkMode, toggleDarkMode} = useDarkMode();
    
    return (
        <>
            <button 
                className='fixed bottom-4 right-4 w-10 h-10 rounded-full text-white bg-gray-900 dark:text-black dark:bg-gray-100'
                onClick={toggleDarkMode}
            >
                {!darkMode && <AiOutlineMoon className="mx-auto w-[60%] h-[60%]" />}
                {darkMode && <AiOutlineSun className="mx-auto w-[60%] h-[60%]" />}
            </button>
            <footer className="border-t border-zinc-600 text-md">
                <div className="inner w-full py-3 lg:py-4 gap-1.5">
                    <div className="social-icons flex justify-start gap-2 mb-2">
                        <Link to="https://github.com/gloriaGwak" target="_blank" title='Go to new window' aria-label="Gloria`s GitHub">
                            <FaGithub className="w-6 h-6" />
                            <span className='blind'>Gloria's GitHub</span>
                        </Link>
                        <Link to="https://www.linkedin.com/in/gloria-gwak-803667236" target="_blank" title='Go to new window' aria-label="Gloria`s LinkedIn">
                            <FaLinkedin alt="Gloria's LinkedIn" className="w-6 h-6" />
                            <span className='blind'>Gloria's LinkedIn</span>
                        </Link>
                    </div>
                    <p>Designed and developed by Gloria Gwak | Powered by YouTube API</p>
                    <p>© Gloria Gwak. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}

