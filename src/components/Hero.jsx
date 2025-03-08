import React from "react";
import { Button, Typography, Layout } from "antd";

const Hero = () => (
  <Layout.Content
    id="hero"
    style={{
      textAlign: "center",
      padding: 60,
      background: "url('/images/background.jpg') center/cover no-repeat",
      minHeight: "30vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Typography.Title level={1} strong>Welcome to WorkHub</Typography.Title>
    <Typography.Paragraph style={{ fontSize: 18 }}>
      Your best workspace solution.
    </Typography.Paragraph>
    <Button type="primary" size="large">Get Started</Button>
  </Layout.Content>
);

export default Hero; 