import { Link } from '@inertiajs/react';

const NavLink = ({ className = '', active = false, children, ...props }) => {
  return (
    <Link
      {...props}
      className={`mr-0 lg:mr-6 border-0 focus:outline-none ${
        active ? 'bg-zinc-950 text-zinc-100' : 'text-zinc-950'
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
