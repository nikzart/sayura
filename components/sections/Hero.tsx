'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { getSanityFileUrl, getSanityImageUrl } from '@/lib/sanityHelpers';

interface HeroProps {
  heroData?: any;
}

export default function Hero({ heroData }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Autoplay video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  // Use heroData if available, otherwise fallback to static data
  const title = heroData?.title || 'TIMELESS ELEGANCE';
  const subtitle = heroData?.subtitle || 'Discover our exclusive collection of premium clothing, where tradition meets contemporary design';
  const ctaText = heroData?.ctaText || 'EXPLORE';
  const ctaLink = heroData?.ctaLink || '/collections';
  const videoUrl = heroData?.backgroundVideo ? getSanityFileUrl(heroData.backgroundVideo) : '/videos/hero-video.mp4';
  const posterUrl = heroData?.posterImage ? getSanityImageUrl(heroData.posterImage, 1920, 1080) : '/images/hero-poster.jpg';

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={posterUrl}
      >
        {videoUrl && <source src={videoUrl} type="video/mp4" />}
        {/* Fallback Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${posterUrl})` }} />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="heading-xl mb-6 text-shadow-lg font-[family-name:var(--font-giordano)]">
              {title}
            </h1>
            <p className="text-lg md:text-xl font-light tracking-wide mb-8 max-w-2xl mx-auto text-shadow">
              {subtitle}
            </p>
            <div className="flex justify-center">
              <Link href={ctaLink}>
                <Button variant="gold" size="lg">
                  {ctaText}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          onClick={toggleMute}
          className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <VolumeX size={20} className="text-white" />
          ) : (
            <Volume2 size={20} className="text-white" />
          )}
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Scroll to content"
      >
        <span className="text-xs tracking-widest-2 uppercase">Scroll</span>
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
}
