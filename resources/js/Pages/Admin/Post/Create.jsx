import SecondaryLinkButton from '@/Components/SecondaryLinkButton';
import AdminLayout from '@/Layouts/AdminLayout';
import FormPost from './Form/FormPost';
import { Suspense } from 'react';

const CreatePost = ({ user }) => {
  return (
    <AdminLayout
      user={user}
      title={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Create Post
        </h2>
      }
      head={'Post'}
    >
      <div className="flex justify-between items-center bg-white shadow-sm mb-5 p-6">
        <div className="text-lg font-bold text-zinc-900">Create Post</div>
        <SecondaryLinkButton href={route('admin.post.index')}>
          Back
        </SecondaryLinkButton>
      </div>

      <div className="bg-white p-6 w-full">
        <Suspense fallback={'loading...'}>
          <FormPost />
        </Suspense>
      </div>
    </AdminLayout>
  );
};

export default CreatePost;
