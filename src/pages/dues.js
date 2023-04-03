import Image from 'next/image';
import PageLayout from '@/components/pageLayout';

export default function Dues() {
  return (
    <PageLayout>
      <div className='mt-4 mb-8'>
        <h1 className='text-3xl text-center my-2 uppercase font-bold'>Dues</h1>
      </div>
      <div className='max-w-lg mx-auto'>
        <div>
          <p className='text-xl'>
            Neighborhood dues are due once a year on X Date. The total owed is
            $350. Please pay by check or online at any of the following links:
          </p>
          <div className='flex justify-center items-center my-8'>
            <div className='mx-3'>
              <a href='' target='_blank'>
                <Image
                  src='/paypal.png'
                  width='130'
                  height='40'
                  alt='paypal logo'
                />
              </a>
            </div>
            <div className='mx-3'>
              <a href='' target='_blank'>
                <Image
                  src='/venmo.png'
                  width='130'
                  height='40'
                  alt='venmo logo'
                />
              </a>
            </div>
          </div>
        </div>

        <div className='mt-2'>
          <p>Penalties for late dues:</p>
          <ol className='list-decimal ml-8'>
            <li>There will be a 12 month window to pay without any penalty.</li>
            <li>
              After the 12 month period, if the resident has not paid, the board
              will issue a $25 late fee plus 12% interest per year as is
              specified in the current CCRs. In addition to the fee, if a
              resident has not paid at the year mark, they are not permitted to
              be on any committees or on the board until payment is received.
            </li>
            <li>
              After 2 years if the resident has not paid, they will get notice
              that a lien may be placed on their home.
            </li>
          </ol>
        </div>
      </div>
    </PageLayout>
  );
}
