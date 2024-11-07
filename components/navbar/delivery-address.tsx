'use client';

import { BookOpen, MapPin, SquarePen } from 'lucide-react';

import { Button } from '@/components/ui/button';

const DeliveryAddress = () => {
  return (
    <div className='mx-auto mt-4 flex max-w-5xl items-center justify-between px-4 py-4 md:mt-8 md:px-10'>
      <div className='hidden md:flex-col md:items-center lg:flex'>
        <p className='text-3xl font-black uppercase leading-relaxed'>
          Satisfy Your Cravings today
        </p>
        <p className='text-sm text-neutral-700'>
          Order for delivery or Pick up!
        </p>
      </div>
      <div className='mx-auto flex flex-col items-center justify-center space-y-4'>
        <div className='flex items-center justify-center gap-2 lg:border lg:border-rose-600 lg:p-2'>
          <MapPin size='24' />
          <div className='flex items-center gap-x-4'>
            <span className='text-sm font-bold'>Deliver to </span>
            <span className='text-sm font-light text-neutral-600'>
              Wandegeya, Kampala, Uganda
            </span>
            <span>
              <SquarePen className='text-rose-600' />
            </span>
          </div>
        </div>
        <div>
          <Button className='rounded-full bg-rose-600 px-24 text-xs font-medium uppercase hover:bg-rose-700'>
            <BookOpen />
            Open the menu
          </Button>
        </div>
      </div>
    </div>
  );
};
export default DeliveryAddress;
