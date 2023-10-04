import { Link } from '@inertiajs/react';

const NavLink = ({ className = '', active = false, children, ...props }) => {
  return (
    <Link
      {...props}
      className={`flex flex-row items-center mb-3 hover:bg-orange-600 hover:text-white mt-3 lg:mt-0 px-4 py-2 transition-all duration-300 ${
        active ? 'bg-orange-600 text-white' : 'text-zinc-950'
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
