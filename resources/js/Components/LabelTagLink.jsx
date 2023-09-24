import { Link } from '@inertiajs/react';

const LabelTagLink = ({ value, className = '' }) => {
  let bg = '';
  let text = '';
  if (value == 'laravel') {
    bg = 'bg-[#FB503B]';
    text = 'text-white';
  } else if (value == 'livewire') {
    bg = 'bg-[#FB70A9]';
    text = 'text-zinc-900';
  } else if (value == 'apline') {
    bg = 'bg-[#77C1D2]';
    text = 'text-zinc-900';
  } else if (value == 'tailwind') {
    bg = 'bg-[#38BDF8]';
    text = 'text-zinc-900';
  } else if (value == 'react') {
    bg = 'bg-[#61DAFB]';
    text = 'text-zinc-900';
  } else if (value == 'vue') {
    bg = 'bg-[#41B883]';
    text = 'text-white';
  } else if (value == 'javascript') {
    bg = 'bg-[#F0DB4F]';
    text = 'text-white';
  } else if (value == 'php') {
    bg = 'bg-[#474A8A]';
    text = 'text-white';
  } else if (value == 'inertia') {
    bg = 'bg-[#9553E9]';
    text = 'text-white';
  }

  return (
    <Link
      href={route('post.tag', value)}
      className={`inline-flex items-center px-4 py-2 ${bg} border border-transparent font-semibold text-xs ${text} uppercase tracking-widest hover:${bg} transition ease-in-out duration-150 ${className}`}
    >
      {value}
    </Link>
  );
};

export default LabelTagLink;
