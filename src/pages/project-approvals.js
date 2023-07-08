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
            As specified in the{' '}
            <a
              href='https://docs.google.com/document/d/0BzkLu4nW1R1GOGE2ZDc5NGUtYjY3Yy00M2Q1LThhNmMtNjlkMDY0MDFmZTI1/edit?usp=sharing&ouid=110813070632959976197&resourcekey=0-kpsT6EgUas6lqyXXCnbo2w&rtpof=true&sd=true'
              target='_blank'
              className='border-bottom-rose'
            >
              CCRs
            </a>
            , any new structures or external home improvements must be approved
            by the board.
          </p>
          <p className='text-lg mt-4'>
            The process for project approvals is to send a description of the
            project and all available information about the project (plans,
            etc.) to the Downing Place{' '}
            <a
              className='border-bottom-rose'
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
