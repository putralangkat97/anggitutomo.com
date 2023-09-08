import { Head, usePage } from '@inertiajs/react';
import Header from './Partials/Header';
import Sidebar from './Partials/Sidebar';

const AdminLayout = ({
  title = 'anggitutomo.com',
  head = 'anggitutomo.com',
  children,
}) => {
    const { auth } = usePage().props
  return (
    <>
      <Head title={head} />

      <div className="flex flex-col lg:flex-row">
        <Sidebar user={auth.user} />

        <main className="w-full lg:ml-80 mt-10 lg:mt-0 bg-gray-100 min-h-screen">
          <div className="py-6 md:py-8">
            <div className="w-full mx-auto px-6 lg:px-8">
              <div className="flex justify-between mt-6 lg:mt-0 mb-8">
                <div className="shrink-0 flex items-center">{title}</div>

                <Header user={auth.user} />
              </div>

              <div className="py-6">{children}</div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
