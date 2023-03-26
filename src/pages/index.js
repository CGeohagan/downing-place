import Window from '@/components/window';
import Victorian from '@/components/victorian';

const windowPages = [
  { name: 'Dues', path: '/dues' },
  { name: 'Committees', path: '/committees' },
  { name: 'Documents', path: '/documents' },
  { name: 'Project Approvals', path: '/project-approvals' },
];

export default function Home() {
  return (
    <>
      <div className='mt-6 mb-12'>
        <p className='text-xl md:text-3xl max-w-xl text-center md:leading-10'>
          A Victorian-style neighborhood in Charlotte, North Carolina.
          Originally constructed in 1982, and consists of 30 homes.
        </p>
      </div>
      <div className='flex justify-center mb-8'>
        <Victorian />
      </div>
      <div className='w-64'>
        <div className='h-2 border-bottom-rose'></div>
        <div className='h-2 border-bottom-rose'></div>
      </div>

      <div className='max-w-2xl flex flex-wrap justify-around mt-16 mb-8'>
        {windowPages.map((page) => {
          return (
            <Window name={page.name} path={page.path} key={page.name}></Window>
          );
        })}
      </div>
    </>
  );
}
