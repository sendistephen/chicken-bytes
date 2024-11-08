import Image from 'next/image';

type Props = {
  title: string;
  img: string;
};
const MenuGrid = ({ title, img }: Props) => {
  return (
    <div className='flex cursor-pointer flex-col gap-y-2'>
      <div className='relative h-36 w-full shadow-lg hover:shadow-xl'>
        <Image src={img} alt={title} fill quality={100} objectFit='cover' />
      </div>
      <h3 className='text-lg font-black uppercase'>{title}</h3>
    </div>
  );
};
export default MenuGrid;
