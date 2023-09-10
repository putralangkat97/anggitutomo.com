import StatusText from '@/Components/Admin/StatusText';
import EditLinkButton from '@/Components/EditLinkButton';
import ClockIcon from '@/Components/Icons/Clock';
import LabelTag from '@/Components/LabelTag';
import PrimaryLinkButton from '@/Components/PrimaryLinkButton';
import AdminLayout from '@/Layouts/AdminLayout';

const ViewPost = ({ post }) => {
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
            <PrimaryLinkButton href={route('admin.post.create')}>
              Publish
            </PrimaryLinkButton>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="bg-gray-50 shadow-sm p-6">
        <div className="text-lg font-bold text-zinc-900 mb-6">{post.title}</div>
        <div className='mb-6'>{post.content}</div>
      </div>
      <div className="bg-white shadow-sm p-6">
        {post.tags.map((item, key) => (
          <LabelTag value={item.name} key={key} className={`mr-2`} />
        ))}
      </div>
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
