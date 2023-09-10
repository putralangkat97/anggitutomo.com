import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import AdminLayout from '@/Layouts/AdminLayout';

const Edit = ({ auth, mustVerifyEmail, status }) => {
  return (
    // <div className="py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
      <div className="p-4 sm:p-8 bg-white shadow">
        <UpdateProfileInformationForm
          mustVerifyEmail={mustVerifyEmail}
          status={status}
          className="max-w-xl"
        />
      </div>

      <div className="p-4 sm:p-8 bg-white shadow">
        <UpdatePasswordForm className="max-w-xl" />
      </div>

      <div className="p-4 sm:p-8 bg-white shadow md:col-span-2">
        <DeleteUserForm className="" />
      </div>
    </div>
    // </div>
  );
};

Edit.layout = (page) => (
  <AdminLayout
    children={page}
    title={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Profile
      </h2>
    }
    head={'Profile'}
  />
);

export default Edit;
