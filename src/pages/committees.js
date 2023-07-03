import PageLayout from '@/components/pageLayout';

export default function Committees() {
  return (
    <PageLayout>
      <div className='mt-4'>
        <h1 className='text-3xl text-center my-2 uppercase font-bold'>
          Board and Committees
        </h1>
      </div>
      <div className='max-w-lg mx-auto'>
        <div className='mt-10'>
          <div>
            <h2 className='text-xl text-center my-4 uppercase font-bold'>
              Board
            </h2>
            <p className='text-xl'>
              The Board consist of the President, Vice President, Treasurer, and
              Secretary. These officers are voted every year at the annual
              neighborhood meeting.
            </p>
          </div>
          <div className='mt-10'>
            <h2 className='text-xl text-center my-4 uppercase font-bold'>
              Architectural Committee
            </h2>
            <p className='text-xl'>
              The Architectural Committee is open to any neighbors that are
              interested in getting more involved in neighborhood decision
              making. They help decide on and implement special projects and
              also provide feedback to the board on neighbor home improvement
              requests.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
