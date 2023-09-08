import Status from '@/Components/Admin/Status';
import PrimaryLinkButton from '@/Components/PrimaryLinkButton';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';

const Post = ({ user }) => {
  const data = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet.',
      status: 'published',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet.',
      status: 'published',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet.',
      status: 'draft',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet.',
      status: 'pending',
    },
  ];

  return (
    <AdminLayout
      user={user}
      title={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Post
        </h2>
      }
      head={'Post'}
    >
      <div className="flex justify-between items-center bg-white shadow-sm mb-5 p-6">
        <div className="text-lg font-bold text-zinc-900">All Post</div>
        <PrimaryLinkButton href={route('admin.post.create')}>
          Create Post
        </PrimaryLinkButton>
      </div>

      <table className="w-full overflow-hidden">
        <thead>
          <tr className="bg-white border-b">
            <th className="text-left p-6">Title</th>
            <th className="text-center p-6">Status</th>
            <th className="text-center p-6">Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, key) => (
              <tr className="bg-gray-50" key={key}>
                <td className="text-left p-6">{item.title}</td>
                <td className="text-center p-6">
                  <Status status={item.status} />
                </td>
                <td className="text-center p-6">
                  <Link href={'#'} className="text-zinc-900 hover:underline">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Post;
