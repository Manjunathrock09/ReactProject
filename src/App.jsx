import React from "react";
import { Layout } from "antd";
import Header from "./components/Header";  
import Hero from "./components/Hero"; 
import Features from "./components/Features";
import WhyWorkhub from "./components/WhyWorkhub";
import Footer from "./components/Footer";
import ClientReview from "./components/ClientReview";

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header />
      <Content style={{ marginTop: "64px", padding: "20px" }}>
        <Hero /> 
        <Features />
        <WhyWorkhub />
        <ClientReview/>
      </Content>
      <Footer />
    </Layout>
  );
};

export default App;
