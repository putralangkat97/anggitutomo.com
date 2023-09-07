import { Link } from '@inertiajs/react';

const Posts = () => {
  return (
    <>
      <Link
        href={route('post.view', 'post-view')}
        className="hover:opacity-75 transition-opacity duration-300"
      >
        <div className="text-zinc-950 mt-4">
          <h1 className="text-2xl font-bold mb-2">Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores
            id quis fuga! Pariatur consequuntur enim perferendis! Quam ducimus
            animi aliquam expedita cum adipisci, tempora atque a facilis cumque
            dolorem voluptatem delectus excepturi, nemo, saepe architecto
            similique exercitationem cupiditate impedit pariatur eum quaerat!
            Incidunt sed ducimus distinctio adipisci quisquam repudiandae?
          </p>
        </div>
      </Link>
    </>
  );
};

export default Posts;
