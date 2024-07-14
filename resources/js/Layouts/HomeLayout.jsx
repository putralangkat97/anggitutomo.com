import { Head, usePage } from '@inertiajs/react';
import Footer from './Partials/Footer';
import Navigation from './Partials/Navigation';

export default function HomeLayout({ children, head = '' }) {
  const { blog } = usePage().props;
  return (
    <>
      <Head title={head} />

      <div
        className={`${
          blog === true ? 'min-h-screen ' : ''
        }max-w-7xl mx-auto shadow-lg bg-white border-4 lg:border-2 border-black px-4 pb-4 h-screen lg:h-[90vh]`}
      >
        <div className="mx-4 md:mx-8">
          <Navigation />

          {blog === true ? (
            <>{children}</>
          ) : (
            <>
              <div className="flex flex-col mx-auto justify-center items-center">
                {children}
                <Footer blog={blog} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
