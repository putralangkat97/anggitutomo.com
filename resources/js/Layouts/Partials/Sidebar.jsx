import NavLink from '@/Components/Admin/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

const Sidebar = ({ user }) => {
  const [open, setOpen] = useState(false);
  const { url } = usePage();

  return (
    <>
      <aside className="fixed lg:flex flex-col lg:flex-row lg:min-h-screen w-full lg:w-80 bg-gray-200">
        <div className="flex flex-col w-full text-gray-700 flex-shrink-0 border-b lg:border-0">
          <div className="flex-shrink-0 px-4 md:px-6 lg:px-8 py-4 lg:py-8 flex flex-row items-center justify-between">
            <Link
              href={route('admin.dashboard')}
              className="text-lg font-semibold tracking-widest text-gray-900 uppercase focus:outline-none focus:shadow-outline"
            >
              <ApplicationLogo className="w-8 h-8 inline -mt-1 mr-3" />
              anggitutomo.com
            </Link>
            <button
              className="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
              onClick={() => setOpen(!open)}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {open ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                )}
              </svg>
            </button>
          </div>
          <nav
            className={`flex-grow items-left lg:block px-8 pb-4 lg:pb-0 lg:overflow-y-auto mt-4 lg:mt-8 ${
              open ? 'block' : 'hidden'
            }`}
          >
            <span className="lg:hidden text-gray-500 text-sm">Menu</span>
            <NavLink
              href={route('admin.dashboard')}
              active={url.startsWith('/backend/dashboard')}
            >
              Dashboard
            </NavLink>
            <NavLink
              href={route('admin.post.index')}
              active={url.startsWith('/backend/post')}
            >
              Post
            </NavLink>
            <NavLink
              href={route('admin.tag.index')}
              active={url.startsWith('/backend/tag')}
            >
              Tag
            </NavLink>
            <NavLink
              href={route('admin.profile.edit')}
              active={url.startsWith('/backend/profile')}
            >
              Profile
            </NavLink>
            <div className="lg:hidden mt-6 lg:mt-0">
              <span className="text-gray-500 text-sm">{user.name}</span>
              <div className="flex flex-row items-center mb-3 text-gray-900 hover:text-orange-500 mt-2">
                <Link href={route('logout')} as="button" method="POST">
                  <span className="">Logout</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
