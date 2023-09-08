import { Link } from '@inertiajs/react';

const Posts = () => {
  return (
    <>
      <div className="text-zinc-950 border p-4 shadow-sm">
        <Link
          href={route('post.show', 'post-view')}
          className="hover:text-orange-500 transition-all duration-300"
        >
          <h1 className="text-2xl font-bold mb-2">Lorem, ipsum dolor.</h1>
        </Link>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem beatae dignissimos quaerat quod illum nesciunt
          consectetur vero sapiente quis, minus numquam aliquam. Doloribus aut,
          cum enim sit temporibus praesentium commodi!
        </p>
        <Link
          href={route('post.show', 'post-view')}
          className="hover:text-orange-500 transition-all duration-300"
        >
          <span className="flex justify-end">Read More</span>
        </Link>
      </div>
    </>
  );
};

export default Posts;
