import Banner from '@/components/banner';
import LimitedOffers from '@/components/limited-offers';

export default async function IndexPage() {
  return (
    <div className='w-full'>
      {/* BANNER SECTION */}
      <Banner />
      <div className='container mx-auto my-8 px-4'>
        <div className=''>
          <div className='flex items-center space-x-4'>
            <h1 className='ml-4 text-4xl font-black'>Limited Offers</h1>{' '}
            <span className='inline-block h-4 w-4 rounded-full bg-rose-600'></span>
          </div>
          <LimitedOffers />
        </div>
      </div>
    </div>
  );
}
