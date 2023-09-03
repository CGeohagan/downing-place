import PageLayout from '@/components/pageLayout';

export default function Documents() {
  return (
    <PageLayout>
      <div className='mt-4'>
        <h1 className='text-3xl text-center my-2 uppercase font-bold'>
          Documents
        </h1>
      </div>
      <div className='max-w-lg mx-auto'>
        <div className='mt-10'>
          <ul>
            <li className='text-xl text-center my-4'>
              <a
                target='_blank'
                href='/files/dp-directory-protected.pdf'
                className='border-bottom-rose'
              >
                Downing Place Directory
              </a>
            </li>
            <li className='text-xl text-center my-4'>
              <a
                className='border-bottom-rose'
                target='_blank'
                href='https://docs.google.com/document/d/0BzkLu4nW1R1GOGE2ZDc5NGUtYjY3Yy00M2Q1LThhNmMtNjlkMDY0MDFmZTI1/edit?usp=sharing&ouid=110813070632959976197&resourcekey=0-kpsT6EgUas6lqyXXCnbo2w&rtpof=true&sd=true'
              >
                Downing Place Covenants, Conditions and Restrictions
              </a>
            </li>
            <li className='text-xl text-center my-4'>
              <a
                className='border-bottom-rose'
                target='_blank'
                href='https://docs.google.com/document/d/0BzkLu4nW1R1GYzVjMTUzOTYtODA4MS00MTVhLWE2OTAtMzQ5ODY0YjEzZTI3/edit?usp=sharing&ouid=110813070632959976197&resourcekey=0-odSdJO6L4Qoat2X9biVmXQ&rtpof=true&sd=true'
              >
                Downing Place By-Laws
              </a>
            </li>
            <li className='text-xl text-center my-4'>
              <a
                target='_blank'
                href='/files/dp-plans-plat.pdf'
                className='border-bottom-rose'
              >
                Downing Place Plans and Record Plat
              </a>
            </li>
            <li className='text-xl text-center my-4'>
              <a
                className='border-bottom-rose'
                target='_blank'
                href='https://docs.google.com/spreadsheets/d/13LNrhS3NTKR2WXr5QcfPmZBrj2vy9_G4VaIVDHfhxnU/edit?usp=sharing'
              >
                Downing Place Recommended Service Providers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
