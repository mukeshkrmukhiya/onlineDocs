import styles from './home.module.css';
// import React from 'react';

const Home = () => {
  return (
    <main className={`flex flex-col items-start m-8 max-h-screen ${styles.home}`}>
    <div className="text-2xl md:text-6xl sm:text-4xl font-bold mb-4 ml-10 md:ml-20 sm:ml-16 md:ml-36 text-[#ebe6e3]">
      Access It
    </div>
    <div className="text-3xl md:text-8xl sm:text-5xl font-bold mb-4 ml-16 md:ml-36 sm:ml-24 md:ml-48 text-[#5271ff]">
      Any Time
    </div>
    <div className="text-3xl md:text-8xl sm:text-5xl font-bold mb-4 ml-24 md:ml-48 sm:ml-32 text-[#5271ff]">
      & Any Where
    </div>
    <div className="text-xl md:text-2xl sm:text-lg ml-10 md:ml-20 sm:ml-16 text-[#dbd8d5]">
      Free, Fast & Simple.
    </div>
  </main>
  
  );
}

export default Home;
