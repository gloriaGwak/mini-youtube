import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-600 text-md">
            <div className="inner w-full py-3 lg:py-4 gap-1.5">
                <div className="social-icons flex justify-start gap-2 mb-2">
                    <a href="https://github.com/gloriaGwak" target="_blank" aria-label="Gloria`s GitHub">
                        <FaGithub alt="Gloria`s GitHub" className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/gloria-gwak-803667236" target="_blank" aria-label="Gloria`s LinkedIn">
                        <FaLinkedin alt="Gloria`s LinkedIn" className="w-6 h-6" />
                    </a>
                </div>
                <p>Designed and developed by Gloria Gwak | Powered by YouTube API</p>
                <p>© 2024 Gloria Gwak. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

