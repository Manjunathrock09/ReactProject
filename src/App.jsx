import React from "react";
import { Routes, Route } from "react-router-dom"; 
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
import "bootstrap-icons/font/bootstrap-icons.css";


const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header />
      <Content style={{ marginTop: "64px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<>
            <Hero /> 
            <Features />
            <WhyWorkhub />
            <ClientReview/>
          </>} />
          <Route path="/office-space" element={<OfficeSpace />} />
          <Route path="/meeting-rooms" element={<MeetingRooms />} />
          <Route path="/coworking-spaces" element={<CoworkingSpaces />} />
          <Route path="/virtual-offices" element={<VirtualOffices />} />
          <Route path="/event-spaces" element={<EventSpaces />} />
          <Route path="/dedicated-desks" element={<DedicatedDesks />} />
          <Route path="/call-service" element={<CallService />} />
          <Route path="/storage-solutions" element={<StorageSolutions />} />
        </Routes>
      </Content>
      <Footer />
    </Layout>
  );
};

export default App;
