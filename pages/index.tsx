import Lottie from 'react-lottie-player';
import animationData from '../assets/lottie/Zuercher_Logo.json';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Init() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  return (
    <>
      {loading && (
        <div className="absolute z-50 flex justify-center w-full h-screen py-36 md:py-64 bg-primary">
          <Lottie
            loop
            animationData={animationData}
            play
            speed={1.9}
            style={{ width: 300, height: 300 }}
            onLoopComplete={() => {
              setLoading(false);
              router.push('/home');
            }}
          />
        </div>
      )}
    </>
  );
}
