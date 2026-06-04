import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyButton({ children, to, onClick, className = '', type = 'button', ...rest }) {
    const navigate = useNavigate();
    const handleClick = (event) => {
        if (onClick) {
            onClick(event);
        }

        if (to && !event.defaultPrevented) {
            navigate(to);
        }
    };

    return (
        <button
            type={type}
            className={`my-button ${className}`.trim()}
            onClick={handleClick}
            {...rest}
        >
            {children}
        </button>
    );
}