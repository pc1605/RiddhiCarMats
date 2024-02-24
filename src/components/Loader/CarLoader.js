import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./carAnimation.json";

const CarLoader = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={200} width={400} />;
};

export default CarLoader;
