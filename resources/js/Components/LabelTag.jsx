const LabelTag = ({ value, key, className = '' }) => {
  return (
    <div
      key={key}
      className={`inline-flex items-center px-4 py-2 bg-zinc-200 border border-transparent font-semibold text-xs text-zinc-900 uppercase tracking-widest hover:bg-zinc-300 transition ease-in-out duration-150 ${className}`}
    >
      {value}
    </div>
  );
};

export default LabelTag;
