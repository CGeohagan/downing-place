import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex flex-row w-full justify-between px-6 py-6 bg-white shadow-lg'>
      <div>
        <Link href='/'>Downing Place HOA</Link>
      </div>
      <nav>
        <a href='/about'>About</a>
      </nav>
    </header>
  );
}
