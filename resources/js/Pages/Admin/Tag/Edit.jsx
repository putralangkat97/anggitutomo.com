import SecondaryLinkButton from '@/Components/SecondaryLinkButton';
import AdminLayout from '@/Layouts/AdminLayout';
import { Suspense } from 'react';
import FormUpdate from './Form/FormUpdate';

const EditTag = ({ tag, tags }) => {
  return (
    <>
      <div className="flex justify-between items-center bg-white shadow-sm mb-5 p-6">
        <div className="text-lg font-bold text-zinc-900">Edit Post</div>
        <div className="space-x-2">
          <SecondaryLinkButton href={route('admin.tag.index')}>
            Back
          </SecondaryLinkButton>
        </div>
      </div>

      <div className="bg-white p-6 w-full">
        <Suspense fallback={'loading...'}>
          <FormUpdate dataTag={tag} tags={tags} />
        </Suspense>
      </div>
    </>
  );
};

EditTag.layout = (page) => (
  <AdminLayout
    children={page}
    title={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Edit Post
      </h2>
    }
    head={'Edit Post'}
  />
);

export default EditTag;
