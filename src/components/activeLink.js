import { useRouter } from 'next/router';

function ActiveLink({ children, href, clickCallback }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
    clickCallback();
  };

  return (
    <a href={href} className='text-white' onClick={handleClick}>
      {children}
    </a>
  );
}

export default ActiveLink;
