import NavLink from '@/Components/Home/NavLink';
import { usePage } from '@inertiajs/react';

export default function Navigation() {
  const { url } = usePage();

  return (
    <div className="mx-auto flex flex-wrap py-8 flex-col md:flex-row items-center mb-10">
      <NavLink
        href={route('post.index')}
        className="hover:opacity-80 transition-opacity duration-300 text-2xl"
      >
        anggitutomo.com
      </NavLink>
      <nav className="w-full md:w-auto md:ml-auto flex flex-wrap items-center text-lg justify-around lg:justify-center mt-5 md:mt-0">
        <NavLink
          href={route('post.blog')}
          active={url.startsWith('/blog')}
          className="hover:bg-zinc-950 hover:text-zinc-100 transition-colors duration-300 px-3 py-1"
        >
          Blog
        </NavLink>
        <NavLink
          href={'#'}
          className="hover:bg-zinc-950 hover:text-zinc-100 transition-colors duration-300 px-3 py-1"
        >
          Projects
        </NavLink>
      </nav>
    </div>
  );
}
