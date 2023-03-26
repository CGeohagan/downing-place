import Facebook from './facebook';
import Email from './email';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className='flex flex-row w-full justify-between px-6 py-6 bg-rose'>
      <div className='text-lg'>Downing Place &copy; {currentYear}</div>
      <div className='flex flex-row'>
        <Email />
        <Facebook />
      </div>
    </footer>
  );
}
