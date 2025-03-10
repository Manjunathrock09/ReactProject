import React, { useState, useEffect } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70; // Adjust offset for fixed header
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });

      setTimeout(() => {
        window.history.replaceState(null, document.title, window.location.pathname);
      }, 500);

      setVisible(false); // Close drawer after navigation
    }
  };

  return (
    <Header
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        background: "#000",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <a
        href="/"
        style={{
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        WorkHub
      </a>

      {isMobile ? (
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: "24px", color: "white" }} />} // Fix icon rendering
          onClick={() => setVisible(true)}
          style={{
            color: "white",
            fontSize: "24px",
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      ) : (
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          style={{
            flex: 1,
            justifyContent: "flex-end",
            background: "black",
          }}
        >
          {["hero", "features", "whyWorkhub", "review", "footer"].map((section, index) => (
            <Menu.Item
              key={section}
              onClick={() => handleScrollToSection(section)}
              style={{ color: "white", display: "flex", alignItems: "center" }}
            >
              {["Home", "About", "Services", "Review", "Contact"][index]}
            </Menu.Item>
          ))}
        </Menu>
      )}

      <Drawer
        title="Menu"
        placement="right"
        closable
        onClose={() => setVisible(false)}
        open={visible}
      >
        <Menu mode="vertical">
          {["hero", "features", "whyWorkhub", "review", "footer"].map((section, index) => (
            <Menu.Item key={section} onClick={() => handleScrollToSection(section)}>
              {["Home", "About", "Services", "Review", "Contact"][index]}
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </Header>
  );
};

export default AppHeader;
