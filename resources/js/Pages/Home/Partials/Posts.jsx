import { Link } from '@inertiajs/react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const Posts = ({ title, content, slug }) => {
  return (
    <>
      <div className="text-zinc-950 border p-4 shadow-sm">
        <Link
          href={route('post.show', slug)}
          className="hover:text-orange-500 transition-all duration-300"
        >
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
        </Link>
        <ReactMarkdown>{content}</ReactMarkdown>
        <Link
          href={route('post.show', slug)}
          className="flex justify-end hover:text-orange-500 transition-all duration-300"
        >
          Read More
        </Link>
      </div>
    </>
  );
};

export default Posts;
