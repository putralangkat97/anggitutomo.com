const Status = ({ status = '', className = '' }) => {
  let state = '';
  if (status == 'pending') {
    state = 'bg-orange-100 text-orange-500';
  } else if (status == 'draft') {
    state = 'bg-sky-100 text-sky-500';
  } else if (status == 'published') {
    state = 'bg-green-100 text-green-500';
  }

  return (
    <>
      <span className={`px-2 py-1 ${state} ${className}`}>{status}</span>
    </>
  );
};

export default Status;
