import React, { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) =>
    setMousePosition({ x: e.clientX, y: e.clientY });

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return position;
};

const MouseRender = () => {
  const mouse = useMousePosition();
  return (
    <span>
      Mouse X : {mouse.x}, Mouse Y: {mouse.y}
    </span>
  );
};

export default MouseRender;
