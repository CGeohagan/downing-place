import Window from '@/components/window';

const windowPages = [
  { name: 'Dues', path: '/dues' },
  { name: 'Committees', path: '/committees' },
  { name: 'Documents', path: '/documents' },
  { name: 'Project Approvals', path: '/project-approvals' },
];

export default function Home() {
  return (
    <>
      <div className='my-6'>
        <p className='text-lg max-w-lg text-center'>
          Downing Place is a Victorian-style neighborhood in Charlotte, North
          Carolina. It was originally constructed in 1982, and consists of 30
          homes.
        </p>
      </div>
      <div className='max-w-2xl flex flex-wrap justify-around my-6'>
        {windowPages.map((page) => {
          return (
            <Window name={page.name} path={page.path} key={page.name}></Window>
          );
        })}
      </div>
    </>
  );
}
