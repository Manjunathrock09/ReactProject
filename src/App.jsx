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
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import "bootstrap-icons/font/bootstrap-icons.css";

const { Content } = Layout;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
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
              <ClientReview/>
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
