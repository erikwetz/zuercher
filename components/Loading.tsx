import Lottie from 'react-lottie-player';
import animationData from '../assets/lottie/Zuercher_Logo.json';

export default function Loading() {
  return (
    <div className="absolute z-50 flex justify-center w-full h-screen py-36 md:py-64 bg-primary">
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: 300, height: 300 }}
        onLoad={() => console.log('load')}
        onLoopComplete={() => console.log('complete')}
      />
    </div>
  );
}
