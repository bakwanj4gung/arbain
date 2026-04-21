import React from 'react';
import IconX from './IconX';

function Modal({ isOpen = false, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div 
            className="z-10 fixed inset-0 p-4 md:p-28 flex items-center justify-center backdrop-blur-sm bg-black/40 transition-opacity duration-300 ease-in-out" 
            onClick={onClose}
        >
            <div 
                onClick={(e) => e.stopPropagation()} 
                className="w-full max-w-2xl rounded-xl shadow-2xl py-4 bg-white"
            >
                <div className="flex items-center justify-between gap-8 border-b px-6 mb-4 pb-4">
                    <h2 className={`font-bold text-2xl ${title?.style || 'text-black'}`}>{title?.text}</h2>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded transition-colors"
                    >
                        <IconX size="size-5" />
                    </button>
                </div>
                <div className="px-6 text-xl overflow-auto max-h-[70vh]">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;