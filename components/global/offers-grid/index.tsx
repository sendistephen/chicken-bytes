import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

const OffersGrid = () => {
  return (
    <div className='flex flex-col items-center overflow-hidden rounded-md bg-white shadow-xl'>
      <div className='relative h-48 w-full'>
        <Image
          className='object-contain'
          src='/meal_1.jpeg'
          alt='meal'
          fill
          quality={100}
        />
      </div>
      <div className='flex flex-col gap-y-4 p-8 text-center'>
        <h3 className='text-lg font-black uppercase'>Chicken Lunchbox</h3>
        <p className='text-sm text-neutral-700'>Ush 250000.00</p>
        <button className='flex w-full items-center justify-center rounded-full bg-rose-600 p-2 text-white hover:bg-rose-600/90'>
          <ShoppingCart className='h-8 w-8' />
        </button>
      </div>
    </div>
  );
};
export default OffersGrid;
