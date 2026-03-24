import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import SoftwareGrid from './components/SoftwareGrid';
import Article from './components/Article';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import SiteBottomHalf from './components/SiteBottomHalf';
import Footer from './components/Footer';
import Dashboard from './Pages/Dashboard';
import ArticleDetail from './Pages/ArticleDetail'; 
import ScoreCardDetail from './Pages/ScoreCardDetail';
import ProjectManagementPage from './Pages/ProjectManagementPage';
import ScoreCardPage from './Pages/ScoreCardPage';
import CRMPage from './Pages/CRMPage';
import EmailMarketingPage from './Pages/EmailMarketingPage';
import AIAutomationPage from './Pages/AIAutomationPage';
import AboutUs from './Pages/AboutUs';
import ContactSupport from './Pages/ContactSupport';
import TermsOfService from './Pages/TermsOfService';

const LandingPage = ({ isModalOpen, setIsModalOpen, isLoginTab, setIsLoginTab }) => {
  // Helper function to trigger signup specifically
  const triggerSignup = () => {
    setIsLoginTab(false);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Hero 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} 
        isLoginTab={isLoginTab} 
        setIsLoginTab={setIsLoginTab} 
      />
      
      {/* Passing the trigger function to your other components */}
      <SoftwareGrid onAction={triggerSignup} />
      
      <Article onAction={triggerSignup} />
      <HowItWorks onAction={triggerSignup} />
      <Testimonials />
      <SiteBottomHalf onAction={triggerSignup} />
      <Footer />
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginTab, setIsLoginTab] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <LandingPage 
            isModalOpen={isModalOpen} 
            setIsModalOpen={setIsModalOpen} 
            isLoginTab={isLoginTab} 
            setIsLoginTab={setIsLoginTab} 
          />
        } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scorecard-detail" element={<ScoreCardDetail />} />
        <Route path="/project-management" element={<ProjectManagementPage />} />
        <Route path="/scorecard/:toolId" element={<ScoreCardPage />} />
        <Route path="/guides/crm" element={<CRMPage />} />
        <Route path="/guides/email-marketing" element={<EmailMarketingPage />} />
        <Route path="/guides/ai-automation" element={<AIAutomationPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-support" element={<ContactSupport />} />
        <Route path="/terms" element={<TermsOfService />} />
        
        <Route 
          path="/article/:id" 
          element={
            <ArticleDetail onAction={() => {
              setIsLoginTab(false); // Ensure it shows Signup
              setIsModalOpen(true);
            }} />
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;