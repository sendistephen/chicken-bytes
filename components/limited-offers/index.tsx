import OffersGrid from '../global/offers-grid';

const LimitedOffers = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <OffersGrid />
        <OffersGrid />
        <OffersGrid />
        <OffersGrid />
      </div>
    </div>
  );
};
export default LimitedOffers;
