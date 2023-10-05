import Pagination from '@/Components/Admin/Pagination';
import Status from '@/Components/Admin/Status';
import EditIcon from '@/Components/Icons/Edit';
import EyeIcon from '@/Components/Icons/Eye';
import PrimaryLinkButton from '@/Components/PrimaryLinkButton';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';
import moment from 'moment';

const Post = ({ posts }) => {
  return (
    <>
      <div className="flex justify-between items-center bg-white shadow-sm mb-5 p-6">
        <div className="text-lg font-bold text-zinc-900">All Post</div>
        <PrimaryLinkButton href={route('admin.post.create')}>
          Create Post
        </PrimaryLinkButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.data.length > 0 &&
          posts.data.map((item, key) => (
            <>
              <div className="bg-white flex flex-col shadow-sm p-4" key={key}>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-950 hover:text-orange-500 hover:underline transition-all duration-200">
                    <Link href={route('admin.post.show', item.id)}>
                      {item.title}
                    </Link>
                  </span>
                  <div className="flex space-x-2">
                    <div className="flex justify-center items-center space-x-2">
                      <Link
                        href={route('admin.post.show', item.id)}
                        className="text-zinc-950 hover:text-orange-500 transition-colors duration-200"
                      >
                        <EyeIcon className={'w-5 h-5'} />
                      </Link>
                      <Link
                        href={route('admin.post.edit', item.id)}
                        className="text-zinc-950 hover:text-orange-500 transition-colors duration-200"
                      >
                        <EditIcon className={'w-5 h-5'} />
                      </Link>
                    </div>
                  </div>
                </div>
                <small className="flex justify-between items-center mt-4">
                  <span className="text-gray-500">
                    Published at:{' '}
                    {item.status !== 'published'
                      ? '-'
                      : moment(item.updated_at).format('DD/MM/YYYY hh:mm A')}
                  </span>
                  <Status status={item.status} />
                </small>
              </div>
            </>
          ))}
      </div>
      {posts.length > 10 && <Pagination class="mt-6" links={posts.links} />}
    </>
  );
};

Post.layout = (page) => (
  <AdminLayout
    children={page}
    title={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Post
      </h2>
    }
    head={'Post'}
  />
);

export default Post;
