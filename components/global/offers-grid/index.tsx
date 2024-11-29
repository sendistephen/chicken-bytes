import { Minus, Plus, PlusCircle, ShoppingCart, XIcon } from 'lucide-react';
import Image from 'next/image';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const OffersGrid = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className='group flex cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
            <div className='relative aspect-[4/3] w-full overflow-hidden'>
              <Image
                className='object-cover transition-transform duration-300 group-hover:scale-105'
                src='/meal_1.jpeg'
                alt='Chicken Lunchbox'
                fill
                quality={100}
              />
            </div>
            <div className='flex flex-1 flex-col justify-between gap-y-4 p-6'>
              <div>
                <h3 className='text-lg font-black uppercase'>
                  Chicken Lunchbox
                </h3>
                <p className='mt-2 text-sm text-neutral-600'>
                  Delicious chicken with sides
                </p>
              </div>
              <div className='space-y-4'>
                <p className='text-lg font-bold text-neutral-900'>
                  USh 250000.00
                </p>
                <button className='flex w-full items-center justify-center rounded-full bg-rose-600 p-3 text-white transition-colors hover:bg-rose-700'>
                  <ShoppingCart className='mr-2 h-5 w-5' />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </AlertDialogTrigger>

        <AlertDialogContent className='h-[90vh] max-h-[900px] w-full p-0 sm:max-w-[900px] md:max-w-[1000px] lg:max-w-[1200px]'>
          <AlertDialogHeader className='h-full p-0'>
            <div className='grid h-full grid-cols-1 md:grid-cols-2'>
              {/* Left Column */}
              <div className='flex h-full flex-col items-center p-6'>
                <div className='relative h-[250px] w-[250px]'>
                  <Image
                    src='/meal_1.jpeg'
                    alt='Chicken Lunchbox'
                    fill
                    className='object-contain'
                  />
                </div>
                <div className='mt-6 w-full'>
                  <h2 className='text-2xl font-black uppercase'>
                    Chicken Lunchbox
                  </h2>

                  <div className='mt-6 flex flex-col gap-y-4'>
                    <p className='text-2xl font-normal text-gray-500'>
                      USh 250000.00
                    </p>
                    <div className='flex items-center gap-4'>
                      <button className='flex h-12 w-12 items-center justify-center rounded-full border-4 border-neutral-300 text-neutral-500 transition-all hover:border-neutral-400 hover:ring-8 hover:ring-neutral-100'>
                        <Minus className='h-6 w-6' />
                      </button>
                      <span className='text-lg font-semibold'>1</span>
                      <button className='flex h-12 w-12 items-center justify-center rounded-full border-4 border-rose-600 text-rose-600 transition-all hover:bg-rose-50 hover:ring-8 hover:ring-rose-100'>
                        <Plus className='h-6 w-6' />
                      </button>
                    </div>
                    <p className='text-sm text-neutral-600'>
                      Colonel Burger, 1 chicken piece, Reg. Coleslaw, Reg.
                      Chips, 330ml Drink
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className='relative h-[calc(90vh-2rem)] bg-white'>
                {/* Header */}
                <div className='border-b bg-white p-6'>
                  <div className='flex items-center justify-between'>
                    <h2 className='text-2xl font-black uppercase'>
                      Personalize Your Item
                    </h2>
                    <AlertDialogTrigger asChild>
                      <button className='rounded-full p-2 hover:bg-gray-100'>
                        <XIcon className='h-6 w-6' />
                      </button>
                    </AlertDialogTrigger>
                  </div>
                </div>

                {/* Scrollable Content Area */}
                <div className='h-[calc(100%-8rem)] overflow-y-auto'>
                  <div className='space-y-8 p-6 pb-[120px]'>
                    {/* Choose Your Chicken */}
                    <div>
                      <div className='mb-2 flex items-center justify-between'>
                        <h3 className='text-xl font-black uppercase'>
                          Choose your Chicken
                        </h3>
                        <span className='text-sm text-green-600'>REQUIRED</span>
                      </div>
                      <p className='mb-4 text-sm text-gray-500'>
                        Select an item
                      </p>
                      <RadioGroup
                        defaultValue='comfortable'
                        className='divide-y'
                      >
                        <div className='flex items-center justify-between py-3'>
                          <div className='flex items-center justify-between'>
                            <Label htmlFor='r1'>10PC Original Recipe®</Label>
                          </div>
                          <RadioGroupItem value='default' id='r1' />
                        </div>
                        <div className='flex items-center justify-between py-3'>
                          <div className='flex items-center justify-between'>
                            <Label htmlFor='r2'>10PC Hot & Crispy</Label>
                          </div>
                          <RadioGroupItem value='comfortable' id='r2' />
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Add a Drink */}
                    <div>
                      <div className='mb-2 flex items-center justify-between'>
                        <h2 className='text-2xl font-black uppercase'>
                          Add a Drink
                        </h2>{' '}
                        <span>Optional</span>
                      </div>
                      <span>Select up to 3 items</span>
                      <RadioGroup defaultValue='none' className='divide-y'>
                        <div className='flex items-center justify-between py-3'>
                          <div className='flex items-center justify-between pr-4'>
                            <Label htmlFor='coke'>Coke 2LT</Label>
                            <span className='ml-8 text-gray-500'>
                              +USh8000.00
                            </span>
                          </div>
                          <RadioGroupItem value='coke' id='coke' />
                        </div>
                        <div className='flex items-center justify-between py-3'>
                          <div className='flex items-center justify-between pr-4'>
                            <Label htmlFor='fanta'>Fanta 2LT</Label>
                            <span className='ml-8 text-gray-500'>
                              +USh8000.00
                            </span>
                          </div>
                          <RadioGroupItem value='fanta' id='fanta' />
                        </div>
                        <div className='flex items-center justify-between py-3'>
                          <div className='flex items-center justify-between pr-4'>
                            <Label htmlFor='sprite'>Sprite 2LT</Label>
                            <span className='ml-8 text-gray-500'>
                              +USh8000.00
                            </span>
                          </div>
                          <RadioGroupItem value='sprite' id='sprite' />
                        </div>
                      </RadioGroup>
                    </div>
                    {/* Add a Side */}
                    <div>
                      <div className='mb-2 flex items-center justify-between'>
                        <h2 className='text-2xl font-black uppercase'>
                          Add a Side
                        </h2>{' '}
                        <span>Optional</span>
                      </div>
                      <span>Select up to 2 items</span>
                      <RadioGroup defaultValue='none' className='divide-y'>
                        <div className='flex items-center justify-between py-3'>
                          <div className='flex items-center justify-between pr-4'>
                            <Label htmlFor='large'>Large Coleslaw</Label>
                            <span className='ml-8 text-gray-500'>
                              +USh10000.00
                            </span>
                          </div>
                          <RadioGroupItem value='large' id='large' />
                        </div>
                        <div className='flex items-center justify-between py-3'>
                          <div className='flex items-center justify-between pr-4'>
                            <Label htmlFor='regular'>Regular Coleslaw</Label>
                            <span className='ml-8 text-gray-500'>
                              +USh7000.00
                            </span>
                          </div>
                          <RadioGroupItem value='regular' id='regular' />
                        </div>
                      </RadioGroup>
                    </div>
                    {/* Add a Dessert */}
                    <div>
                      <div className='mb-2 flex items-center justify-between'>
                        <h2 className='text-2xl font-black uppercase'>
                          Add a Dessert
                        </h2>{' '}
                        <span>Optional</span>
                      </div>
                      <span>Select up to 5 items</span>
                      <RadioGroup defaultValue='none' className='divide-y'>
                        <div className='flex items-center justify-between py-3'>
                          <div className='flex items-center justify-between pr-4'>
                            <Label htmlFor='oreo'>Oreo Krusher</Label>
                            <span className='ml-8 text-gray-500'>
                              +USh12000.00
                            </span>
                          </div>
                          <RadioGroupItem value='oreo' id='oreo' />
                        </div>
                        <div className='flex items-center justify-between py-3'>
                          <div className='flex items-center justify-between pr-4'>
                            <Label htmlFor='strawberry'>
                              Strawberry Krusher
                            </Label>
                            <span className='ml-8 text-gray-500'>
                              +USh12000.00
                            </span>
                          </div>
                          <RadioGroupItem value='strawberry' id='strawberry' />
                        </div>
                        <div className='flex items-center justify-between py-3'>
                          <div className='flex items-center justify-between pr-4'>
                            <Label htmlFor='salted'>
                              Salted Caramel Ice Cream Tub (250ml)
                            </Label>
                            <span className='ml-8 text-gray-500'>
                              +USh10000.00
                            </span>
                          </div>
                          <RadioGroupItem value='salted' id='salted' />
                        </div>
                        <div className='flex items-center justify-between py-3'>
                          <div className='flex items-center justify-between pr-4'>
                            <Label htmlFor='cookies'>
                              Cookies and Cream Ice Cream Tub (250ml)
                            </Label>
                            <span className='ml-8 text-gray-500'>
                              +USh10000.00
                            </span>
                          </div>
                          <RadioGroupItem value='cookies' id='cookies' />
                        </div>
                        <div className='flex items-center justify-between py-3'>
                          <div className='flex items-center justify-between pr-4'>
                            <Label htmlFor='vanilla'>
                              Vanilla Choc Chip Ice Cream Tub (250ml)
                            </Label>
                            <span className='ml-8 text-gray-500'>
                              +USh10000.00
                            </span>
                          </div>
                          <RadioGroupItem value='vanilla' id='vanilla' />
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                {/* Fixed Bottom Actions */}
                <div className='absolute bottom-0 left-0 right-0 border-t bg-white p-4'>
                  <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                      <Button
                        variant='outline'
                        className='h-14 w-full rounded-full border-2 border-rose-600'
                      >
                        <div className='flex flex-col'>
                          <span className='text-sm text-rose-600'>
                            PLACE ORDER
                          </span>
                          <span className='font-bold text-rose-600'>
                            USh 250000.00
                          </span>
                        </div>
                      </Button>
                      <Button className='h-14 w-full rounded-full bg-rose-600 hover:bg-rose-700'>
                        <div className='flex flex-col'>
                          <span className='text-sm'>ADD TO CART</span>
                          <span className='font-bold'>USh 250000.00</span>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default OffersGrid;
