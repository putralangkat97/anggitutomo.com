import { Link } from '@inertiajs/react';

export default function Navigation() {
  return (
    <div className="mx-auto flex flex-wrap py-8 flex-col md:flex-row items-center mb-10">
      <Link
        href={route('post.index')}
        id="link-home"
        className="text-2xl flex title-font font-semibold items-center text-zinc-950 mb-4 md:mb-0 hover:opacity-75 transition-opacity duration-300"
      >
        anggitutomo.com
      </Link>
      <nav className="w-full md:w-auto md:ml-auto flex flex-wrap items-center text-lg justify-around lg:justify-center">
        <Link
          href="#"
          className="inline-flex text-zinc-950 mr-0 lg:mr-6 hover:bg-zinc-950 hover:text-zinc-100 hover:bg-zinc-200 border-0 py-1 px-3 focus:outline-none transition-colors duration-300"
        >
          Blog
        </Link>
        <Link
          href="#"
          className="inline-flex text-zinc-950 mr-0 lg:mr-6 hover:bg-zinc-950 hover:text-zinc-100 hover:bg-zinc-200 border-0 py-1 px-3 focus:outline-none transition-colors duration-300"
        >
          Projects
        </Link>
        <Link
          href="#"
          className="inline-flex text-zinc-950 mr-0 lg:mr-6 hover:bg-zinc-950 hover:text-zinc-100 hover:bg-zinc-200 border-0 py-1 px-3 focus:outline-none transition-colors duration-300"
        >
          Contact Me
        </Link>
      </nav>
    </div>
  );
}
