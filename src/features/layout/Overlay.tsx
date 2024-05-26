"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Card, CardDescription, CardTitle } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import Link from 'next/link';

const Overlay = () => {

  function cleanPathname(pathname: string): string {
    if (pathname.startsWith('/')) {
      pathname = pathname.substring(1);
    }

    pathname = pathname.replace(/-/g, ' ');

    return pathname;
  }



  const images = [
    './media/appareillage.webp',
    './media/pedicurie.webp',
    './media/podologie.webp',
    './media/appareillage.webp',
    './media/pedicurie.webp',
  ];

  const pathname = usePathname();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0.4);
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);

      setTimeout(() => {
        setOpacity(0.6);
      }, 150);
      setTimeout(() => {
        setOpacity(0.8);
      }, 300);
      setTimeout(() => {
        setOpacity(1);
      }, 450);
      setTimeout(() => {
        setOpacity(0.8);
      }, 3550);
      setTimeout(() => {
        setOpacity(0.6);
      }, 3700);
      setTimeout(() => {
        setOpacity(0.4);
      }, 3850);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className=" w-full h-[75vh] bg-cover bg-center flex items-center jutify-center mt-24"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        opacity: opacity,
        transition: 'opacity 0.15s ease-in',
      }}
    >
      <Card className='flex flex-col items-center justify-center mx-auto px-20 md:px-60 py-20 bg-opacity w-full md:w-1/3'>
        {pathname === '/' ?
          <div>
            <CardTitle className='text-3xl font-bold text-customColor uppercase m-4 text-center'>Veronique Gros Hourdry</CardTitle>
            <CardTitle className='text-xl font-bold text-customColor uppercase m-4 text-center'>Podologue posturologue pédicure</CardTitle>
          </div>
          :
          <CardTitle className='text-3xl font-bold text-customColor uppercase m-4'>{cleanPathname(pathname)}</CardTitle>
        }
        <CardDescription>
          <Button variant={'default'}><Link aria-label="doctolib" target="blank" href="https://www.doctolib.fr/pedicure-podologue/armentieres/veronique-hourdry/booking/places?specialityId=8&telehealth=false&bookingFunnelSource=profile">prendre rendez vous</Link></Button>
        </CardDescription>
      </Card>
    </div>
  );
};

export default Overlay;