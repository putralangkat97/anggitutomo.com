import Status from '@/Components/Admin/Status';
import EditIcon from '@/Components/Icons/Edit';
import EyeIcon from '@/Components/Icons/Eye';
import PrimaryLinkButton from '@/Components/PrimaryLinkButton';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';

const Post = ({ posts }) => {
  return (
    <>
      <div className="flex justify-between items-center bg-white shadow-sm mb-5 p-6">
        <div className="text-lg font-bold text-zinc-900">All Post</div>
        <PrimaryLinkButton href={route('admin.post.create')}>
          Create Post
        </PrimaryLinkButton>
      </div>

      <table className="w-full overflow-hidden shadow-sm">
        <thead>
          <tr className="bg-white border-b">
            <th className="text-left p-6">Title</th>
            <th className="text-left p-6">Published At</th>
            <th className="text-center p-6">Status</th>
            <th className="text-center p-6">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((item, key) => (
              <tr className="bg-gray-50" key={key}>
                <td className="text-left p-6">
                  <Link
                    href={route('admin.post.show', item.id)}
                    className="text-zinc-900 hover:text-orange-500 transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="text-left p-6">
                  {item.status !== 'published' ? '-' : item.updated_at}
                </td>
                <td className="text-center p-6">
                  <Status status={item.status} />
                </td>
                <td className="text-center p-6">
                  <div className="flex justify-center items-center space-x-2">
                    <Link
                      href={route('admin.post.show', item.id)}
                      className="text-zinc-900 hover:text-orange-500 transition-colors duration-200"
                    >
                      <EyeIcon className={'w-5 h-5'} />
                    </Link>
                    <Link
                      href={route('admin.post.edit', item.id)}
                      className="text-zinc-900 hover:text-blue-500 transition-colors duration-200"
                    >
                      <EditIcon className={'w-5 h-5'} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
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
