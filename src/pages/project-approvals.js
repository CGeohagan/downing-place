import PageLayout from '@/components/pageLayout';

export default function ProjectApprovals() {
  return (
    <PageLayout>
      <div className='mt-4'>
        <h1 className='text-3xl text-center my-2 uppercase font-bold'>
          Project Approvals
        </h1>
      </div>
      <div className='max-w-lg mx-auto'>
        <div className='mt-10'>
          <p className='text-lg'>
            As specified in the CCRs, any new structures or external home
            improvements must be approved by the board.
          </p>
          <p className='text-lg mt-4'>
            The process for project approvals is to send a description of the
            project and all available information about the project (plans,
            etc.) to the Downing Place{' '}
            <a
              class='border-bottom-rose'
              href='mailto:downingplacehoa@gmail.com'
            >
              email address
            </a>
            .
          </p>
          <p className='text-lg mt-4'>
            The president will request feedback on the project from the
            Architectural Committee. The board will then vote on approval or
            request for updates, taking into account feedback from the
            committee. The president will respond to the neighbor request within
            30 days (but often sooner).
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
