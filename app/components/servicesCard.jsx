'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
const clickCardSound = '/clickCardSound.mp3'



const ServicesCard = ({ imgPath, serviceName, desc, redirectPath }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDown, setIsDown] = useState(false);
    const router = useRouter()
    useEffect(() => {
        const audio = new Audio(clickCardSound);
        if (isDown) {
            audio.play();
        }
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [isDown]);

    return (
        
   
        <div
            onClick={() => router.push(redirectPath)}
            className="w-full md:w-1/3 px-4 mb-4 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseDown={() => setIsDown(true)}
            onMouseLeave={() => {setIsHovered(false); setIsDown(false)}}
        >
            <div className={`bg-white rounded-lg shadow-md overflow-hidden ${isHovered ? 'shadow-lg' : 'shadow'}`}>
                <div style={{ height: '180px', width: '100%', position: 'relative' }}>
                    <Image
                        src={imgPath}
                        alt={"Placeholder Image"}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className={`p-6 bg-white transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                    <p className="text-lg font-bold text-black text-center">{serviceName}</p>
                </div>
                {isHovered && (
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-50 p-4 mx-4 rounded-lg">
                        <h1 className="text-xl font-bold text-white mb-4">{serviceName}</h1>
                        <p className="text-white text-center">{desc}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServicesCard;