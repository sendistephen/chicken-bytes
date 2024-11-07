'use client';

import Link from 'next/link';

type Props = {
  href: string;
  label: string;
};
const MenuItem = ({ href, label }: Props) => {
  return (
    <Link href={href}>
      <li className='text-xs font-black uppercase'>{label}</li>
    </Link>
  );
};
export default MenuItem;
