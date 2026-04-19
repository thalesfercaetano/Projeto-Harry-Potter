import { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, children, isOpen, setIsOpen, containerRef}) => {
    return (
        <div className="relative" ref={containerRef}>
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
                className="bg-amber-600 text-white px-4 py-2 rounded-2xl shadow-xl hover:scale-105 transition-transform min-w-[200px] flex justify-between items-center gap-2"
            >
                {label}
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 bg-slate-800 border border-amber-600 rounded-xl shadow-2xl z-10 min-w-[200px] overflow-hidden">
                    {children}
                </div>
            )};
        </div>
    );
};

export default Dropdown;