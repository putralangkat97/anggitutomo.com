import StatusText from '@/Components/Admin/StatusText';
import EditLinkButton from '@/Components/EditLinkButton';
import LabelTag from '@/Components/LabelTag';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';

const ViewPost = ({ post }) => {
  const { patch: publish, processing } = useForm();
  const [confirmingPublishPost, setConfirmingPublishPost] = useState(false);

  const confirmPublishPost = () => {
    setConfirmingPublishPost(true);
  };

  const closeModal = () => {
    setConfirmingPublishPost(false);
  };

  const publishPost = (e) => {
    e.preventDefault();

    publish(route('admin.post.publish', post.id), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
    });
  };

  return (
    <>
      <div className="flex justify-between items-center bg-white shadow-sm p-6">
        <div className="inline-flex items-center ">
          Status:
          <StatusText status={post.status} />
        </div>
        <div className="space-x-2">
          <EditLinkButton href={route('admin.post.edit', post.id)}>
            Edit
          </EditLinkButton>
          {post.status === 'draft' ? (
            <PrimaryButton onClick={confirmPublishPost}>Publish</PrimaryButton>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="bg-gray-50 shadow-sm p-6">
        <div className="text-lg font-bold text-zinc-900 mb-6">{post.title}</div>
        <div className="mb-6">{post.content}</div>
      </div>
      <div className="bg-white shadow-sm p-6">
        {post.tags.map((item, key) => (
          <LabelTag value={item.name} key={key} className={`mr-2`} />
        ))}
      </div>

      <Modal show={confirmingPublishPost} onClose={closeModal}>
        <form onSubmit={publishPost} className="p-6">
          <h2 className="text-lg font-medium text-gray-900">
            Are you sure you want to publish this post?
          </h2>

          <div className="mt-6 flex justify-end">
            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

            <PrimaryButton className="ml-3" disabled={processing}>
              Publish
            </PrimaryButton>
          </div>
        </form>
      </Modal>
    </>
  );
};

ViewPost.layout = (page) => (
  <AdminLayout
    children={page}
    title={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        View Post
      </h2>
    }
    head={'Edit Post'}
  />
);

export default ViewPost;
