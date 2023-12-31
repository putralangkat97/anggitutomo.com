import { Link } from '@inertiajs/react';

const RecentProject = () => {
  return (
    <>
      <Link
        href="#"
        className="hover:opacity-80 transition-opacity duration-300 border p-4 shadow-sm"
      >
        <div className="text-zinc-950">
          <h1 className="text-2xl font-bold mb-2 hover:underline">
            Lorem, ipsum dolor.
          </h1>
          <p className="text-lg mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            ex iste eum molestias excepturi libero obcaecati ipsa quibusdam?
            Velit error ea rem ipsam quam quae necessitatibus labore ex nihil
            non!
          </p>
          <span className="hover:underline flex justify-end">Check it out</span>
        </div>
      </Link>
    </>
  );
};

export default RecentProject;
