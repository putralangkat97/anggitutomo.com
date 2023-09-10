const LabelTag = ({ value, key, className = '' }) => {
  return (
    <div
      key={key}
      className={`inline-flex items-center px-4 py-2 bg-zinc-800 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-zinc-900 transition ease-in-out duration-150 ${className}`}
    >
      {value}
    </div>
  );
};

export default LabelTag;
