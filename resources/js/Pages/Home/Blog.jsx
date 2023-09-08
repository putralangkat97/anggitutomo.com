import HomeLayout from '@/Layouts/HomeLayout';
import Posts from './Partials/Posts';
import { Head } from '@inertiajs/react';

const Blog = () => {
  return (
    <>
      <HomeLayout>
        <Head title="Blog | anggitutomo.com" />

        <div className="flex justify-start mx-auto mt-10 mb-4">
          <h1 className="text-zinc-950 text-2xl font-medium">
            Recent Articles
          </h1>
        </div>
        <hr className="text-left" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 lg:mt-10">
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
      </HomeLayout>
    </>
  );
};

export default Blog;
