const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className='flex flex-row w-full justify-between px-6 py-6 background-rose'>
      <div>&copy; {currentYear}</div>
    </footer>
  );
}
