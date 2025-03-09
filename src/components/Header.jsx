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
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth",
      });

      setTimeout(() => {
        window.history.replaceState(null, document.title, window.location.pathname);
      }, 500);

      setVisible(false);
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
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
          style={{ color: "white", fontSize: "24px", marginLeft: "auto" }}
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
          {["hero", "features", "whyWorkhub", "footer"].map((section, index) => (
            <Menu.Item
              key={index}
              onClick={() => handleScrollToSection(section)}
              style={{ color: "white" }}
            >
              {["Home", "About", "Services", "Contact"][index]}
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
          {["hero", "features", "whyWorkhub", "footer"].map((section, index) => (
            <Menu.Item key={index} onClick={() => handleScrollToSection(section)}>
              {["Home", "About", "Services", "Contact"][index]}
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </Header>
  );
};

export default AppHeader;
