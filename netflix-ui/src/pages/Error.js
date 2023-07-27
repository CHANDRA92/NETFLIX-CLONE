import React, { useEffect } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Caps = styled.div`
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: as 8s linear infinite;
`;

const CapsImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const Frame = styled.div`
  z-index: 3;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.9) 100%
  );
`;

const FrameDiv = styled.div`
  position: absolute;
  left: 0;
  top: -20%;
  width: 100%;
  height: 20%;
  background-color: rgba(0, 0, 0, 0.12);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  animation: asd 12s linear infinite;
`;

const Heading = styled.h1`
  z-index: 3;
  position: absolute;
  font: bold 200px/200px Arial, sans-serif;
  left: 50%;
  top: 50%;
  margin-top: -100px;
  width: 100%;
  margin-left: -50%;
  height: 200px;
  text-align: center;
  color: transparent;
  text-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  animation: asdd 2s linear infinite;
`;

const Error = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const WIDTH = 700;
    const HEIGHT = 500;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.fill();
    const imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
    const pix = imgData.data;

    const flickering = () => {
      for (let i = 0; i < pix.length; i += 4) {
        const color = Math.random() * 255 + 50;
        pix[i] = color;
        pix[i + 1] = color;
        pix[i + 2] = color;
      }
      ctx.putImageData(imgData, 0, 0);
    };

    const flickerInterval = setInterval(flickering, 30);

    return () => {
      clearInterval(flickerInterval);
    };
  }, []);

  return (
    <>
      <Heading>404</Heading>
      <Frame>
        <FrameDiv />
        <FrameDiv style={{ animationDelay: "4s" }} />
        <FrameDiv style={{ animationDelay: "8s" }} />
      </Frame>
      <Caps>
        <CapsImage src="http://ademilter.com/caps.png" alt="" />
      </Caps>
      <Canvas id="canvas" />
    </>
  );
};

export default Error;
