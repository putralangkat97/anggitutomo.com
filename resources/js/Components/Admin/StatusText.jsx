const StatusText = ({ status = '' }) => {
  let state = '';
  if (status == 'pending') {
    state = 'text-orange-500';
  } else if (status == 'draft') {
    state = 'text-sky-500';
  } else if (status == 'published') {
    state = 'text-green-500';
  } else {
    state = 'text-zinc-500';
  }

  return (
    <>
      <span className={`ml-3 ${state}`}>{status}</span>
      {status === 'pending' && (
        <ClockIcon className="ml-1 w-5 h-6 -mb-0.5 text-orange-500" />
      )}
    </>
  );
};

export default StatusText;
