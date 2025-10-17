// FIX: Import React to provide the 'React' namespace for React.FC
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
