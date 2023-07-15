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
            Neighborhood dues for 2023 are due on X Date. The total owed is
            $350. Please pay by check to Doug Mays or online at either of the
            following links. If paying online please add the corresponding
            transaction feeds specified below to the total:
          </p>
          <div className='flex justify-center items-center my-8'>
            <div className='mx-3'>
              <a href='' target='_blank'>
                <p className='font-bold uppercase bg-darkgreen hover:bg-rose transition-colors text-center text-white p-3'>
                  Paypal
                </p>
              </a>
              <span className='text-sm'>Add transaction fee of $10.96</span>
            </div>
            <div className='mx-3'>
              <a href='' target='_blank'>
                <p className='font-bold uppercase bg-darkgreen hover:bg-rose transition-colors text-center text-white p-3'>
                  Venmo
                </p>
              </a>
              <span className='text-sm'>Add transaction fee of $6.75</span>
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
              specified in the current CCRs.
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
