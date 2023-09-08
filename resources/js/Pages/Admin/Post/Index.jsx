import AdminLayout from '@/Layouts/AdminLayout';

const Post = ({ user }) => {
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
      <div className="bg-white overflow-hidden shadow-sm">
        <div className="p-6 text-gray-900">Post page here</div>
      </div>
    </AdminLayout>
  );
};

export default Post;
