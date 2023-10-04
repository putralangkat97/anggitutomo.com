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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tags.data.length > 0 &&
          tags.data.map((item, key) => (
            <>
              <div className="bg-white flex flex-col shadow-sm p-4" key={key}>
                <div className="flex justify-between items-center">
                  <span>
                    {item.is_active} {item.name}
                  </span>
                  <div className="flex space-x-2">
                    <div className="flex justify-center items-center space-x-2">
                      <Link
                        href={route('admin.tag.edit', item.id)}
                        className="text-zinc-950 hover:text-orange-600 transition-colors duration-200"
                      >
                        <EditIcon className={'w-5 h-5'} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>

      {tags.length > 10 && <Pagination class="mt-6" links={tags.links} />}
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
