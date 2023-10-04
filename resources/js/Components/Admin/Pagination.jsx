import React from 'react';
import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {
  function getClassName(active) {
    if (active) {
      return 'bg-zinc-700 text-white';
    }
  }

  return (
    links.length > 0 && (
      <div className="mb-4">
        <div className="flex flex-wrap mt-8">
          {links.map((link, key) =>
            link.url === null ? (
              <div className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-zinc-400 border">
                {link.label}
              </div>
            ) : (
              <Link className={`mr-1 mb-1 px-4 py-3 text-sm leading-4 border hover:bg-white focus:border-primary focus:text-primary ${getClassName(link.active)}`} href={link.url}>
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    )
  );
}
