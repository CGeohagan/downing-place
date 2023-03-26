import { useState } from 'react';
import ActiveLink from './activeLink';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Dues', path: '/dues' },
  { name: 'Committees', path: '/committees' },
  { name: 'Documents', path: '/documents' },
  { name: 'Project Approvals', path: '/project-approvals' },
];

export default function Nav() {
  const [navActive, setNavActive] = useState(false);

  const onNavClick = (e) => {
    setNavActive(!navActive);
  };

  return (
    <div>
      <button
        className={`access-toggle bg-transparent h-8 w-8 z-20 relative ${
          navActive ? 'toggle-active' : ''
        }`}
        onClick={onNavClick}
      >
        <span></span>
      </button>
      <nav
        className={`fixed bg-darkgreen right-neg75vw md:right-neg40vw w-75vw md:w-40vw h-screen top-0 z-10 transition-transform duration-700 ${
          navActive ? 'translate-x-neg100' : ''
        }`}
      >
        <ul className='w-full h-full flex flex-col text-center justify-center'>
          {navLinks.map((link, index) => {
            return (
              <li className='' key={index}>
                <ActiveLink href={link.path} clickCallback={onNavClick}>
                  <a className='text-white p-2 uppercase tracking-wide block '>
                    {link.name}
                  </a>
                </ActiveLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
