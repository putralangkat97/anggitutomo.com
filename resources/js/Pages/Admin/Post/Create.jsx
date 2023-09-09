import SecondaryLinkButton from '@/Components/SecondaryLinkButton';
import AdminLayout from '@/Layouts/AdminLayout';
import FormPost from './Form/FormPost';
import { Suspense } from 'react';

const CreatePost = ({ tags }) => {
  return (
    <>
      <div className="flex justify-between items-center bg-white shadow-sm mb-5 p-6">
        <div className="text-lg font-bold text-zinc-900">Create Post</div>
        <SecondaryLinkButton href={route('admin.post.index')}>
          Back
        </SecondaryLinkButton>
      </div>

      <div className="bg-white p-6 w-full">
        <Suspense fallback={'loading...'}>
          <FormPost tags={tags} />
        </Suspense>
      </div>
    </>
  );
};

CreatePost.layout = (page) => (
  <AdminLayout
    children={page}
    title={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Create Post
      </h2>
    }
    head={'Create Post'}
  />
);

export default CreatePost;
