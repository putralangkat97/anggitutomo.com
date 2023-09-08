import AdminLayout from '@/Layouts/AdminLayout';

const Dashboard = ({ user }) => {
  return (
    <AdminLayout
      user={user}
      title={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
      head={'Dashboard'}
    >
      <div className="bg-white overflow-hidden shadow-sm">
        <div className="p-6 text-gray-900">You're logged in!</div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
