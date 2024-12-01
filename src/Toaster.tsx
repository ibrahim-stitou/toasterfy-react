import React, { useState, useEffect } from "react";

interface ToasterProps {
  message: string;
  time?: number;  // Display time (default 3000ms)
  bgColor?: string;  // Background color
  icon?: React.ReactNode;  // Custom icon (optional)
}

const Toaster: React.FC<ToasterProps> = ({ message, time = 3000, bgColor = "black", icon }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, time);

    return () => clearTimeout(timer);
  }, [time]);

  if (!show) return null;

  return (
    <div style={{ backgroundColor: bgColor, padding: "10px 20px", borderRadius: "5px", display: "flex", alignItems: "center" }}>
      {icon && <span style={{ marginRight: "10px" }}>{icon}</span>}
      <span>{message}</span>
    </div>
  );
};

export default Toaster;
