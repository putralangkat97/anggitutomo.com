import Pagination from '@/Components/Admin/Pagination';
import EditIcon from '@/Components/Icons/Edit';
import PrimaryLinkButton from '@/Components/PrimaryLinkButton';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';

const Tag = ({ tags }) => {
  return (
    <>
      <div className="flex justify-between items-center bg-white shadow-sm mb-5 p-6">
        <div className="text-lg font-bold text-zinc-900">All Tag</div>
        <PrimaryLinkButton href={route('admin.tag.create')}>
          Create Tag
        </PrimaryLinkButton>
      </div>

      <table className="w-full overflow-hidden shadow-sm">
        <thead>
          <tr className="bg-white border-b">
            <th className="text-left p-6">Tag Name</th>
            <th className="text-center p-6">Status</th>
            <th className="text-center p-6">Action</th>
          </tr>
        </thead>
        <tbody>
          {tags.data.length > 0 &&
            tags.data.map((item, key) => (
              <tr className="bg-gray-50" key={key}>
                <td className="text-left p-6">{item.name}</td>
                <td className="text-center p-6">
                  {item.is_active === 1 ? (
                    <span className="text-green-500">Active</span>
                  ) : (
                    <span className="text-zinc-500">Disabled</span>
                  )}
                </td>
                <td className="text-center p-6">
                  <div className="flex justify-center items-center space-x-2">
                    <Link
                      href={route('admin.tag.edit', item.id)}
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
      <Pagination class="mt-6" links={tags.links} />
    </>
  );
};

Tag.layout = (page) => (
  <AdminLayout
    children={page}
    title={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">Tag</h2>
    }
    head={'Tag'}
  />
);

export default Tag;
