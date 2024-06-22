import React, { useEffect } from 'react';
import { Rnd } from "react-rnd";


const Modal = ({ isOpen, onClose, children, title }) => {
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};

		// Add event listener when modal is open
		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown);
		}

		// Remove event listener when modal is closed or component unmounts
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose]);
	return (
		<>
			{isOpen ? (
				
        <div className={`pop-up-program-window`}>
				<div className="toolbar-buttons">
        <button className="toolbar-button program-close" onClick={onClose}/>
        </div>
        <div className="window-toolbar">
            <div className="window-title">{title}</div>
        </div>
        <div className={`window-container`}>
        <div className={`program-window-content`}>
            {children}
        </div>

        </div>
        </div>
				
			) : null}
		</>
	);
};

export default Modal;
