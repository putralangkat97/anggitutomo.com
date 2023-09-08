import HomeLayout from '@/Layouts/HomeLayout';
import Jumbotron from './Partials/Jumbotron';
import RecentProject from './Partials/RecentProject';
import Posts from './Partials/Posts';
import { Head } from '@inertiajs/react';

const Index = () => {
  return (
    <>
      <HomeLayout>
        <Head title="anggitutomo.com" />

        <Jumbotron />

        <div className="flex md:justify-center mx-auto mt-16 lg:mt-20 mb-4">
          <h1 className="text-zinc-950 text-2xl font-medium">
            My Recent Article
          </h1>
        </div>
        <hr className="mx-auto max-w-xl" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 lg:mt-10">
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>

        {/* <div className="flex justify-center mx-auto mt-10 lg:mt-20 mb-4">
          <h1 className="text-zinc-950 text-2xl font-medium">Recent Project</h1>
        </div>
        <hr className="mx-auto max-w-xl" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 lg:mt-10">
          <RecentProject />
        </div> */}
      </HomeLayout>
    </>
  );
};

export default Index;
