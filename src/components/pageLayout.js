export default function PageLayout({ children }) {
  return (
    <div className='max-w-2xl mx-auto p-4 bg-white'>
      <div className='border-darkgreen border-solid border-8 p-6'>
        {children}
      </div>
    </div>
  );
}
