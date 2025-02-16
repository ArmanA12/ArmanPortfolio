import React from 'react'
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeContext';


function Header() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className='header'>
            <div className='header-container'>
                <div style={{fontSize:"28px"}}>🤠 Arman Shekh</div>
                <div className='themeToggleButton' onClick={toggleTheme} >
                    {theme === 'light' ? <Moon enableBackground={"#0000"} size={18} strokeWidth={1} /> : <Sun size={18} strokeWidth={1} />}
                </div>
            </div>
        </div>
    )
}

export default Header