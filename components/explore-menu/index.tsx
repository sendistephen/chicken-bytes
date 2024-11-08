import MenuGrid from '../global/menu-grid';

const ExploreMenu = () => {
  return (
    <div className='container mt-8 px-4'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
        <MenuGrid title='Promo' img='/promo.jpeg' />
        <MenuGrid title='sharing' img='/sharing.jpeg' />
        <MenuGrid title='burgers' img='/burgers.jpeg' />
        <MenuGrid title='chicken pieces' img='/chicken_pieces.jpeg' />
        <MenuGrid title='box meals' img='/box_meals.jpeg' />
        <MenuGrid title='browse categories' img='/browse_categories.png' />
      </div>
    </div>
  );
};
export default ExploreMenu;
