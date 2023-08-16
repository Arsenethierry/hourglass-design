import React, { ReactNode } from 'react';
import useClickOutside from '../../hooks/use-click-outside';
import { MenuProps } from './types';

type DrawerProps = {
    isOpen: boolean,
    children: ReactNode
}

function Drawer({
    isOpen,
    children
}: DrawerProps) {
    const drawerRef = React.useRef(null);


    return (
        <div>
            <div
                ref={drawerRef}
                className={`fixed top-0 left-0 w-64 h-screen py-5 bg-white shadow-2xl transform transition-all ease-in-out duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {children}
            </div>
        </div>
    );
}

export default Drawer;