import { Link } from '@inertiajs/react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const Posts = ({ title, content, slug }) => {
  return (
    <>
      <div className="text-zinc-950">
        <Link
          href={route('post.show', slug)}
          className="transition-all duration-300"
        >
          <h1 className="text-2xl font-bold mb-2 hover:underline">{title}</h1>
          <span className='hover:underline'>Read More</span>
        </Link>
      </div>
    </>
  );
};

export default Posts;
