import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import AdminLayout from '@/Layouts/AdminLayout';

const Edit = ({ auth, mustVerifyEmail, status }) => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
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

        <div className="p-4 sm:p-8 bg-white shadow">
          <DeleteUserForm className="max-w-xl" />
        </div>
      </div>
    </div>
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
