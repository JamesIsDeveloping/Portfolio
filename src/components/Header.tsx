import React from 'react';
import DarkModeButton from './DarkMode';

const Header: React.FC = () => {
    return (
        <div id="top" className="w-full px-12 2xl:px-44 py-10 flex flex-row justify-between items-center">
            <DarkModeButton />
            <a
                href="mailto:james@satherley.org?subject=Resume Request"
                className="text-primary dark:text-dark-primary border border-primary dark:border-dark-secondary px-4 py-2 rounded-lg text-lg"
            >
                Resume
            </a>
        </div>
    );
};

export default Header;
