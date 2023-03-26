import Link from 'next/link';
import Image from 'next/image';

import Nav from './nav';

export default function Header() {
  return (
    <header className='flex flex-row w-full align-center justify-between px-6 py-6 bg-lightgreen '>
      <Link href='/' className='text-2xl font-medium'>
        <Image
          src='/DPlogo.png'
          alt='Downing Place logo'
          width='120'
          height='99'
        />
      </Link>
      <Nav />
    </header>
  );
}
