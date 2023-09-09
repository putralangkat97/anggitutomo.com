import { Link } from '@inertiajs/react';

const NavLink = ({ className = '', active = false, children, ...props }) => {
  return (
    <Link
      {...props}
      className={`flex flex-row items-center mb-3 hover:bg-zinc-800 hover:text-white mt-3 lg:mt-0 px-4 py-2 transition-colors duration-300 ${
        active ? 'bg-zinc-800 text-white' : ''
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;