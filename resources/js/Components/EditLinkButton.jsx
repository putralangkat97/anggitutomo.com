import { Link } from "@inertiajs/react";

export default function EditLinkButton({
  className = '',
  disabled,
  children,
  ...props
}) {
  return (
    <Link
      {...props}
      className={
        `inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
          disabled && 'opacity-25'
        } ` + className
      }
      as="button"
      disabled={disabled}
    >
      {children}
    </Link>
  );
}
