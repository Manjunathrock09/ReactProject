import React from "react";
import { Typography, Avatar } from "antd";
import { UserOutlined, BankOutlined, StarOutlined, SolutionOutlined, RocketOutlined, GlobalOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const OurCompany = () => {
  return (
    <div style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto", fontFamily: "'Poppins', sans-serif" }}>
      
      {/* Company Intro Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "50px", marginBottom: "80px" }}>
        
        {/* Left Side - Text Content */}
        <div style={{ flex: 1 }}>
          <Title level={5} style={{ color: "#D76E5A", textTransform: "uppercase", letterSpacing: "2px" }}>WORKHUB</Title>
          <Title level={2} style={{ fontWeight: "bold", fontSize: "36px" }}>Our Company Intro</Title>
          <Paragraph style={{ fontSize: "18px", color: "#555", lineHeight: "1.8" }}>
            Workhub provides flexible serviced office space, meeting room rental, virtual office plans,
            and a range of other business services for individuals and SMEs within Ireland and abroad.
          </Paragraph>
        </div>

        {/* Right Side - Image */}
        <div style={{ flex: 1 }}>
          <img 
            src="/images/ourcompany.jpg" 
            alt="Workhub Team Meeting" 
            style={{ width: "100%", borderRadius: "12px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }} 
          />
        </div>
      </div>

      {/* Expert Business Advisors Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "50px", marginBottom: "80px" }}>
        
        {/* Left Side - Image */}
        <div style={{ flex: 1 }}>
          <img 
            src="/images/business-advisors.jpg" 
            alt="Business Advisors" 
            style={{ width: "100%", borderRadius: "12px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }} 
          />
        </div>

        {/* Right Side - Text Content */}
        <div style={{ flex: 1 }}>
          <Title level={2} style={{ fontWeight: "bold", fontSize: "36px" }}>Expert Business Advisors</Title>
          <Paragraph style={{ fontSize: "18px", fontWeight: "bold", color: "#333", lineHeight: "1.8" }}>
            We are a team of dedicated business advisors with a wealth of experience setting up and 
            operating businesses. We are always on hand to help, whilst staying behind the scenes, 
            allowing clients to dedicate their full attention to running a successful business.
          </Paragraph>
        </div>
      </div>

      {/* Testimonial Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "50px", background: "#F8F8F8", padding: "50px", borderRadius: "12px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", marginBottom: "80px" }}>
        
        {/* Left Side - Testimonial Content */}
        <div style={{ flex: 1 }}>
          <Paragraph style={{ fontSize: "20px", fontStyle: "italic", color: "#333", lineHeight: "1.8" }}>
            "I am very happy with the office space and the service we receive from the Workhub team. 
            Any and all problems, which are few in number, are quickly and fully resolved in a friendly 
            and efficient manner. We have no hesitation in recommending Workhub to our own clients."
          </Paragraph>

          {/* User Info */}
          <div style={{ display: "flex", alignItems: "center", marginTop: "25px" }}>
            <Avatar size={60} icon={<UserOutlined />} style={{ backgroundColor: "#D76E5A", marginRight: "20px" }} />
            <div>
              <Title level={5} style={{ margin: 0, fontSize: "18px" }}>Andrew Gorby, Managing Director</Title>
              <Paragraph style={{ fontWeight: "bold", color: "#D76E5A", margin: 0, fontSize: "16px" }}>IRIS Analytics</Paragraph>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div style={{ flex: 1 }}>
          <img 
            src="/images/testimonial.jpg" 
            alt="Office Space" 
            style={{ width: "100%", borderRadius: "12px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }} 
          />
        </div>
      </div>

      {/* Trusted by Industry Leaders Section */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <Title level={3} style={{ fontWeight: "bold", fontSize: "32px" }}>Trusted by Innovators and Industry Leaders</Title>
        
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "40px", flexWrap: "wrap", marginTop: "30px" }}>
          
          {/* Icon Wrapper for Hover Effect */}
          {[ 
            { icon: <BankOutlined />, color: "#4A90E2" },
            { icon: <StarOutlined />, color: "#F5A623" },
            { icon: <SolutionOutlined />, color: "#7ED321" },
            { icon: <RocketOutlined />, color: "#D0021B" },
            { icon: <GlobalOutlined />, color: "#8B572A" },
            { icon: <SafetyCertificateOutlined />, color: "#50E3C2" }
          ].map((item, index) => (
            <div key={index} style={{ 
              fontSize: "48px", 
              color: item.color, 
              padding: "20px", 
              borderRadius: "50%", 
              background: "#fff", 
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)", 
              transition: "all 0.3s ease-in-out" 
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default OurCompany;
