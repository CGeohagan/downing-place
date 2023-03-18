export default function Window({ name, path }) {
  return (
    <div className='w-4/5 md:w-5/12 mb-8 relative'>
      <div className='absolute w-full h-full'>
        <a
          href={path}
          className='w-full h-full flex justify-center items-center uppercase font-bold'
        >
          {name}
        </a>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 128 98'
        className='w-full h-auto'
      >
        <g fill='none' fillRule='nonzero' strokeWidth='4'>
          <path
            fill='#FFF'
            stroke='#63775E'
            d='M6 20.872V92h116V20.872C103.049 10.952 83.723 6 64 6S24.951 10.952 6 20.872Z'
          />
          <path
            stroke='#FFF'
            d='M2 18.252V96h124V18.252C105.742 7.412 85.084 2 64 2 42.916 2 22.258 7.412 2 18.252Z'
          />
        </g>
      </svg>
    </div>
  );
}
