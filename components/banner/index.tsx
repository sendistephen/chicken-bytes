'use client';

import Image from 'next/image';

const Banner = () => {
  return (
    <div className='relative !h-[300px] w-full md:h-[500px]'>
      <Image
        className='hidden md:block'
        src='/banner_desktop.jpeg'
        alt='Banner Desktop'
        width={1920}
        height={1080}
      />
      <Image
        src='/banner_mobile_1.jpeg'
        alt='Banner Mobile'
        layout='fill'
        objectFit='cover'
        className='md:hidden'
      />
    </div>
  );
};

export default Banner;
