import SecondaryLinkButton from '@/Components/SecondaryLinkButton';
import AdminLayout from '@/Layouts/AdminLayout';
import FormPost from './Form/FormPost';
import { Suspense, useState } from 'react';
import FormUpdate from './Form/FormUpdate';
import SecondaryButton from '@/Components/SecondaryButton';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm } from '@inertiajs/react';

const EditPost = ({ tags, post, postTag }) => {
  const { patch: draft, processing } = useForm();
  const [confirmingDraftPost, setconfirmingDraftPost] = useState(false);

  const confirmDraftPost = () => {
    setconfirmingDraftPost(true);
  };

  const closeModal = () => {
    setconfirmingDraftPost(false);
  };

  const draftPost = (e) => {
    e.preventDefault();

    draft(route('admin.post.draft', post.id), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
    });
  };

  return (
    <>
      <div className="flex justify-between items-center bg-white shadow-sm mb-5 p-6">
        <div className="text-lg font-bold text-zinc-900">Edit Post</div>
        <div className="space-x-2">
          {post.status !== 'draft' ? (
            <PrimaryButton onClick={confirmDraftPost}>Draft</PrimaryButton>
          ) : (
            <></>
          )}
          <SecondaryLinkButton href={route('admin.post.index')}>
            Back
          </SecondaryLinkButton>
        </div>
      </div>

      <div className="bg-white p-6 w-full">
        <Suspense fallback={'loading...'}>
          <FormUpdate tags={tags} dataEdit={post} postTag={postTag} />
        </Suspense>
      </div>

      <Modal show={confirmingDraftPost} onClose={closeModal}>
        <form onSubmit={draftPost} className="p-6">
          <h2 className="text-lg font-medium text-gray-900">
            Are you sure you want to draft this post?
          </h2>

          <div className="mt-6 flex justify-end">
            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

            <PrimaryButton className="ml-3" disabled={processing}>
              Draft
            </PrimaryButton>
          </div>
        </form>
      </Modal>
    </>
  );
};

EditPost.layout = (page) => (
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

export default EditPost;
