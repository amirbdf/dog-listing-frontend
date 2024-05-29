import Link from 'next/link'; // Import Link from Next.js
import Script from 'next/script';

const HeroSection = () => {
  return (
    <section className="bg-blue-500 text-white flex flex-col items-center justify-center min-h-screen w-full">
      <h1 className="text-4xl font-bold mb-4">Welcome to Kalbi Market</h1>
      <p className="text-lg mb-8">Find your perfect dog companion here!</p>
      <dotlottie-player
        src="https://lottie.host/a4ca192f-5fb2-4786-a4ae-17d497ad4274/cKunAhy0Kc.json"
        background="transparent"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        loop
        autoplay
      ></dotlottie-player>

      <Script
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
        type="module"
        strategy="lazyOnload"
      />
      
      {/* Use Link component from Next.js */}
      <Link href="/dog-listings"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Here
        
      </Link>
    </section>
  );
};

export default HeroSection;
