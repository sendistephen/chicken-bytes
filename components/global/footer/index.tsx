import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full bg-black'>
      <div className='container mx-auto px-4 py-8 text-neutral-50 md:px-10'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <span className='hidden text-2xl font-black text-rose-600 md:flex'>
              Chickenbytes
            </span>
            <span className='text-2xl font-black text-rose-600 md:hidden'>
              CB
            </span>
          </div>

          <div>
            <p className='text-sm font-bold'>CB</p>
            <Link href='/menu'>Our menu</Link>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-sm font-bold'>Contact CB</p>
            <Link href='/menu'>Contact us</Link>
            <Link href='/menu'>whatsapp</Link>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-sm font-bold'>Legal</p>
            <Link href='/menu'>Terms & Conditions</Link>
            <Link href='/menu'>Privacy Policy</Link>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-sm font-bold'>Store Locations</p>
            <Link href='/menu'>Find a CB store</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
