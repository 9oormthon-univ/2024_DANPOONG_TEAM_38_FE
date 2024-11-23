import React from "react";
import  Player  from 'lottie-react';
import LoadingLottie from '../assets/LoadingLottie.json';

const Loading = () => {
  return <div className="flex items-center justify-center">
    <Player
        autoplay
        loop
        animationData={LoadingLottie}
        style={{height: '300px', width: '300px'}}
    />
  </div>;
};

export default Loading;
