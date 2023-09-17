import NavLink from '@/Components/Home/NavLink';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Navigation() {
  const { url } = usePage();
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="bg-white mb-10 lg:mt-5">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start">
            <div className="relative">
              <div>
                <NavLink
                  href={route('post.index')}
                  className="hover:opacity-80 transition-opacity duration-300 text-2xl"
                >
                  anggitutomo.com
                </NavLink>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center text-zinc-950 -ml-2 p-1 hover:bg-zinc-950 transition-colors duration-300 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setNavbar(!navbar)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center lg:static lg:inset-auto lg:ml-6 lg:pr-0 hidden lg:block">
            <div className="flex flex-shrink-0 items-center">
              <div className="flex">
                <NavLink
                  href={route('post.blog')}
                  active={url.startsWith('/blog')}
                  className="hover:bg-zinc-950 hover:text-zinc-100 transition-colors duration-300 px-3 py-1"
                >
                  Blog
                </NavLink>
                <NavLink
                  href={'#'}
                  //   active={url.startsWith('/blog')}
                  className="hover:bg-zinc-950 hover:text-zinc-100 transition-colors duration-300 px-3 py-1"
                >
                  Project
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {navbar === true && (
          <div className={'lg:hidden'} id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <NavLink
                href={route('post.blog')}
                active={url.startsWith('/blog')}
                className="hover:bg-zinc-950 hover:text-zinc-100 block transition-colors duration-300 px-3 py-1"
              >
                Blog
              </NavLink>
              <NavLink
                href={'#'}
                // active={url.startsWith('/blog')}
                className="hover:bg-zinc-950 hover:text-zinc-100 block transition-colors duration-300 px-3 py-1"
              >
                Projects
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
