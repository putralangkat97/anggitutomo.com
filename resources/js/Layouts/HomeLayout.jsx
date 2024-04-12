import { Head, usePage } from '@inertiajs/react';
import Footer from './Partials/Footer';
import Navigation from './Partials/Navigation';

export default function HomeLayout({ children, head = '' }) {
  const { blog } = usePage().props;
  return (
    <>
      <Head title={head} />

      <div
        className={`${blog === true ? 'min-h-screen ' : ''}max-w-5xl mx-auto`}
      >
        <div className="mx-8">
          <Navigation />

          {blog === true ? (
            <>{children}</>
          ) : (
            <div className="flex mx-auto justify-center items-center h-[60vh]">{children}</div>
          )}
        </div>

        <Footer blog={blog} />
      </div>
    </>
  );
}
