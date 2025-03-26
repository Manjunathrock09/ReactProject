import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"; 
import { Layout } from "antd";
import Header from "./components/Header";  
import Hero from "./components/Hero"; 
import Features from "./components/Features";
import WhyWorkhub from "./components/WhyWorkhub";
import Footer from "./components/Footer";
import ClientReview from "./components/ClientReview";
import OfficeSpace from "./pages/OfficeSpace";
import MeetingRooms from "./pages/MeetingRooms";
import CoworkingSpaces from "./pages/CoworkingSpaces";
import VirtualOffices from "./pages/VirtualOffices";
import EventSpaces from "./pages/EventSpaces";
import DedicatedDesks from "./pages/DedicatedDesks";
import CallService from "./pages/CallService";
import StorageSolutions from "./pages/StorageSolutions";
import BookingForm from "./pages/BookingForm";
import OurCompany from "./pages/OurCompany";
import PaymentPage from "./pages/payamentpage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import "bootstrap-icons/font/bootstrap-icons.css";
import ResultsPage from "./pages/ResultsPage"; 
import Payments from "./components/Payments";

const { Content } = Layout;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Placeholder authentication logic
  useEffect(() => {
    // Simulating authentication check (Replace with actual logic if needed)
    const user = localStorage.getItem("user"); // Example: Checking stored user
    setIsAuthenticated(!!user);
  }, []);

  return (
    <Layout>
      <Header isAuthenticated={isAuthenticated} />
      <Content style={{ marginTop: "64px", padding: "20px" }}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={
            <>
              <Hero /> 
              <Features />
              <WhyWorkhub />
              <ClientReview />
            </>
          } />
          <Route path="/office-space" element={<OfficeSpace />} />
          <Route path="/meeting-rooms" element={<MeetingRooms />} />
          <Route path="/coworking-spaces" element={<CoworkingSpaces />} />
          <Route path="/virtual-offices" element={<VirtualOffices />} />
          <Route path="/event-spaces" element={<EventSpaces />} />
          <Route path="/dedicated-desks" element={<DedicatedDesks />} />
          <Route path="/call-service" element={<CallService />} />
          <Route path="/storage-solutions" element={<StorageSolutions />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/our-company" element={<OurCompany />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="payments" element={<Payments />} />

          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
      <Footer />
    </Layout>
  );
};

export default App;
