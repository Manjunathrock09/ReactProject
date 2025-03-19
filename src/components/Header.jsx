import React, { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, Drawer, Space } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setVisible(false);
    }
  };

  const menuItems = [
    { key: "home", label: "Home", onClick: () => handleScrollToSection("hero") },
    { key: "about", label: "About", onClick: () => handleScrollToSection("features") },
    { key: "services", label: "Services", onClick: () => handleScrollToSection("whyWorkhub") },
    { key: "review", label: "Review", onClick: () => handleScrollToSection("review") },
    { key: "contact", label: "Contact", onClick: () => handleScrollToSection("footer") },
  ];

  return (
    <Header
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px",
        height: 70,
        background: "linear-gradient(135deg, #001529, #003a8c)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          color: "#fff",
          fontSize: "1.8rem",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "transform 0.3s ease, color 0.3s ease",
        }}
        onClick={() => navigate("/")}
        onMouseOver={(e) => (e.target.style.color = "#40a9ff")}
        onMouseOut={(e) => (e.target.style.color = "#fff")}
      >
        Work<span style={{ color: "#1890ff" }}>Hub</span>
      </div>

      {/* Desktop Navbar */}
      {!isMobile && (
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          items={menuItems}
          style={{
            minWidth: 400,
            borderBottom: "none",
            display: "flex",
            justifyContent: "center",
            flex: 1,
            background: "transparent",
          }}
        />
      )}

      {/* Login Button */}
      {!isMobile && (
        <Space>
          <Button
            type="primary"
            onClick={() => navigate("/login")}
            style={{
              borderRadius: "20px",
              background: "linear-gradient(45deg, #1890ff, #40a9ff)",
              borderColor: "transparent",
              transition: "all 0.3s",
              fontWeight: "bold",
            }}
            onMouseOver={(e) => (e.target.style.background = "linear-gradient(45deg, #40a9ff, #1890ff)")}
            onMouseOut={(e) => (e.target.style.background = "linear-gradient(45deg, #1890ff, #40a9ff)")}
          >
            Login
          </Button>
        </Space>
      )}

      {/* Mobile Menu Icon */}
      {isMobile && (
        <MenuOutlined
          style={{
            color: "white",
            fontSize: "1.8rem",
            cursor: "pointer",
            transition: "color 0.3s ease",
          }}
          onClick={() => setVisible(true)}
          onMouseOver={(e) => (e.target.style.color = "#40a9ff")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        />
      )}

      {/* Mobile Drawer */}
      <Drawer
        title={<span style={{ fontSize: "1.4rem", fontWeight: "bold" }}>Menu</span>}
        placement="right"
        closable
        onClose={() => setVisible(false)}
        open={visible}
        bodyStyle={{ padding: "16px", background: "#f0f2f5" }}
        style={{ boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
      >
        <Menu mode="vertical" items={menuItems} style={{ background: "transparent" }} />
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Button
            type="primary"
            onClick={() => navigate("/login")}
            style={{
              width: "100%",
              borderRadius: "20px",
              background: "linear-gradient(45deg, #1890ff, #40a9ff)",
              borderColor: "transparent",
              transition: "all 0.3s",
              fontWeight: "bold",
            }}
            onMouseOver={(e) => (e.target.style.background = "linear-gradient(45deg, #40a9ff, #1890ff)")}
            onMouseOut={(e) => (e.target.style.background = "linear-gradient(45deg, #1890ff, #40a9ff)")}
          >
            Login
          </Button>
        </div>
      </Drawer>
    </Header>
  );
};

export default AppHeader;
