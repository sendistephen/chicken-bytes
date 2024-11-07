'use client';
import { CircleUserRound, Menu, ShoppingBasketIcon } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MENU_ITEMS } from '@/constants';

import { Button } from '../ui/button';
import DeliveryAddress from './delivery-address';
import MenuItem from './menu-item';

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-t-4 border-rose-500 bg-white py-8 shadow-lg'>
      <div className='container mx-auto flex items-center justify-between px-4 md:px-10'>
        {/* MOBILE MENU TRIGGER */}
        <div className='fixed md:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='ghost' className=''>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='h-full'>
              <SheetHeader className='-ml-20 -mt-4'>
                <SheetTitle className='text-2xl font-black text-rose-600'>
                  Chickenbytes
                </SheetTitle>
              </SheetHeader>
              <ul className='mt-16 flex flex-col gap-8'>
                {MENU_ITEMS.map(item => (
                  <MenuItem
                    key={item.label}
                    href={item.href}
                    label={item.label}
                  />
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        {/* MAIN NAVBAR */}
        <nav className='flex w-full items-center justify-between'>
          <div className='flex items-center gap-2'>
            <span className='hidden text-2xl font-black text-rose-600 md:flex'>
              Chickenbytes
            </span>
            <span className='text-2xl font-black text-rose-600 md:hidden'>
              CB
            </span>
          </div>
          {/* DESKTOP NAVIGATION*/}
          <ul className='hidden flex-1 items-center justify-center gap-8 md:flex'>
            {MENU_ITEMS.map(item => (
              <MenuItem key={item.label} href={item.href} label={item.label} />
            ))}
          </ul>

          {/* RIGHT ACTIONS */}
          <div className='ml-auto flex items-center gap-x-4'>
            <div className='flex cursor-pointer items-center gap-x-2'>
              <CircleUserRound className='text-neutral-500' />
              <span className='hidden text-sm text-neutral-500 lg:flex'>
                Sign in
              </span>
            </div>
            <div className='flex cursor-pointer items-center justify-center rounded-full p-2 transition-colors hover:bg-rose-100'>
              <ShoppingBasketIcon />
            </div>
          </div>
        </nav>
      </div>
      {/* DELIVERY ADDRESS SELECTION */}
      <DeliveryAddress />
    </header>
  );
};
export default Navbar;
