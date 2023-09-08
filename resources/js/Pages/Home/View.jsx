import HomeLayout from '@/Layouts/HomeLayout';
import Post from './Partials/Post';
import { Head } from '@inertiajs/react';

const View = () => {
  return (
    <>
      <HomeLayout>
        <Head title="anggit.dev" />
        <div className="grid grid-cols-1 gap-4 mt-6 lg:mt-10 mb-20">
          <Post />
        </div>
      </HomeLayout>
    </>
  );
};

export default View;
