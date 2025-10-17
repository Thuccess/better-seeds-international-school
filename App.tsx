import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import CalendarPage from './pages/CalendarPage';
import CareersPage from './pages/CareersPage'; // New Page

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: -20,
    },
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
    >
        {children}
    </motion.div>
);

const AppRoutes: React.FC = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
                <Route path="/academics" element={<PageWrapper><AcademicsPage /></PageWrapper>} />
                <Route path="/admissions" element={<PageWrapper><AdmissionsPage /></PageWrapper>} />
                <Route path="/gallery" element={<PageWrapper><GalleryPage /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
                <Route path="/news" element={<PageWrapper><NewsPage /></PageWrapper>} />
                <Route path="/news/:postId" element={<PageWrapper><NewsDetailPage /></PageWrapper>} />
                <Route path="/calendar" element={<PageWrapper><CalendarPage /></PageWrapper>} />
                <Route path="/careers" element={<PageWrapper><CareersPage /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
};

const App: React.FC = () => {
    return (
        <HashRouter>
            <ScrollToTop />
            <Navbar />
            <main className="bg-gray-50/50"> {/* Removed pt-20 to allow pages to control their own top padding */}
                <AppRoutes />
            </main>
            <Footer />
            <ScrollToTopButton />
        </HashRouter>
    );
};

export default App;
